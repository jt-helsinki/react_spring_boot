import { IBookState } from './IBookState';

/**
 * The root state for the application. The application should have one single state store so this
 * interface should contain all the properties required to store the state.
 */
export interface IRootState {

    // demonstrates multiple state objects inside the Root state object
    // ordinarily this would be overkill for this simiple application but
    // as a demo it shows how it is done.

    bookState: IBookState;
}