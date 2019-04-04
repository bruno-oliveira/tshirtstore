package com.onlineshop.tshirt.service;

import com.onlineshop.tshirt.bean.Product;

import java.util.List;
import java.util.Optional;

public interface IProductService {

     List<Product> findAll();
     Optional<Product> findById(Long id);
     void deleteById(Long id);
     void update(Product p);
}
