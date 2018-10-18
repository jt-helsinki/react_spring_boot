import * as React from 'react';
import { Link } from 'react-router-dom';

export class NotFoundContainer extends React.Component<IProps, any> {
    public render(): JSX.Element {
        return (
            <div>
                <h2>Not Found</h2>
                <Link to="/">Go to main</Link>
            </div>
        );
    }
}