package com.onlineshop.tshirt;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
public class TShirtStoreApplication {

	public static void main(String[] args) {
		SpringApplication.run(TShirtStoreApplication.class, args);
	}

}
