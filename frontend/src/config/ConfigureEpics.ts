import { combineEpics } from 'redux-observable';
import { BookEpics } from '../redux/epics';

/**
 * Combines all of the application's epics into one single root epic.
 *
 * @type {Epic<Action, Action, void, any>}
 */
export const RootEpics = combineEpics(
    ...BookEpics
    // add the references to each epic file
);