import React  from 'react';
import { Button, Intro, Title, Home, Subtitle } from './style';
import ImageIntro from '../../assets/img/introPic.png';
import Header from "../../components/Header";
import {Link} from 'react-router-dom';

export default class Introduction extends React.Component{
    render(){
        return(
            <Home>
                <Header/>
                <Intro>
                    <img style={{width: '25%'}} src={ImageIntro}/>
                    <Title>Jogo da velha</Title>
                    <Subtitle>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </Subtitle>
                    <Button>Começar</Button>    
                </Intro>
                
            </Home>
        )
    }
}