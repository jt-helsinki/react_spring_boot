package com.jthelsinki.backend.model;


import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.io.Serializable;
import java.math.BigDecimal;

@Entity
@Table(name = "BOOKS")
public class Book implements Serializable {

    @Id
    public String isbn;

    public String title;

    public BigDecimal price;

    @ManyToOne
    @JsonManagedReference
    public Author author;

    @Override
    public String toString() {
        return String.format(
                "Book[isbn=%s, title='%s', price='%s']",
                isbn, title, price.toString());
    }

}
