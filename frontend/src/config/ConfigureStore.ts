import { History } from 'history';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import { applyMiddleware, compose, createStore, Store } from 'redux';
import { createLogger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';

import { RootEpics, RootReducer } from '.';
import { IRootState } from '../redux/state';

/**
 * Configures the application's state store with reducers, epics and the router middleware.
 *
 * @param {History} history
 * @returns {Store<IRootState>}
 */
export function configureStore(history: History): Store<IRootState> {

    // Build the middleware for intercepting and dispatching navigation actions
    const routerMiddleware = createRouterMiddleware(history);
    const epicMiddleware = createEpicMiddleware();

    const composeEnhancers =
        typeof window === 'object' &&
        window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']
            ? window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({})
            : compose;

    const enhancer = composeEnhancers(
        applyMiddleware(
            epicMiddleware,
            routerMiddleware,
            createLogger(),
        ),
        // other store enhancers if any
    );

    const store: Store<any> = createStore(
        RootReducer,
        enhancer,
    );

    epicMiddleware.run(RootEpics);

    return store;
}
