import React from 'react';
import PropTypes from 'prop-types';
import GameCard from './game_card';

const GamesList = ({games, deleteGame}) => {
    const emptyMsg=(
        <p>There are no games yet in your collection.</p>
    );

    const gamesList = (
        <div className="ui four cards">
            { games.map(game => <GameCard game={game} key={game._id}  deleteGame={deleteGame}/>) }
        </div>
    );

    return (
        <div>
            {games.length === 0 ? emptyMsg : gamesList}
        </div>
    );
}

GamesList.propTypes={
    games: PropTypes.array.isRequired,
    deleteGame: PropTypes.func.isRequired

}

export default GamesList;