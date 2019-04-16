package com.onlineshop.tshirt.service;
import com.onlineshop.tshirt.bean.User;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.TreeMap;

public interface IUserService {
    public static final Map<String,String> tokenStore = new TreeMap();
    List<User> findAll();
    Optional<User> findById(Long id);
    Optional<User> findByUsername(String username);
}
