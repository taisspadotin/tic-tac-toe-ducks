import React  from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { GameActions } from '../../store/duck';
import { Button, Intro, Title, Home } from './style';
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
                    <Title fontSize="8em">#</Title>
                    <Title color="#a2f102">J<span className="s1">o</span>go da <span className="s2">ve</span>lh<span className="s3">a</span></Title>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <Link to='/game' style={{width: '100%'}}>
                            <Button op={1} onClick={() => this.handlePlayer(1)}>Um jogador</Button>  
                        </Link>
                        <Link to='/game' style={{width: '100%'}}>
                            <Button op={2} onClick={() => this.handlePlayer(2)}>Dois jogadores</Button>  
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