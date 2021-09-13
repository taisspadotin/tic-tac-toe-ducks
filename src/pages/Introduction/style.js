import styled from 'styled-components';
import Wall from '../../assets/img/wall.jpg';

export const Button = styled.button`
    background: none;
    text-transform: uppercase;
    border: 2px solid #fff;
    color: #fff;
    box-shadow: 0px 0px 5px 1px #f1f1f1, 0px 0px 15px 1px #f201a4,inset 0px 0px 5px 1px #f201a4;
    text-shadow: 0px 0px 5px #f1f1f1,0px 0px 10px #f201a4, 0px 0px 20px #f201a4;
    border-radius: 4px;
    padding: .375rem .75rem;
    font-size: 1.2em;
    display: inline-block;
    font-weight: 500;
    line-height: 1.5;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    width: auto;
    max-width: 200px;
    cursor: pointer;
    margin-top: 40px;
    margin-bottom: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    min-width: 250px;
    animation-name: glowBorderSlowPink;
    animation-delay: ${props => props.op === 1 ? '0s': '2s'};
    animation-duration: 3s;
    animation-iteration-count: infinite;
    @keyframes glowBorderSlowPink{
        0%{
            box-shadow: 0px 0px 5px 1px #f1f1f1, 0px 0px 25px 1px #f201a4,inset 0px 0px 10px 1px #f201a4;
            text-shadow: 0px 0px 5px #f1f1f1,0px 0px 10px #f201a4, 0px 0px 20px #f201a4;
        }
        25%{
            box-shadow: 0px 0px 5px 1px #f1f1f1, 0px 0px 10px 1px #f201a4,inset 0px 0px 5px 1px #f201a4;
            text-shadow: 0px 0px 5px #f1f1f1,0px 0px 5px #f201a4, 0px 0px 10px #f201a4;
        }
        50%{
            box-shadow: 0px 0px 5px 1px #f1f1f1;
            border-color: #dcdcdc;
            text-shadow: 0px 0px 5px #f1f1f1;
            color: #dcdcdc;
        }
        75%{
            box-shadow: 0px 0px 5px 1px #f1f1f1, 0px 0px 10px 1px #f201a4,inset 0px 0px 5px 1px #f201a4;
            text-shadow: 0px 0px 5px #f1f1f1,0px 0px 5px #f201a4, 0px 0px 10px #f201a4;
        }
        100%{
            box-shadow: 0px 0px 5px 1px #f1f1f1, 0px 0px 25px 1px #f201a4,inset 0px 0px 10px 1px #f201a4;
            text-shadow: 0px 0px 5px #f1f1f1,0px 0px 10px #f201a4, 0px 0px 20px #f201a4;
        }
    }
`

export const Intro = styled.div`
    background: url(${Wall});
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px;
`
export const Title = styled.h2`
    font-size: ${props => props.fontSize ? props.fontSize : '3em'};
    margin: 0;
    color: #ffffff;
    font-family: 'Indie Flower', cursive !important;
    text-shadow: ${props => `0px 0px 5px #f1f1f1,0px 0px 10px ${props.color ? props.color : "#eebd2f"}, 0px 0px 20px ${props.color ? props.color : "#eebd2f"}`};
    font-weight: 500;
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

export const Subtitle = styled.p`
    color: #2c2c2c;
    padding: 14px 20%;
`

export const Home = styled.div`
    padding: 0;
`