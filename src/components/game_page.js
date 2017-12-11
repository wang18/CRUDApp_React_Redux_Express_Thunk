import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import GamesList from './games_list';
import {fetchGames} from '../actions/action_games';
import {bindActionCreators} from 'redux';

class GamePage extends Component {
    componentDidMount(){
        this.props.fetchGames();
    }
    render(){
        return(
            <div className="gamePage container">
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <h1>Game List</h1>
                        <GamesList games={this.props.games}/>
                    </div>
                </div>
            </div>);
    }
}

GamePage.propTypes = {
    games: PropTypes.array.isRequired,
    fetchGames: PropTypes.func.isRequired
}

const mapStateToProps=(state)=>{
    return{
        games: state.games
    }
}

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({fetchGames}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(GamePage);

