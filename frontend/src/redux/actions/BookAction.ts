import { IAction } from '.';
import { Book } from '../../model';
import { BookActionType } from './types';

///////////////////////////////////////////////////////////////
// View Book Actions
///////////////////////////////////////////////////////////////

export function viewBook(isbn: string): IAction<BookActionType.VIEW_BOOK, string> {
    return {
        payload: isbn,
        type: BookActionType.VIEW_BOOK
    };
}

export function viewBookSuccess(book: Book): IAction<BookActionType.VIEW_BOOK_SUCCES, Book> {
    return {
        payload: book,
        type: BookActionType.VIEW_BOOK_SUCCES
    };
}

export function viewBookNotFound(): IAction<BookActionType.VIEW_BOOK_NOT_FOUND, undefined> {
    return {
        type: BookActionType.VIEW_BOOK_NOT_FOUND
    };
}

///////////////////////////////////////////////////////////////
// List Book Actions
///////////////////////////////////////////////////////////////

export function listBooks(): IAction<BookActionType.LIST_BOOKS, undefined> {
    return {
        type: BookActionType.LIST_BOOKS
    };
}

export function listBooksFromCache(): IAction<BookActionType.LIST_BOOKS_CACHED, undefined> {
    return {
        type: BookActionType.LIST_BOOKS_CACHED
    };
}

export function listBooksSuccess(books: Book[] = []): IAction<BookActionType.LIST_BOOKS_SUCCES, Book[]> {
    return {
        payload: books,
        type: BookActionType.LIST_BOOKS_SUCCES
    };
}

///////////////////////////////////////////////////////////////
// Search Books Actions
///////////////////////////////////////////////////////////////

export function searchForBooks(searchTerm: string): IAction<BookActionType.SEARCH, string> {
    return {
        payload: searchTerm,
        type: BookActionType.SEARCH
    };
}

export function searchForBooksSuccess(books: Book[] = []): IAction<BookActionType.SEARCH_SUCCESS, Book[]> {
    return {
        payload: books,
        type: BookActionType.SEARCH_SUCCESS
    };
}


export function searchForBooksNotFound(books: Book[] = []): IAction<BookActionType.SEARCH_NOT_FOUND, undefined> {
    return {
        type: BookActionType.SEARCH_NOT_FOUND
    };
}


export function resetSearch(): IAction<BookActionType.RESET_SEARCH, undefined> {
    return {
        type: BookActionType.RESET_SEARCH
    };
}
