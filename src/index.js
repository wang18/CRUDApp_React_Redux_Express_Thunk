import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {BrowserRouter,Route,Switch}from 'react-router-dom';
import GamesPage from './components/game_page';
import GameFormPage from './components/game_form_page';



const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

ReactDOM.render(<Provider store={store}>
                    <BrowserRouter>
                        <div>
                            <App/>
                            <Switch>
                                <Route path="/games/new" component={GameFormPage}/>
                                <Route path="/games" component={GamesPage}/>
                                <Route path="/game/:_id" component={GameFormPage}/>

                            </Switch>
                        </div>
                    </BrowserRouter>
                </Provider>, document.getElementById('root'));
                registerServiceWorker();
