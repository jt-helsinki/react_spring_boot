import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { BookView } from '../../components';
import { viewBook } from '../../redux/actions';
import { IAction } from '../../redux/actions/IAction';
import { BookActionType } from '../../redux/actions/types';
import { IBookState, IRootState } from '../../redux/state';


interface Props {
    bookState: IBookState;
}

interface DispatchProps {
    viewBook(isbn: string): IAction<BookActionType.VIEW_BOOK, string>;
}

const mapStateToProps = (state: IRootState, ownProps: {}): Props => {
    return {
        bookState: state.bookState
    }
};

const mapDispatchToProps = (dispatch: Dispatch<IAction<BookActionType, string | undefined>>): DispatchProps => {
    return {
        viewBook: (isbn: string): IAction<BookActionType.VIEW_BOOK, string> => dispatch(viewBook(isbn))
    };
};

class Container extends React.Component < IProps & Props & DispatchProps > {

    public componentDidMount () {
        const isbn: string = this.props.match.params["isbn"];
        this.props.viewBook(isbn);
    }

    public render() {
        return (
            <div>
                <BookView book={this.props.bookState.currentBook} />
                <Link to="/">Back to list</Link>
            </div>
        );
    }
}

export const BookViewContainer = connect<Props, DispatchProps, {}>(mapStateToProps, mapDispatchToProps)(Container);

//
