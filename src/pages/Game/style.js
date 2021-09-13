import styled from 'styled-components';
import Wall from '../../assets/img/wall.jpg';

export const Body = styled.div`
    min-height: 100vh;
    background: url(${Wall});
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-size: cover;
`

export const Card = styled.div`
    background: #000;
    padding: 15px;
    overflow: auto;
    resize: both;
    width: 40%;
    min-height: 40vh;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #fff;
    box-shadow: 0px 0px 5px 1px #f1f1f1, 0px 0px 25px 1px #eebd2f,inset 0px 0px 10px 1px #eebd2f;
    @media (max-width: 900px)
    {
        width: 50%;
    }
    @media (max-width: 600px)
    {
        width: 90%;
    }
    animation-name: glowBorderSlow;
    animation-delay: 1s;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    @keyframes glowBorderSlow{
        0%{
            box-shadow: 0px 0px 5px 1px #f1f1f1, 0px 0px 25px 1px #eebd2f,inset 0px 0px 10px 1px #eebd2f;
        }
        25%{
            box-shadow: 0px 0px 5px 1px #f1f1f1, 0px 0px 10px 1px #eebd2f,inset 0px 0px 5px 1px #eebd2f;
        }
        50%{
            box-shadow: 0px 0px 5px 1px #f1f1f1, 0px 0px 5px 1px #eebd2f,inset 0px 0px 1px 1px #eebd2f;
            border-color: #f1f1f1;
        }
        75%{
            box-shadow: 0px 0px 5px 1px #f1f1f1, 0px 0px 10px 1px #eebd2f,inset 0px 0px 5px 1px #eebd2f;
        }
        100%{
            box-shadow: 0px 0px 5px 1px #f1f1f1, 0px 0px 25px 1px #eebd2f,inset 0px 0px 10px 1px #eebd2f;
        }
    }
`

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
`

export const Row = styled.div`
    flex-grow: 0;
    max-width: 32%;
    flex-basis: 32%;
    min-height: 15vh;
    border-top: ${props => props.bt ? props.bt : '1px solid #c8bdbd'};
    border-bottom: ${props => props.bb ? props.bb : '1px solid #c8bdbd'};
    border-left: ${props => props.bl ? props.bl : '1px solid #c8bdbd'};
    border-right: ${props => props.br ? props.br : '1px solid #c8bdbd'};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: ${props=> props.background ? props.background : '#000'};
    color: #ebf1f1;
    text-shadow: ${props => props.op === 'x' ? '0 0 5px #f232aa, 0 0 10px #f232aa, 0 0 15px #f232aa, 0 0 20px #f201a2, 0 0 35px #f201a2, 0 0 40px #f201a2, 0 0 50px #f201a2, 0 0 75px #f201a2' : '0 0 5px #4361e2, 0 0 10px #4361e2, 0 0 15px #4361e2, 0 0 20px #00a1f2, 0 0 35px #00a1f2, 0 0 40px #00a1f2, 0 0 50px #00a1f2, 0 0 75px #00a1f2'};

    &:hover{
        animation-name: glowColor;
        animation-duration: 3s;
    }
    @keyframes glowColor{
        0%{
            text-shadow: ${props => props.op === 'x' ? '0 0 5px #f232aa, 0 0 10px #f232aa, 0 0 15px #f232aa, 0 0 20px #f201a2, 0 0 35px #f201a2, 0 0 40px #f201a2, 0 0 50px #f201a2, 0 0 75px #f201a2' : '0 0 5px #4361e2, 0 0 10px #4361e2, 0 0 15px #4361e2, 0 0 20px #00a1f2, 0 0 35px #00a1f2, 0 0 40px #00a1f2, 0 0 50px #00a1f2, 0 0 75px #00a1f2'};
        }
        10%{
            color: #a2a2a2;
            text-shadow: none;
        }
        50%{
            text-shadow: ${props => props.op === 'x' ? '0 0 5px #f232aa, 0 0 10px #f232aa, 0 0 15px #f232aa, 0 0 20px #f201a2, 0 0 35px #f201a2, 0 0 40px #f201a2, 0 0 50px #f201a2, 0 0 75px #f201a2' : '0 0 5px #4361e2, 0 0 10px #4361e2, 0 0 15px #4361e2, 0 0 20px #00a1f2, 0 0 35px #00a1f2, 0 0 40px #00a1f2, 0 0 50px #00a1f2'};
        }
    }
