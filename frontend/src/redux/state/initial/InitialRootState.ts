import * as Immutable from 'seamless-immutable';

import { initialBookState } from '.';
import { IRootState } from '..';


export const istate: IRootState = {

    bookState: initialBookState

    // add more state objects here according to the interface.

};

export const initialRootState = Immutable.from(istate);