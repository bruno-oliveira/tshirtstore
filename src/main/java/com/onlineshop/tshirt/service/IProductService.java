package com.onlineshop.tshirt.service;

import com.onlineshop.tshirt.bean.Product;

import java.util.List;
import java.util.Optional;

public interface IProductService {

    public List<Product> findAll();
    public Optional<Product> findById(Long id);
}
