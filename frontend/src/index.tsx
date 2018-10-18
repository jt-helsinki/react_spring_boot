import createBrowserHistory from 'history/createBrowserHistory';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import 'rxjs';

import { Layout } from './components';
import { configureStore } from './config';
import { BookContainer, BookViewContainer, NotFoundContainer } from './containers';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const history = createBrowserHistory();
const store = configureStore(history);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Layout>
                <Switch>
                    <Route exact path="/" component={BookContainer}/>
                    <Route exact path="/search" component={BookContainer}/>
                    <Route exact path="/viewBook/:isbn" component={BookViewContainer}/>
                    <Route component={NotFoundContainer}/>
                </Switch>
            </Layout>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root') as HTMLElement
);

registerServiceWorker();
