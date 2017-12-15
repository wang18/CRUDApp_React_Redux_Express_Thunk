import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {saveGame, fetchGame, updateGame} from '../actions/action_games';
import GameForm from './game_form';

class GameFormPage extends Component{

    state ={redirect: false};

    componentDidMount=()=>{
        if(this.props.match.params._id){
            this.props.fetchGame(this.props.match.params._id);
        }
    }

    saveGame = ({_id, title, cover}) => {
        if(_id){
            return this.props.updateGame({_id, title, cover}).then(
                ()=>{this.setState({redirect: true})},
            );
        }else{
            return this.props.saveGame({title,cover}).then(
                () => {this.setState({redirect: true});},
            );
        }
    }

    render(){
        return(
            <div className="">
                {
                    this.state.redirect ?
                        <Redirect to="/games" /> :
                        <GameForm
                            game={this.props.game}
                            saveGame={this.saveGame}
                        />
                }
            </div>
        );
    }

}

function mapStateToProps(state, props) {
    if(props.match.params._id) {
        return {
            game: state.games.find(item => item._id === props.match.params._id)
        }
    }

    return { game: null };
}
export default connect(mapStateToProps,{saveGame, fetchGame, updateGame})(GameFormPage);