import styled from 'styled-components';

export const Body = styled.div`
    min-height: 100vh;
    background-image: linear-gradient(to right, #afb6bc 50% ,#d5d9da 50%, #d5d9da 50%); 
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Card = styled.div`
    background: #fff;
    width: 30%;
    min-height: 50vh;
    border-radius: 15px;
    box-shadow: 0px 0px 15px 3px rgba(94, 94, 94, 0.73);
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 900px)
    {
        width: 50%;
    }
    @media (max-width: 600px)
    {
        width: 90%;
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
    min-height: 50px;
    border-top: ${props => props.bt ? props.bt : '1px solid #c8bdbd'};
    border-bottom: ${props => props.bb ? props.bb : '1px solid #c8bdbd'};
    border-left: ${props => props.bl ? props.bl : '1px solid #c8bdbd'};
    border-right: ${props => props.br ? props.br : '1px solid #c8bdbd'};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: ${props=> props.background ? props.background : '#fff'};
`

export const FullView = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #2c2c2c99;
    z-index: 800;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
`

export const View = styled.div`
    background: #f5970f;
    box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.73);
    border-radius: 40px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 10px;
    @media (max-width: 600px)
    {
        height: 80px;
    }
`

export const ButtonAgain = styled.button`
    background: #aa7334;
    border: 0px;
    border-radius: 30px;
    padding: .375rem .75rem;
    font-size: 1.2em;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    display: inline-block;
    font-weight: 500;
    line-height: 1.5;
    color: #2c2c2c;
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
`

export const CurrentTurn = styled.div`
    position: absolute;
    top: 10px;
    background: #f5970f;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 5px 3px rgba(94,94,94,0.2);
    right: 10px;
`