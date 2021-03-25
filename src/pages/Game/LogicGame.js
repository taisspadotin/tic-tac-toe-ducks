import React from 'react';

export default class LogicGame extends React.Component{
    
    /** Função que verifica se ouve algum acerto */
    verifyHit(game){
        let optionsChecked = game.filter(x => x.checked === true);
        let win = false;
        /** Verifica primeira linha */
        for(let i = 0; i< 3; i++){
            /** Verifica as combinações na vertical*/
            if(game[i].checked && game[i+3].checked && game[i+6].checked){
                if(game[i].value === game[i+3].value && game[i].value === game[i+6].value){
                    let winnerPosition = [i, i+3, i+6];
                    this.setState({winner: game[i].icon, visibleMessage: true, winnerPosition})
                    win = true;
                }
            }
        }

        let vertical = [0, 3, 6];
        vertical.map(v => {
            if(game[v].checked && game[v+1].checked && game[v+2].checked){
                if(game[v].value === game[v+1].value && game[v].value === game[v+2].value){
                    let winnerPosition = [v, v+1, v+2];
                    this.setState({winner: game[v].icon, visibleMessage: true, winnerPosition})
                    win = true;
                }
            }
        })

        /** Verifica a lateral 1 */
        if(game[0].checked && game[4].checked && game[8].checked)
        {
            if(game[0].value === game[4].value && game[4].value === game[8].value){
                let winnerPosition = [0, 4, 8];
                this.setState({winner: game[0].icon, visibleMessage: true, winnerPosition})
                win = true;
            }
        }

        /** Verifica a lateral 2 */
        if(game[2].checked && game[4].checked && game[6].checked)
        {
            if(game[2].value === game[4].value && game[4].value === game[6].value){
                let winnerPosition = [2, 4, 6];
                this.setState({winner: game[2].icon, visibleMessage: true, winnerPosition})
                win = true;
            }
        }
        

        /** Verifica se deu velha */
        if(!win){
            if(optionsChecked.length === game.length){
                this.setState({velha: true, visibleMessage: true})
            }
        }
        
    }

    reload(){
        let { game } = this.state;
        game.map((g) => {
            g.checked = false;
            g.value = '';
            g.icon = '';
        });

        this.setState({
            winner: '', 
            visibleMessage: false, 
            game, 
            winnerPosition: [],
            velha: false
        });
    }
}