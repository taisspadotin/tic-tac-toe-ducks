import React from 'react';
import { connect } from "react-redux";
import { Body, Card, Container, Row, FullView, View, ButtonAgain, IconWinner, CurrentTurn, Option, Title, Arrow } from './style';
import LogicGame from './LogicGame';

class Game extends LogicGame{
    constructor(props){
        super(props);
        this.state = {
            game: [
                {
                    id: 0,
                    checked: false,
                    value: '',
                    icon: ''
                },
                {
                    id: 1,
                    checked: false,
                    value: '',
                    icon: ''
                },
                {
                    id: 2,
                    checked: false,
                    value: '',
                    icon: ''
                },
                {
                    id: 3,
                    checked: false,
                    value: '',
                    icon: ''
                },
                {
                    id: 4,
                    checked: false,
                    value: '',
                    icon: ''
                },
                {
                    id: 5,
                    checked: false,
                    value: '',
                    icon: ''
                },
                {
                    id: 6,
                    checked: false,
                    value: '',
                    icon: ''
                },
                {
                    id: 7,
                    checked: false,
                    value: '',
                    icon: ''
                },
                {
                    id: 8,
                    checked: false,
                    value: '',
                    icon: ''
                }
            ],
            currentTurn: 'x',
            visibleMessage: false,
            winner: '',
            velha: false,
            winnerPosition: [],
            valor1: [],
            valor2: [],
            players: this.props.gameState.players,
            canPlay: false
        }
        this.handleValue = this.handleValue.bind(this);
    }

    render(){
        let { game, currentTurn, velha, winnerPosition } = this.state;
        let backColor = "#000";
        let turnIcon = '';
        if(currentTurn === 'x'){
            turnIcon = <Option>X</Option>;
        } else {
            turnIcon = <Option>O</Option>;
        }
        return(
            <>
            <Body>
                <Title>J<span className="s1">o</span>go <span className="s2">da</span> <span className="s3">velha</span></Title>
                <Card>
                    <div style={{width: '80%'}}>
                    <Container>
                        <Row bl='0px' bt='0px' br='0px' op={game[0].value} onClick={()=>this.handleValue(0)} background={winnerPosition.indexOf(0) >= 0 ? 'red': backColor}>
                            {game[0].icon}
                        </Row>
                        <Row bt='0px' br='0px' op={game[1].value} onClick={()=>this.handleValue(1)} background={winnerPosition.indexOf(1) >= 0 ? 'red': backColor}>
                            {game[1].icon}
                        </Row>
                        <Row br='0px' bt='0px' op={game[2].value} onClick={()=>this.handleValue(2)} background={winnerPosition.indexOf(2) >= 0 ? 'red': backColor}>
                            {game[2].icon}
                        </Row>

                        <Row bl='0px' bt='0px' br='0px' op={game[3].value} onClick={()=>this.handleValue(3)} background={winnerPosition.indexOf(3) >= 0 ? 'red': backColor}>
                            {game[3].icon}
                        </Row>
                        <Row bt='0px' br='0px' op={game[4].value} onClick={()=>this.handleValue(4)} background={winnerPosition.indexOf(4) >= 0 ? 'red': backColor}>
                            {game[4].icon}
                        </Row>
                        <Row br='0px' bt='0px' op={game[5].value} onClick={()=>this.handleValue(5)} background={winnerPosition.indexOf(5) >= 0 ? 'red': backColor}>
                            {game[5].icon}
                        </Row>

                        <Row bl='0px' bt='0px' bb='0px' br='0px' op={game[6].value} onClick={()=>this.handleValue(6)} background={winnerPosition.indexOf(6) >= 0 ? 'red': backColor}>
                            {game[6].icon}
                        </Row>
                        <Row bt='0px' bb='0px' br='0px' op={game[7].value} onClick={()=>this.handleValue(7)} background={winnerPosition.indexOf(7) >= 0 ? 'red': backColor}>
                            {game[7].icon}
                        </Row>
                        <Row br='0px' bt='0px' bb='0px' op={game[8].value} onClick={()=>this.handleValue(8)} background={winnerPosition.indexOf(8) >= 0 ? 'red': backColor}>
                            {game[8].icon}
                        </Row>
                    </Container>
                    </div>
                </Card>
            </Body>
            <CurrentTurn title="Vez Atual">
                {turnIcon}
            </CurrentTurn>
            <Arrow top="40px" op={1}>↗</Arrow>
            <Arrow right="20px" op={2} style={{transform: 'rotate(-30deg)'}}>↗</Arrow>
            {this.state.visibleMessage && 
                <FullView>
                    <View> 
                        {velha ? 
                            <h5 style={{margin: 0}}>
                                VELHA
                            </h5>
                        :
                            <h5 style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                Vencedor: <IconWinner style={{marginLeft: '20px'}}>{this.state.winner}</IconWinner>
                            </h5>
                        }
                        <ButtonAgain onClick={()=>this.reload()}>
                            Jogar Novamente  ⭮
                        </ButtonAgain>
                    </View>
                </FullView>
            }
            </>
        )
    }
}

const stateToProps =  store => ({
    gameState: store.game
})

export default connect(stateToProps)(Game);