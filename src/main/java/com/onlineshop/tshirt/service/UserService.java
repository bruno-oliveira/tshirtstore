package com.onlineshop.tshirt.service;

import com.onlineshop.tshirt.bean.User;
import com.onlineshop.tshirt.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService implements IUserService {

    @Autowired
    private UserRepository repository;

    @Override
    public List<User> findAll() {
        List<User> products = (List<User>) repository.findAll();
        return products;
    }

    @Override
    public Optional<User> findById(Long id) {
        Optional<User> user = repository.findById(id);
        return user;
    }

    @Override
    public Optional<User> findByUsername(String username) {
        Optional<User> user = repository.findByUsername(username);
        return user;
    }


}
