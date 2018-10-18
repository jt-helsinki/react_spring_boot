import { Dispatch } from 'redux';

/**
 * @Note: Declare global variables
 */
declare global {

    /**
     * Matches eleements of the current route. Used when working with the current route.
     */
    interface IMatch {
        isExact: boolean;
        params: any;
        path: string;
        url: string;
    }

    /**
     * Routing props. Provides properties for working with the current route.
     */
    interface IProps {
        actions: any;
        router: any;
        dispatch: Dispatch<any>;
        match: IMatch;
        children: JSX.IntrinsicAttributes | string;
    }
}
