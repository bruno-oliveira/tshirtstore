package com.onlineshop.tshirt.controller;

import java.io.Serializable;

public class UserLoginDetails implements Serializable {

    private String username;
    private String pass;

    public UserLoginDetails(){}

    public UserLoginDetails(String username, String pass){
        this.username = username;
        this.pass = pass;
    }

    @Override
    public String toString() {
        return "UserLoginDetails{" +
                "username='" + username + '\'' +
                ", pass='" + pass + '\'' +
                '}';
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPass() {
        return pass;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }
}
