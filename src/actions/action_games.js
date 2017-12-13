import {FETCH_GAMES, SET_GAMES, ADD_GAME, GAME_FETCHED} from './type_constants';

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

function handleResponse(response) {
    if(response.ok){
        return response.json();
    }else{
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}

export function addGame(game) {
    return {
        type: ADD_GAME,
        game
    }
}

export function saveGame(data) {
    return dispatch => {
        return fetch('/api/games', {
            method: 'post',
            body: JSON.stringify(data),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(handleResponse)
            .then(data => dispatch(addGame(data.game)));
    }
}

export function gameFetched(game) {
    return {
        type: GAME_FETCHED,
        game
    }
}

export function fetchGame(id) {
    return dispatch => {
        fetch(`/api/games/${id}`)
            .then(res => res.json())
            .then(data => dispatch(gameFetched(data.game)));
    }
}