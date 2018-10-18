import { ActionsObservable, ofType, } from 'redux-observable';
import { Observable } from 'rxjs-compat/Observable';
import { ajax } from 'rxjs/observable/dom/ajax';
import { map, mergeMap } from 'rxjs/operators';

import { Config } from '../../config';
import { Book } from '../../model';
import { IAction, listBooksSuccess, searchForBooksSuccess, viewBookSuccess } from '../actions';
import { BookActionType } from '../actions/types';
/**
 * RXJS epics for async calls to the backend.
 */

/**
 * Base API endpoint url. i.e. http://localhost:8080
 *
 * @type {string} No trailing slash ('/')
 */
const baseAPIUrl: string = Config.configuration().baseAPIUrl;

/**
 * Makes a call to api and retrieves all the books from the database.
 *
 * @param {ActionsObservable<IAction<BookActionType.SEARCH, undefined>>} action$
 * @returns {Observable<IAction<BookActionType.SEARCH_SUCCESS, Book[]>>}
 */
export function listBooks(action$: ActionsObservable<IAction<BookActionType.LIST_BOOKS, undefined>>): Observable<IAction<BookActionType.LIST_BOOKS_SUCCES, Book[]>> {
    return action$.pipe(
        ofType(BookActionType.LIST_BOOKS),
        mergeMap(action => {
            return ajax.getJSON<Book[]>(`${baseAPIUrl}/books/`)
                .pipe(
                    map(response => {
                            return listBooksSuccess(response);
                        }
                    )
                )
        }
    ));
}

/**
 * Makes a call to api and retrieves a book based on the search term.
 *
 * @param {ActionsObservable<IAction<BookActionType.SEARCH, undefined>>} action$
 * @returns {Observable<IAction<BookActionType.SEARCH_SUCCESS, Book[]>>}
 */
export function searchBooks(action$: ActionsObservable<IAction<BookActionType.SEARCH, undefined>>): Observable<IAction<BookActionType.SEARCH_SUCCESS, Book[]>> {
    return action$.pipe(
        ofType(BookActionType.SEARCH),
        mergeMap(action => {
                return ajax.getJSON<Book[]>(`${baseAPIUrl}/books/search/${action.payload}`)
                    .pipe(
                        map(response => {
                                return searchForBooksSuccess(response);
                            }
                        )
                    )
            }
        ));
}

/**
 * Makes a call to api and retrieves a book based on the ISBN.
 *
 * @param {ActionsObservable<IAction<BookActionType.VIEW_BOOK, string>>} action$
 * @returns {Observable<IAction<BookActionType.VIEW_BOOK_SUCCES, Book>>}
 */
export function viewBook(action$: ActionsObservable<IAction<BookActionType.VIEW_BOOK, string>>): Observable<IAction<BookActionType.VIEW_BOOK_SUCCES, Book>> {
    return action$.pipe(
        ofType(BookActionType.VIEW_BOOK),
        mergeMap(action => {
            return ajax.getJSON<Book>(`${baseAPIUrl}/books/${action.payload}`)
                .pipe(
                    map(response => {
                        return viewBookSuccess(response);
                    }
                )
            )
        }
    ));
}

export const BookEpics = [
    listBooks,
    searchBooks,
    viewBook
];
