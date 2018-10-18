import * as React from 'react';
import { Link } from 'react-router-dom';

import { Book } from '../../model';

interface Props {
    viewBookRoute: string;
    books: Book[];
}

export const BookList: React.SFC<Props> = (props: Props) => {

    const bookNodes = () => {
        if (props.books === null || props.books.length === 0) {
            return (
                <tr key="0__">
                    <td className="row">No books found.</td>
                </tr>
            );
        } else {
            return props.books.map(book => {
                const fullRoute: string = `${props.viewBookRoute}/${book.isbn}`;
                return (
                    <tr key={book.isbn}>
                        <td className="row"><Link to={fullRoute}>{book.title}</Link></td>
                    </tr>
                );
            })
        }
    }

    return (
        <div>
            <table className="table">
                <tbody>
                    {bookNodes()}
                </tbody>
            </table>
        </div>
    );
}