package com.jthelsinki.backend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "AUTHORS")
public class Author implements Serializable {

    @Id
    @GeneratedValue
    public long id;

    public String name;

    @OneToMany(mappedBy = "author")
    @OrderBy("title ASC")
    @JsonBackReference
    public  List<Book> books;

    @Override
    public String toString() {
        return String.format(
                "Author[id=%d, name='%s']",
                id, name);
    }

}
