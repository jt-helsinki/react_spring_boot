import * as React from 'react';
import { Book } from '../../model';

interface Props {
    book: Book;
}



export const BookView: React.SFC<Props> = (props: Props) => {

    if (props.book === null) {
        return (<div>Finding requested book.</div>);
    }

    return (
        <div>
            <h2>{props.book.title}</h2>
            <ul className="list-unstyled">
                <li><strong> Author: </strong> {props.book.author.name }</li>
                <li><strong>ISBN:</strong> {props.book.isbn}</li>
                <li><strong>Price:</strong> {props.book.price}</li>
            </ul>
        </div>
    );
}


