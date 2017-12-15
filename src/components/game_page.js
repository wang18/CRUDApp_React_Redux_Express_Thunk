import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import GamesList from './games_list';
import {fetchGames, deleteGame} from '../actions/action_games';
import {bindActionCreators} from 'redux';

class GamePage extends Component {
    componentDidMount(){
        this.props.fetchGames();
    }
    render(){
        return(
            <div className="ui container">
                        <h1>Game List</h1>
                        <GamesList games={this.props.games} deleteGame={this.props.deleteGame}/>
            </div>);
    }
}

GamePage.propTypes = {
    games: PropTypes.array.isRequired,
    fetchGames: PropTypes.func.isRequired,
    deleteGame: PropTypes.func.isRequired
}

const mapStateToProps=(state)=>{
    return{
        games: state.games
    }
}

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({fetchGames,deleteGame}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(GamePage);

