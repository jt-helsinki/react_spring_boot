import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { bookReducer } from '../redux/reducers';

/**
 * Combines all of the application's reducers into one single root reducer.
 *
 * @type {Reducer<any>}
 */
export const RootReducer = combineReducers({
    bookState: bookReducer,
    router: routerReducer,

    // add any more reducers here.
});