import * as React from 'react';
import { connect, Dispatch } from 'react-redux';

import { BookList, SearchBox } from '../../components';
import { IAction, listBooks, listBooksFromCache, resetSearch, searchForBooks, viewBook } from '../../redux/actions';
import { BookActionType } from '../../redux/actions/types';
import { IBookState, IRootState } from '../../redux/state';


interface Props {
    bookState: IBookState;
}

interface DispatchProps {
    listBooks(): IAction<BookActionType.LIST_BOOKS, undefined>;
    listBooksFromCache(): IAction<BookActionType.LIST_BOOKS_CACHED, undefined>;
    searchForBooks(searchTerm: string): IAction<BookActionType.SEARCH, string>;
    viewBook(isbn: string): IAction<BookActionType.VIEW_BOOK, string>;
    resetSearch(): IAction<BookActionType.RESET_SEARCH, undefined>;
}

const mapStateToProps = (state: IRootState, ownProps: {}): Props => {
    return {
        bookState: state.bookState
    }
};

const mapDispatchToProps = (dispatch: Dispatch<IAction<BookActionType, string | undefined>>): DispatchProps => {
    return {
        listBooks: (): IAction<BookActionType.LIST_BOOKS, undefined> => dispatch(listBooks()),
        listBooksFromCache: (): IAction<BookActionType.LIST_BOOKS_CACHED, undefined> => dispatch(listBooksFromCache()),
        resetSearch: (): IAction<BookActionType.RESET_SEARCH, undefined> => dispatch(resetSearch()),
        searchForBooks: (searchTerm: string): IAction<BookActionType.SEARCH, string> => dispatch(searchForBooks(searchTerm)),
        viewBook: (isbn: string): IAction<BookActionType.VIEW_BOOK, string> => dispatch(viewBook(isbn))
    };
};

class Container extends React.Component < IProps & Props & DispatchProps > {

    /**
     * Lifecycle. Over rides super.componentDidMount()
     */
    public componentDidMount() {

        this.loadBooks();
    }

    public render() {
        return (
            <div>
                <SearchBox value={this.props.bookState.searchTerm} handleOnSubmitFunction={this.searchForBooksClickHandler} handleOnResetFunction={this.searchResetClickHandler}/>
                <BookList viewBookRoute="/viewBook" books={this.props.bookState.booksToDisplay} />
            </div>
        );
    }

    ////////////////////
    // private methods
    ////////////////////

    private searchForBooksClickHandler = (searchTerm: string) => {
        this.props.searchForBooks(searchTerm);
    }

    private searchResetClickHandler = () => {
        this.loadBooks();
    }

    private loadBooks(): void {
        // if the list is already loaded then don't make a network call.
        // grab from the cache instead.

        if (this.props.bookState.allBooks.length === 0) {
            this.props.listBooks();
        } else {
            this.props.listBooksFromCache();
        }
    }
}

export const BookContainer = connect<Props, DispatchProps, {}>(mapStateToProps, mapDispatchToProps)(Container);


