import React from 'react';
import { Option } from "./style";

export default class LogicGame extends React.Component{
    
    /** Função que verifica se ouve algum acerto 
     * @param {object} game - objeto relacionado as posições do jogo
    */
    verifyHit(game, move = false){
        let { players } = this.state;
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
            if(players === 1){
                if(move){
                    this.setState({canPlay: true}, () => this.handleMove())
                }
            }
        }
    }

    /** Função responsável por começar um novo jogo */
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

    /** Lida com um valor escolhido em uma determinada posição
     * @param {Int} position - posição no objeto
     */
    handleValue = (position) => {
        let { game, currentTurn, players } = this.state;
        if(game[position].checked === false){
            game[position].value = currentTurn;
            game[position].checked = true;

            if(currentTurn === 'x'){
                currentTurn = 'o'
                game[position].icon = <Option>X</Option>;
            }
            else{
                currentTurn = 'x';
                game[position].icon = <Option>O</Option>;
            }
            this.setState({game, currentTurn}, () => {
                this.verifyHit(game, true)
            });   
        }
    }

    /** Função responsavel pela movimentação de outra peça */
    handleMove(){
        let { game, currentTurn } = this.state;
        let oponente = currentTurn === 'x' ? 'o' : 'x';
        
        /** verifica se ele vai fazer algum ponto */
        let continua = true;
        continua = this.validaPosicoes(game, [0, 3, 6], currentTurn);
        if(continua) continua = this.validaPosicoes(game, [1, 4, 7], currentTurn);
        if(continua) continua = this.validaPosicoes(game, [2, 5, 8], currentTurn);
        if(continua) continua = this.validaPosicoes(game, [0, 4, 8], currentTurn);
        if(continua) continua = this.validaPosicoes(game, [6, 4, 2], currentTurn);
        if(continua) continua = this.validaPosicoes(game, [0, 1, 2], currentTurn);
        if(continua) continua = this.validaPosicoes(game, [3, 4, 5], currentTurn);
        if(continua) continua = this.validaPosicoes(game, [6, 7, 8], currentTurn);
        
        /** verifica se o oponente vai fazer ponto */
        if(continua) continua = this.validaPosicoes(game, [0, 3, 6], oponente);
        if(continua) continua = this.validaPosicoes(game, [1, 4, 7], oponente);
        if(continua) continua = this.validaPosicoes(game, [2, 5, 8], oponente);
        if(continua) continua = this.validaPosicoes(game, [0, 4, 8], oponente);
        if(continua) continua = this.validaPosicoes(game, [6, 4, 2], oponente);
        if(continua) continua = this.validaPosicoes(game, [0, 1, 2], oponente);
        if(continua) continua = this.validaPosicoes(game, [3, 4, 5], oponente);
        if(continua) continua = this.validaPosicoes(game, [6, 7, 8], oponente);
        
        if(!game[4].checked && continua){
            this.handlePositionCheck(4);
            continua = false;
        }
        else if(!game[2].check && continua){
            this.handlePositionCheck(2);
            continua = false;
        }
        else if(!game[8].check && continua){
            this.handlePositionCheck(8);
            continua = false;
        }
        else{
            //pega primeira posição
            if(continua){
                let valores = game.filter(g => !g.checked);
                this.handlePositionCheck(valores[0].id);
                continua = false;
            }
        }
    }

    /** Lida com a verificação de ganhos em um array
     * @param {Object} game - array do jogo
     * @param {Int32Array} arrayValores - array de inteiros contendo as posições
     * @param {String} oponente - valor da vez
     */
    validaPosicoes(game, arrayValores, oponente){
        let val = {
            posicao1: {
                pos: [],
                valor: 0
            }
        }
        
        if(game[arrayValores[0]].checked && game[arrayValores[0]].value === oponente){
            val.posicao1.valor ++;
            val.posicao1.pos.push(arrayValores[0]);
        }
        if(game[arrayValores[1]].checked && game[arrayValores[1]].value === oponente){
            val.posicao1.valor ++;
            val.posicao1.pos.push(arrayValores[1]);
        }
        if(game[arrayValores[2]].checked && game[arrayValores[2]].value === oponente){
            val.posicao1.valor++;
            val.posicao1.pos.push(arrayValores[2]);
        }

        if(val.posicao1.valor > 1){
            /** oponente está perto de fazer ponto */
            if(val.posicao1.pos.indexOf(arrayValores[0]) === -1 && !game[arrayValores[0]].checked){
                this.handlePositionCheck(arrayValores[0]);
                this.verifyHit(game);
                return false;
            }
            if(val.posicao1.pos.indexOf(arrayValores[1]) === -1 && !game[arrayValores[1]].checked){
                this.handlePositionCheck(arrayValores[1]);
                this.verifyHit(game);
                return false;
            }
            if(val.posicao1.pos.indexOf(arrayValores[2]) === -1 && !game[arrayValores[2]].checked){
                this.handlePositionCheck(arrayValores[2]);
                this.verifyHit(game);
                return false;
            }
        }

        return true;
    }

    /** Lida com uma posição checada 
     * @param {Int} pos - indice da posição
    */
    handlePositionCheck(pos){
        let { game, currentTurn } = this.state;
        game[pos].checked = true;
        game[pos].value = currentTurn;
        if(currentTurn === 'x'){
            currentTurn = 'o'
            game[pos].icon = <Option>X</Option>;
        }
        else{
            currentTurn = 'x';
            game[pos].icon = <Option>O</Option>;
        }
        this.setState({game, currentTurn});
    }
}