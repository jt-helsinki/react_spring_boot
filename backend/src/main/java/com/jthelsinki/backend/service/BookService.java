package com.jthelsinki.backend.service;

import com.jthelsinki.backend.model.Book;
import com.jthelsinki.backend.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

/**
 * Service to co-ordinate business rules for retrieving books from the database.
 */
@Service
public class BookService {

    @Autowired
    BookRepository bookRepository;

    /**
     * Finds a Book object based on its ISBN.
     *
     * @param isbn the unique ISBN of the Book.
     * @return the matching Book object. If no Book found then returns null.
     */
    public Book findBookById(String isbn) {
        if (isbn == null || isbn.length() < 9) {
            return null;
        }
        return this.bookRepository.findBookById(isbn);
    }

    /**
     * Returns ALL the books in the database. Author is eager fetched.
     *
     * @return A list of Book objects if the search is susccessful. An empty list otherwise.
     */
    public List<Book> findAllBooks() {
        return this.bookRepository.findAllBooks();
    }

    /**
     * Searches the Books table for books matching the search term. Searches based on book author or book title.
     * Author is eager fetched.
     *
     * @param searchTerm The search terms matching the database value for either title or author.name. Case insensitive.
     * @return A list of Book objects if the search is susccessful. An empty list otherwise.
     */
    public List<Book> findBooksByAuthorOrTitle(String searchTerm) {
        if (searchTerm == null || searchTerm.length() < 3) {
            return Collections.emptyList();
        }
        return this.bookRepository.findBooksByAuthorOrTitle(searchTerm);
    }
}
