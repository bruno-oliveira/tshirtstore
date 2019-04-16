package com.onlineshop.tshirt.controller;

import com.onlineshop.tshirt.bean.Product;
import com.onlineshop.tshirt.bean.User;
import com.onlineshop.tshirt.service.IUserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Base64;
import java.util.IdentityHashMap;
import java.util.Map;
import java.util.TreeMap;


@Controller
public class UserController {

    private static final Logger LOGGER = LoggerFactory.getLogger(UserController.class);

    private final Map<String,String> tokenStore = new TreeMap();

    @Autowired
    IUserService userService;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(path="/showAllUsers")
    public @ResponseBody Iterable<User> getAllUsers() {
        return userService.findAll();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(path="/showUser/{user_id}")
    public  @ResponseBody User getUserByID( @PathVariable("user_id") Long user_id) {
        User p = userService.findById(user_id).get();
        byte[] decodedBytes = Base64.getDecoder().decode(p.getPassword());
        String decodedString = new String(decodedBytes);
       LOGGER.info("password is "+ decodedString);
        LOGGER.info("Retrieved item with id "+user_id);
        return p;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(path="/showUserByName/{username}")
    public  @ResponseBody ResponseEntity<User> getUserByUsername( @PathVariable("username") String username) {
        User p = userService.findByUsername(username).get();
        return ResponseEntity.ok().header("Access-Control-Allow-Origin", "*").body(p);
    }


    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/login", method = RequestMethod.POST, produces = "application/json")
    public @ResponseBody ResponseEntity<String> login(@RequestBody UserLoginDetails userLogin) {
       System.out.println(userLogin.toString());
        User p = userService.findByUsername(userLogin.getUsername()).get();
        byte[] decodedBytes = Base64.getDecoder().decode(p.getPassword());
        String decodedString = new String(decodedBytes);
        if(userLogin.getUsername().equals(p.getUsername()) && userLogin.getPass().equals(decodedString)) {
            final String userToken = Base64.getEncoder().encodeToString((userLogin.getUsername() + ":" + userLogin.getPass()).getBytes());
            tokenStore.put(userLogin.getUsername(),userToken);
            return ResponseEntity
                    .ok()
                    .contentType(MediaType.APPLICATION_JSON)
                    .header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, OPTIONS")
                    .body(tokenStore.get(userLogin.getUsername()));
        }
        else{
            return ResponseEntity.badRequest().body("Wrong request");
        }

    }

   /* @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping("/user")
    public Principal user(HttpServletRequest request) {
        String authToken = request.getHeader("Authorization").substring("Basic".length()).trim();
        return () -> new String(Base64.getDecoder().decode(authToken)).split(":")[0];
    }*/
}