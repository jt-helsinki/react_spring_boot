import { Book } from '../../model/Book';

export interface IBookState {

    /**
     * The search term used for searching for books.
     */
    searchTerm: string;

    /**
     * The current book being viewed.
     */
    currentBook: Book;

    /**
     * All the books contained in the database. Once loaded, this should not chancge.
     */
    allBooks: Book[];

    /**
     * May be all the books or a subset of the books conatained
     * in the allBooks property.
     */
    booksToDisplay: Book[];

    // add more properties here as required.

}