import * as React from 'react';

interface Props {
    value: string;
    handleOnSubmitFunction: Function;
    handleOnResetFunction: Function;

}

export const SearchBox: React.SFC<Props> = (props: Props) => {

    const handleOnSubmit = (event: any) => {
        event.preventDefault();
        const searchField = event.target.elements.searchField.value;
        props.handleOnSubmitFunction(searchField);
        return false;
    }

    const handleResetOnClick = (event: any) => {
        props.handleOnResetFunction();
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <div className="input-group mb-3">
                <input
                    name="searchField"
                    defaultValue={props.value}
                    type="text"
                    id="basic-search"
                    placeholder="Search for books by exact author or title"
                    className="form-control"
                    aria-describedby="basic-addon3"
                />
                &nbsp;
                <button  className="btn btn-primary" type="submit">
                    Search
                </button>
                &nbsp;
                <button  className="btn btn-secondary" type="reset" onClick={handleResetOnClick}>
                    Reset
                </button>
            </div>
        </form>
    );
}

