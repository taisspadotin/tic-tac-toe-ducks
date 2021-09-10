import React  from 'react';
import { Button, Intro, Title, Home, Subtitle } from './style';
import ImageIntro from '../../assets/img/introPic.png';
import {Link} from 'react-router-dom';

export default class Introduction extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            players: 1
        }
    }

    handlePlayer(val){
        localStorage.setItem('players', val)
        this.setState({ players: val });
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
                        <Link to='/game/2' style={{width: '100%'}}>
                            <Button onClick={() => this.handlePlayer(2)}>Dois jogadores</Button>  
                        </Link>
                    </div>
                </Intro>
                
            </Home>
        )
    }
}