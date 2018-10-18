import * as Immutable from 'seamless-immutable';
import { ObjectUtils } from '../../common/utils';
import { Author, Book } from '../../model';
import { IAction } from '../actions';
import { BookActionType } from '../actions/types';
import { IBookState } from '../state';
import { initialBookState } from '../state/initial';


const reducer = (state: IBookState  = initialBookState, action: IAction<BookActionType, Book | Book[] | undefined>): IBookState => {
    /**
     * Declare the new state here. The spread operator (...) will  only shallow clone. Instead we
     * do a deep clone of the state, make our changes and then return an immuatable object.
     */
    const newState: IBookState = ObjectUtils.deepClone(state);
    switch (action.type) {

        case BookActionType.LIST_BOOKS_SUCCES:
            newState.booksToDisplay = action.payload as Book[];
            newState.allBooks = action.payload as Book[];
            break;
        case BookActionType.LIST_BOOKS_CACHED:
            newState.booksToDisplay = newState.allBooks;
            break;
        case BookActionType.VIEW_BOOK_SUCCES:
            newState.currentBook = action.payload as Book;
            break;
        case BookActionType.VIEW_BOOK_NOT_FOUND:
            newState.currentBook = new Book();
            newState.currentBook.author = new Author();
            break;
        case BookActionType.SEARCH_SUCCESS:
            console.log(action.payload);
            newState.booksToDisplay = action.payload as Book[];
            break;
        case BookActionType.RESET_SEARCH:
            newState.searchTerm = "";
            newState.booksToDisplay = newState.allBooks;
            break;
        default:
            // there is no compatible action so make no change to the state
            return state;
    }
    return Immutable.from(newState);
};

export const bookReducer =  reducer;
