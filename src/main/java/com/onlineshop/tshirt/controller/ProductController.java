package com.onlineshop.tshirt.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.onlineshop.tshirt.service.IProductService;
import com.onlineshop.tshirt.bean.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

// TODO improve controller to not get directy DB entities (@Product) - maybe it needs a DTO class

@Controller
public class ProductController {

    @Autowired
    IProductService productService;

    @CrossOrigin(origins = "http://localhost:63342")
    @GetMapping(path="/showAllProducts")
    public @ResponseBody Iterable<Product> getAllProducts() {
        return productService.findAll();
    }


    @GetMapping(path="/showProducts/{product_id}")
    public String getProductByID( @PathVariable("product_id") Long product_id, Model m) {
        Product p = productService.findById(product_id).get();
        ObjectMapper mapper = new ObjectMapper();
        String ansAsJSON = "";
        try {
            ansAsJSON = mapper.writeValueAsString(p);
            return ansAsJSON;
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return ansAsJSON;
    }
}
