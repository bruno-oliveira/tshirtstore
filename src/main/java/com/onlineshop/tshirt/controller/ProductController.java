package com.onlineshop.tshirt.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.onlineshop.tshirt.service.IProductService;
import com.onlineshop.tshirt.bean.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

// TODO improve controller to not get directy DB entities (@Product) - maybe it needs a DTO class

@Controller
public class ProductController {

    @Autowired
    IProductService productService;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(path="/showAllProducts")
    public @ResponseBody Iterable<Product> getAllProducts() {
        return productService.findAll();
    }


    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(path="/showProducts/{product_id}")
    public  @ResponseBody Product getProductByID( @PathVariable("product_id") Long product_id) {
        Product p = productService.findById(product_id).get();
        System.out.println("Retrieved item with id "+product_id);
       return p;
    }

    //Check deleteByID - maybe this wasnt working before due to not having the observable in delete (see @https://angular.io/guide/http#making-a-delete-request )
    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping(path="/deleteProduct/{product_id}")
    public ResponseEntity<Product> deleteProductByID(@PathVariable("product_id") Long product_id) {
        Product p = productService.findById(product_id).orElse(null);
        System.out.println(p!=null?"Found product with id "+product_id:"Not found");
        if(p!=null) {
            productService.delete(p);
            System.out.println("Deleted product with id " + product_id);
            return new ResponseEntity<Product>(HttpStatus.OK);
        }
        else{
            return new ResponseEntity<Product>(HttpStatus.EXPECTATION_FAILED);
        }
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping(path="/updateProduct/{product_id}")
    public  @ResponseBody void updateProductDetails(@RequestBody Product updatedProd, @PathVariable("product_id") Long product_id){
        Product p = productService.findById(product_id).get();
        System.out.println("new name is "+updatedProd.getName());
       p.setName(updatedProd.getName());
        productService.update(p);

    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping(path="/createProduct")
    public ResponseEntity<Product> addProduct(@RequestBody Product product) {
       System.out.println("New product to be added is "+product);
       Product p = new Product();
       p.setName(product.getName());
       p.setDescription(product.getDescription());
       p.setPrice(product.getPrice());
       p.setDiscounted_price(product.getDiscounted_price());
       p.setDisplay(product.getDisplay());
       productService.save(p);
       return new ResponseEntity<Product>(HttpStatus.OK);
    }

}