`

export const FullView = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #2c2c2cE0;
    z-index: 800;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
`

export const View = styled.div`
    background: #000;
    box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.73);
    border-radius: 40px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    padding: 10px;
    h5{
        color: #fff;
        font-weight: 500;
        font-size: 1.2em;
    }

    @media (max-width: 600px)
    {
        height: 80px;
    }
`

export const ButtonAgain = styled.button`
    background: none;
    border: 2px solid #fff;
    color: #fff;
    box-shadow: 0px 0px 5px 1px #f1f1f1, 0px 0px 25px 1px red,inset 0px 0px 10px 1px red;
    text-shadow: 0px 0px 5px #f1f1f1,0px 0px 10px red, 0px 0px 20px red;
    border-radius: 4px;
    padding: .375rem .75rem;
    font-size: 1.2em;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    display: inline-block;
    font-weight: 500;
    line-height: 1.5;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    width: auto;
    max-width: 200px;
    user-select: none;
    cursor: pointer;
    margin-top: 20px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    min-width: 250px;
    @media (max-width: 600px)
    {
        min-width: 100px;
    }
`

export const IconWinner = styled.div`
    background: #ffffff99;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    color: #2c2c2c;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CurrentTurn = styled.div`
    position: absolute;
    top: 10px;
    background: #000;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 10px;
    color: #fff;
    border: 2px solid #fff;
    box-shadow: 0px 0px 5px 1px #f1f1f1, 0px 0px 25px 1px #eebd2f,inset 0px 0px 10px 1px #eebd2f;
    animation-name: glowBorderSlow;
    animation-delay: 1s;
    animation-duration: 3s;
    animation-iteration-count: infinite;
`

export const Option = styled.div`
   font-size: 32px;
`

export const Title = styled.h1`
    color: #ffffff;
    font-family: 'Indie Flower', cursive !important;
    text-shadow: 0px 0px 5px #f1f1f1,0px 0px 10px #eebd2f, 0px 0px 20px #eebd2f;
    font-weight: 500;
    font-size: 400;
    margin-bottom: 40px;
    .s1{
        animation-name: glow;
        animation-duration: 4s;
        animation-iteration-count: infinite;
    }

    .s2{
        animation-name: glowFade;
        animation-delay: 1s;
        animation-duration: 1s;
        animation-iteration-count: infinite;
    }

    .s3{
        animation-name: glow;
        animation-delay: 2s;
        animation-duration: 3s;
        animation-iteration-count: infinite;
    }

    @keyframes glow{
        0%{
            text-shadow: 0px 0px 5px #f1f1f1,0px 0px 10px #eebd2f, 0px 0px 20px #eebd2f;
        }
        25%{
            text-shadow: 0px 0px 5px #f1f1f1,0px 0px 10px #eebd2f;
        }
        50%{
            color: #a2a2a2;
            text-shadow: none;
        }
        75%{
            text-shadow: 0px 0px 5px #f1f1f1,0px 0px 10px #eebd2f;
        }
        100%{
            text-shadow: 0px 0px 5px #f1f1f1,0px 0px 10px #eebd2f, 0px 0px 20px #eebd2f;
        }
    }
    @keyframes glowFade{
        0%{
            color: #f1f1f1;
            text-shadow: none;
        }
        100%{
            color: #a2a2a2;
            text-shadow: none;
        }
    }
`

export const Arrow = styled.div`
    position: absolute;
    top: ${props => props.top ? props.top : "50px"};
    right: ${props => props.right ? props.right : "50px"};
    font-size: 60px;
    font-family: 'Indie Flower', cursive !important;
    color: #fff;
    animation-name: glowBlue;
    animation-delay: ${props => props.op === 1 ? '1s': '2s'};
    animation-duration: ${props => props.op === 1 ? '1s' : '2s'};
    animation-iteration-count: infinite;

    @keyframes glowBlue{
        0%{
            text-shadow: 0px 0px 5px #f1f1f1,0px 0px 15px #1660a7, 0px 0px 30px #1660a7;
        }
        25%{
            text-shadow: 0px 0px 5px #f1f1f1,0px 0px 15px #1660a7;
        }
        50%{
            color: #a2a2a2;
            text-shadow: none;
        }
        75%{
            text-shadow: 0px 0px 5px #f1f1f1,0px 0px 15px #1660a7;
        }
        100%{
            text-shadow: 0px 0px 5px #f1f1f1,0px 0px 15px #1660a7, 0px 0px 30px #1660a7;
        }
    }
`