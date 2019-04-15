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


@Controller
public class UserController {

    private static final Logger LOGGER = LoggerFactory.getLogger(UserController.class);

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
    @RequestMapping(value = "/login", method = RequestMethod.POST, produces = "application/json")
    public @ResponseBody ResponseEntity<String> login(@RequestBody UserLoginDetails userLogin) {
        LOGGER.info(userLogin.toString());

        return ResponseEntity
                .ok()
                .contentType(MediaType.APPLICATION_JSON)
                .body(Base64.getEncoder().encodeToString((userLogin.getUsername()+":"+userLogin.getPass()).getBytes()));

    }

   /* @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping("/user")
    public Principal user(HttpServletRequest request) {
        String authToken = request.getHeader("Authorization").substring("Basic".length()).trim();
        return () -> new String(Base64.getDecoder().decode(authToken)).split(":")[0];
    }*/
}