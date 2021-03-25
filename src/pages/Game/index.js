import React from 'react';
import { Body, Card, Container, Row, FullView, View, ButtonAgain, IconWinner, CurrentTurn } from './style';
import { Close, RadioButtonUnchecked, Replay } from "@material-ui/icons";
import LogicGame from './LogicGame';

export default class Game extends LogicGame{
    constructor(props){
        super(props);
        this.state = {
            game: [
                {
                    checked: false,
                    value: '',
                    icon: ''
                },
                {
                    checked: false,
                    value: '',
                    icon: ''
                },
                {
                    checked: false,
                    value: '',
                    icon: ''
                },
                {
                    checked: false,
                    value: '',
                    icon: ''
                },
                {
                    checked: false,
                    value: '',
                    icon: ''
                },
                {
                    checked: false,
                    value: '',
                    icon: ''
                },
                {
                    checked: false,
                    value: '',
                    icon: ''
                },
                {
                    checked: false,
                    value: '',
                    icon: ''
                },
                {
                    checked: false,
                    value: '',
                    icon: ''
                }
            ],
            currentTurn: 'x',
            visibleMessage: false,
            winner: '',
            velha: false,
            winnerPosition: []
        }
    }

    handleValue = (position) => {
        let { game, currentTurn } = this.state;
        if(game[position].checked === false){
            game[position].value = currentTurn;
            game[position].checked = true;

            if(currentTurn === 'x'){
                currentTurn = 'o'
                game[position].icon = <Close/>;
            }
            else{
                currentTurn = 'x';
                game[position].icon = <RadioButtonUnchecked/>;
            }
            this.setState({game, currentTurn});
            this.verifyHit(game)
        }
    }

    render(){
        let { game, currentTurn, velha, winnerPosition } = this.state;
        let turnIcon = '';
        if(currentTurn === 'x'){
            turnIcon = <Close/>;
        } else {
            turnIcon = <RadioButtonUnchecked/>;
        }
        return(
            <>
            <Body>
                <Card>
                    <div style={{width: '80%'}}>
                    <Container>
                        <Row bl='0px' bt='0px' br='0px' onClick={()=>this.handleValue(0)} background={winnerPosition.indexOf(0) >= 0 ? 'red': '#fff'}>
                            {game[0].icon}
                        </Row>
                        <Row bt='0px' br='0px' onClick={()=>this.handleValue(1)} background={winnerPosition.indexOf(1) >= 0 ? 'red': '#fff'}>
                            {game[1].icon}
                        </Row>
                        <Row br='0px' bt='0px' onClick={()=>this.handleValue(2)} background={winnerPosition.indexOf(2) >= 0 ? 'red': '#fff'}>
                            {game[2].icon}
                        </Row>

                        <Row bl='0px' bt='0px' br='0px'  onClick={()=>this.handleValue(3)} background={winnerPosition.indexOf(3) >= 0 ? 'red': '#fff'}>
                            {game[3].icon}
                        </Row>
                        <Row bt='0px' br='0px'  onClick={()=>this.handleValue(4)} background={winnerPosition.indexOf(4) >= 0 ? 'red': '#fff'}>
                            {game[4].icon}
                        </Row>
                        <Row br='0px' bt='0px' onClick={()=>this.handleValue(5)} background={winnerPosition.indexOf(5) >= 0 ? 'red': '#fff'}>
                            {game[5].icon}
                        </Row>

                        <Row bl='0px' bt='0px' bb='0px' br='0px' onClick={()=>this.handleValue(6)} background={winnerPosition.indexOf(6) >= 0 ? 'red': '#fff'}>
                            {game[6].icon}
                        </Row>
                        <Row bt='0px' bb='0px' br='0px' onClick={()=>this.handleValue(7)} background={winnerPosition.indexOf(7) >= 0 ? 'red': '#fff'}>
                            {game[7].icon}
                        </Row>
                        <Row br='0px' bt='0px' bb='0px' onClick={()=>this.handleValue(8)} background={winnerPosition.indexOf(8) >= 0 ? 'red': '#fff'}>
                            {game[8].icon}
                        </Row>
                    </Container>
                    </div>
                </Card>
            </Body>
            <CurrentTurn title="Vez Atual">
                {turnIcon}
            </CurrentTurn>
            {this.state.visibleMessage && 
                <FullView>
                    <View> 
                        {velha ? 
                            <>
                                <h5 style={{margin: 0, fontWeight: 500, fontSize: '1.2em', color: '#2c2c2c'}}>
                                    VELHA
                                </h5>
                            </>
                        :
                            <>
                                <h5 style={{margin: '5px 10px 0px 0px', marginRight: '10px', fontWeight: 500, fontSize: '1.2em', color: '#2c2c2c'}}>
                                    Vencedor:
                                </h5>
                                <IconWinner style={{marginRight: '10px'}}>{this.state.winner}</IconWinner>
                            </>
                        }
                        <ButtonAgain onClick={()=>this.reload()}>
                            Jogar Novamente
                            <Replay/>
                        </ButtonAgain>
                    </View>
                </FullView>
            }
            </>
        )
    }
}