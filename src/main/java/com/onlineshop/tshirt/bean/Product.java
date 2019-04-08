package com.onlineshop.tshirt.bean;
//| product_id | name | description  | price | discounted_price | image  | image_2  | thumbnail | display |


import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name="product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long product_id;

    private String name;
    private String description;
    private Double price;
    private Double discounted_price;
    private String image;
    private String image_2;
    private String thumbnail;
    private Integer display;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Product product = (Product) o;
        return Objects.equals(getProduct_id(), product.getProduct_id()) &&
                Objects.equals(getName(), product.getName()) &&
                Objects.equals(getDescription(), product.getDescription()) &&
                Objects.equals(getPrice(), product.getPrice()) &&
                Objects.equals(getDiscounted_price(), product.getDiscounted_price()) &&
                Objects.equals(getImage(), product.getImage()) &&
                Objects.equals(getImage_2(), product.getImage_2()) &&
                Objects.equals(getThumbnail(), product.getThumbnail()) &&
                Objects.equals(getDisplay(), product.getDisplay());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getProduct_id(), getName(), getDescription(), getPrice(), getDiscounted_price(), getImage(), getImage_2(), getThumbnail(), getDisplay());
    }

    @Override
    public String toString() {
        return "Product{" +
                "product_id=" + product_id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", price=" + price +
                ", discounted_price=" + discounted_price +
                ", image='" + image + '\'' +
                ", image_2='" + image_2 + '\'' +
                ", thumbnail='" + thumbnail + '\'' +
                ", display=" + display +
                '}';
    }

    public Product(){

    }
    public Product(Long product_id, String name, String description, Double price, Double discounted_price, String image, String image_2, String thumbnail, Integer display) {
        this.product_id = product_id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.discounted_price = discounted_price;
        this.image = image;
        this.image_2 = image_2;
        this.thumbnail = thumbnail;
        this.display = display;
    }

    public Double getDiscounted_price() {
        return discounted_price;
    }

    public void setDiscounted_price(Double discounted_price) {
        this.discounted_price = discounted_price;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getImage_2() {
        return image_2;
    }

    public void setImage_2(String image_2) {
        this.image_2 = image_2;
    }

    public String getThumbnail() {
        return thumbnail;
    }

    public void setThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getDisplay() {
        return display;
    }

    public void setDisplay(Integer display) {
        this.display = display;
    }

    public Long getProduct_id() {
        return product_id;
    }

    public void setProduct_id(Long product_id) {
        this.product_id = product_id;
    }
}
