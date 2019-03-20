package com.onlineshop.tshirt.controller;

import com.onlineshop.tshirt.service.IProductService;
import com.onlineshop.tshirt.bean.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class ProductController {

    @Autowired
    IProductService productService;

    @GetMapping(path="/all")
    public @ResponseBody Iterable<Product> getAllUsers() {
        // This returns a JSON or XML with the users
        return productService.findAll();
    }

    @GetMapping(path="/showProducts")
    public String showProducts(Model m) {

        m.addAttribute("products",productService.findAll());

        return "showProducts";
    }

    @GetMapping(path="/showProducts/{product_id}")
    public String showProductByID( @PathVariable("product_id") Long product_id, Model m) {
        Product p = productService.findById(product_id).get();
        m.addAttribute("singleProduct",p);
        System.out.println(p.getDescription());
        return "showSingleProduct";
    }
}
