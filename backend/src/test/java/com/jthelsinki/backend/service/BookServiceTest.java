package com.jthelsinki.backend.service;

import com.jthelsinki.backend.model.Book;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static junit.framework.TestCase.*;
import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest
public class BookServiceTest {

    @Autowired
    private BookService bookService;

    @Test
    public void contextLoads() throws Exception {
        assertThat(bookService).isNotNull();
    }

    @Test
    public void findAllBooksTest() throws Exception {

        List<Book> books = this.bookService.findAllBooks();
        assertEquals(books.size(), 31);
        assertEquals(books.get(0).toString(), "Book[isbn=195153448, title='Classical Mythology', price='2.99']");
    }

    @Test
    public void findBookByIdTest() throws Exception {
        Book book = this.bookService.findBookById("195153448");
        assertNotNull(book);
        assertEquals(book.toString(), "Book[isbn=195153448, title='Classical Mythology', price='2.99']");
    }

    @Test
    public void findBookByIncorrectIdTest() throws Exception {
        Book nullBook = this.bookService.findBookById("123456789");
        assertNull(nullBook);

        Book nullBook2 = this.bookService.findBookById("12345678");
        assertNull(nullBook2);
    }

    @Test
    public void findBooksByTitleTest() throws Exception {
        List<Book> books = this.bookService.findBooksByAuthorOrTitle("Classical Mythology");
        assertEquals(books.size(), 1);
        assertEquals(books.get(0).toString(), "Book[isbn=195153448, title='Classical Mythology', price='2.99']");
    }

    @Test
    public void findBooksByAuthorTest() throws Exception {
        List<Book> books = this.bookService.findBooksByAuthorOrTitle("Mark P. O. Morford");
        assertEquals(books.size(), 1);
        assertEquals(books.get(0).toString(), "Book[isbn=195153448, title='Classical Mythology', price='2.99']");
    }

    @Test
    public void findBooksByFakeAuthorTest() throws Exception {
        List<Book> books = this.bookService.findBooksByAuthorOrTitle("Chopper");
        assertEquals(books.size(), 0);
    }
}
