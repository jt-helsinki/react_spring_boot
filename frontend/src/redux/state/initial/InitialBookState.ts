import * as Immutable from 'seamless-immutable';
import { IBookState } from '..';

const istate: IBookState = {

    searchTerm: "",

    currentBook: null,

    allBooks: [],

    booksToDisplay: []

    // add more state properites here according to the interface.

};

export const initialBookState = Immutable.from(istate);