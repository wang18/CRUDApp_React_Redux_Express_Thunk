import React from 'react';
import PropTypes from 'prop-types';
const GamesList = (games) => {
    const emptyMsg=(
        <p>There are no games yet in your collection.</p>
    );
    const gameList = (<p>games list</p>);

    return (<div>
        {games.length !== 0 ? gameList : emptyMsg}
    </div>);
}


GamesList.propTypes={
    games: PropTypes.array.isRequired
}

export default GamesList;