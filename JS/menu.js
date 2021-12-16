const player_Symbol_X = document.querySelectorAll(".choose")[0].children[0];
const player_Symbol_O = document.querySelectorAll(".choose")[0].children[1];
const choose_DIV      = document.getElementsByClassName("choose")[0]

const style_TicTacToe = document.getElementsByClassName("style-Tic")[0];

const alert_Error = document.getElementsByClassName("alert")[0];

const btn_Close      = document.getElementsByClassName("close")[0];
const btn_showChoose = document.getElementsByClassName("Game")[0]; 
const btn_Game       = document.getElementsByClassName("btn-ready")[0];
const btn_Back       = document.getElementsByClassName("close2")[0]

let symbol_Select_X = false;
let symbol_Select_O = false;

btn_Game.onclick = () => {

    if(!symbol_Select_O && !symbol_Select_X){

        alert_Error.style = 'display: block';
        choose_DIV.style  = 'display: none';

    }

    else{

        window.location.href = "./HTML/game.html?player_Time=" + player_Time  +"&player_Turn=" + player_Turn;

    }

}



btn_showChoose.onclick = () => {

    style_TicTacToe.style = "animation-name: disabled; animation-duration: 1s; animation-fill-mode: both";
    choose_DIV.style = 'display: flex; animation-name: active; animation-duration: 1s; animation-fill-mode: both';
    btn_Back.style   = 'display: block; animation-name: active; animation-duration: 1s; animation-fill-mode: both'
}

btn_Back.onclick = () => {

    choose_DIV.style      = 'display: none';
    style_TicTacToe.style = "opacity: 1";
    btn_Back.style        = 'display: none';

    
}

btn_Close.onclick = () => {

    alert_Error.style     = "display: none";
    choose_DIV.style      = "display: flex";

}

player_Symbol_X.onclick = () => {


    player_Symbol_X.style = `border-width: 7px; border-color: rgba(243, 128, 21, 0.815); color: rgba(243, 128, 21, 0.815);`;
    player_Symbol_O.style = `border-width: 5px; border-color: rgba(255, 255, 255, 0); color: #636060ce;`;

    player_Turn = true;
    player_Time = 0;

    symbol_Select_X = true;
    symbol_Select_O = false;

}

player_Symbol_O.onclick = () => {

    player_Symbol_O.style = `border-width: 7px; border-color: rgba(243, 128, 21, 0.815); color: rgba(243, 128, 21, 0.815);`;
    player_Symbol_X.style = `border-width: 5px; border-color: rgba(255, 255, 255, 0); color: #636060ce;`;

    player_Turn = false;
    player_Time = 1;

    symbol_Select_O = true;
    symbol_Select_X = false;

}