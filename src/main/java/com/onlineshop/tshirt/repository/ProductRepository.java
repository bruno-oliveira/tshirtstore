package com.onlineshop.tshirt.repository;

import com.onlineshop.tshirt.bean.Product;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProductRepository extends CrudRepository<Product,Long> {
    Optional<Product> findById(Long productId);
    void deleteById(Long productId);
}
