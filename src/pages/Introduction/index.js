import React  from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { GameActions } from '../../store/duck';
import { Button, Intro, Title, Home, Subtitle } from './style';
import ImageIntro from '../../assets/img/introPic.png';
import {Link} from 'react-router-dom';

class Introduction extends React.Component{
    constructor(props){
        super(props);
    }

    handlePlayer(val){
        this.props.setPlayers(val);
    }

    render(){
        return(
            <Home>
                <Intro>
                    <img style={{width: '25%'}} src={ImageIntro}/>
                    <Title>Jogo da velha</Title>
                    <Subtitle>
                    Se divirata jogando o famoso jogo da velha
                    </Subtitle>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <Link to='/game' style={{width: '100%'}}>
                            <Button onClick={() => this.handlePlayer(1)}>Um jogador</Button>  
                        </Link>
                        <Link to='/game' style={{width: '100%'}}>
                            <Button onClick={() => this.handlePlayer(2)}>Dois jogadores</Button>  
                        </Link>
                    </div>
                </Intro>
                
            </Home>
        )
    }
}

const stateToProps =  store => ({
    gameState: store.game
})

const dispatchToProps = dispatch => {
    const dispatchActions = Object.assign({}, GameActions);
    return bindActionCreators(dispatchActions, dispatch);
};

export default connect(stateToProps, dispatchToProps)(Introduction);