package com.onlineshop.tshirt.repository;

import com.onlineshop.tshirt.bean.Product;
import com.onlineshop.tshirt.bean.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User,Long> {
    Optional<User> findById(Long userId);
    void deleteById(Long userId);
}
