package com.onlineshop.tshirt.repository;

import com.onlineshop.tshirt.bean.Product;
import com.onlineshop.tshirt.bean.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User,Long> {
    Optional<User> findById(Long userId);
    void deleteById(Long userId);

    @Query("select u from User u where u.username=:username")
    Optional<User> findByUsername(@Param("username") String username);
}
