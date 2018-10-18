package com.jthelsinki.backend.repository;

import com.jthelsinki.backend.model.Book;
import org.springframework.dao.support.DataAccessUtils;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import java.util.List;

/**
 * A repository for mediating between the domain and data mapping layer.
 */
@Repository
@Transactional(readOnly = true)
public class BookRepository {

    @PersistenceContext
    private EntityManager entityManager;

    /**
     * Finds a Book object based on its ISBN.
     *
     * @param isbn the unique ISBN of the Book.
     * @return the matching Book object. If no Book found then returns null.
     */
    public Book findBookById(String isbn) {
        TypedQuery<Book> query =  entityManager.createQuery("select book from Book book join fetch book.author author " +
                "where book.isbn = :isbn", Book.class);
        query.setParameter("isbn", isbn);
        return DataAccessUtils.singleResult(query.getResultList());
    }

    /**
     * Returns ALL the books in the database. Author is eager fetched.
     *
     * @return A list of Book objects if the search is susccessful. An empty list otherwise.
     */
    public List<Book> findAllBooks() {
        return  entityManager.createQuery("select book from Book book join fetch book.author author ORDER BY book.title", Book.class)
                .getResultList();
    }

    /**
     * Searches the Books table for books matching the search term. Searches based on book author or book title.
     * Author is eager fetched.
     *
     * @param searchTerm The search terms matching the database value for either title or author.name. Case insensitive.
     * @return A list of Book objects if the search is susccessful. An empty list otherwise.
     */
    public List<Book> findBooksByAuthorOrTitle(String searchTerm) {
        TypedQuery<Book> query =  entityManager.createQuery("select book from Book book join fetch book.author author " +
                "where lower(book.title) = :searchTerm OR lower(author.name) = :searchTerm " +
                "ORDER BY book.title", Book.class);
        query.setParameter("searchTerm", searchTerm.toLowerCase());
        return query.getResultList();
    }

}
