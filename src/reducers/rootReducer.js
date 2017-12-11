import {combineReducers} from 'redux';
import games from './reducer_games';

const rootReducer = combineReducers({
    games
});

export default rootReducer;