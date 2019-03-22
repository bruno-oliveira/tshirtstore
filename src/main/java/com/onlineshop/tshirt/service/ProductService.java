package com.onlineshop.tshirt.service;

import com.onlineshop.tshirt.bean.Product;
import com.onlineshop.tshirt.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService implements IProductService {

    @Autowired
    private ProductRepository repository;

    @Override
    public List<Product> findAll() {
        List<Product> products = (List<Product>) repository.findAll();
        return products;
    }

    @Override
    public Optional<Product> findById(Long id) {
        Optional<Product> product = repository.findById(id);
        return product;
    }

    @Override
    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
