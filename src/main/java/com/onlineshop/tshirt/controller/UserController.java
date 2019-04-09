package com.onlineshop.tshirt.controller;

import java.security.Principal;
import java.util.Base64;

import javax.servlet.http.HttpServletRequest;


import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class UserController {

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping("/login")
    public boolean login(@RequestBody com.onlineshop.tshirt.bean.User user) {

        return (user.getUserName().equals("user") && user.getPassword().equals("password")) || (user.getUserName().equals("John") && user.getPassword().equals("john123"));
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping("/user")
    public Principal user(HttpServletRequest request) {
        String authToken = request.getHeader("Authorization").substring("Basic".length()).trim();
        return () -> new String(Base64.getDecoder().decode(authToken)).split(":")[0];
    }
}