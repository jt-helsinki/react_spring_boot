package com.jthelsinki.backend.api;

import com.jthelsinki.backend.model.Book;
import com.jthelsinki.backend.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Exposes a RESTful API for retrieving books from the database.
 *
 * Results will be serialised to JSON.
 */
@RestController
@RequestMapping(value = "/books")
@CrossOrigin(origins = "http://localhost:3000")
public class BookController {

    @Autowired
    private BookService bookService;

    /**
     * Finds a Book object based on its ISBN.
     *
     * @param isbn the unique ISBN of the Book.
     * @return the matching Book object. If no Book found then returns null.
     */
    @GetMapping(path = "/{isbn}", produces="application/json")
    public Book findBookByIsbn(@PathVariable(value = "isbn") String isbn) {
        return this.bookService.findBookById(isbn);
    }

    /**
     * Returns ALL the books in the database. Author is eager fetched.
     *
     * @return A list of Book objects if the search is susccessful. An empty list otherwise.
     */
    @GetMapping(path = "/", produces="application/json")
    public List<Book> findAllBooks() {
        return this.bookService.findAllBooks();
    }

    /**
     * Returns the Books table for books matching the search term. Searches based on book author or book title.
     *
     * @param searchTerm The search terms matching the database value for either title or author.name. Case insensitive.
     * @return A list of Book objects if the search is susccessful. An empty list otherwise.
     */
    @GetMapping(path = "/search/{searchTerm}", produces="application/json")
    public List<Book> findBooksByAuthorOrTitle(@PathVariable(value = "searchTerm") String searchTerm) {
        return this.bookService.findBooksByAuthorOrTitle(searchTerm);
    }

}
