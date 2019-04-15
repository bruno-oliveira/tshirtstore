package com.onlineshop.tshirt.service;
import com.onlineshop.tshirt.bean.User;

import java.util.List;
import java.util.Optional;

public interface IUserService {
    List<User> findAll();
    Optional<User> findById(Long id);
    Optional<User> findByUsername(String username);
}
