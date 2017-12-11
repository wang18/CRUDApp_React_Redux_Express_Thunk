import {FETCH_GAMES, SET_GAMES} from './type_constants';

export function setGames(games) {
    return{
        type: SET_GAMES,
        games
    }
}
export function fetchGames() {
    return dispatch => {
        fetch('/api/games')
            .then(res => res.json())
            .then(data => dispatch(setGames(data.games)));
    }
}

