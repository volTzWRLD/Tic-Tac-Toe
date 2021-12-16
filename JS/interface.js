const HTML_body        = document.getElementsByTagName('body')[0];
const TicTacToe_Square = document.getElementsByClassName("square");
const get_Square       = document.getElementsByClassName("main-Square")[0];
const paragraph_Turn   = document.getElementsByClassName("paragraph-turn")[0];
const paragraph_Winner = document.getElementsByClassName("winner")[0];
const btn_restart      = document.getElementsByClassName("btn-restart")[0];

let player_X = document.getElementsByClassName("playerX")[0];
let player_O = document.getElementsByClassName("playerO")[0];

addEventListener("DOMContentLoaded", 

    get_Square.onclick = (e) => {
        const pos_EventID    = e.target.id;
        const event_Element  = e.target;

        let paragraph_Result  = paragraph_Turn;
        let paragraph_Winning = paragraph_Winner;

        let body = HTML_body;

        if (!pos_EventID == "" && !game_Over){

            if (game_Over){

                return;

            }

            if (player_Turn && event_Element.classList[2] != 'O' && event_Element.classList[2] != 'X'){
                
                game_Content[pos_EventID] = game_Symbol[player_Time];
                player_Time = 1;
                
                event_Element.classList.add(game_Content[pos_EventID]);   
                player_Turn = false;
                game_Over = earning_Sequences.verifyWin();

            }
        
        else{

            if (event_Element.classList[2] != 'O' && event_Element.classList[2] != 'X'){
                
                game_Content[pos_EventID] = game_Symbol[player_Time];
                player_Time = 0;

                event_Element.classList.add(game_Content[pos_EventID]);
                player_Turn = true;
                    
            }

        }
        
        
        game_Over = earning_Sequences.verifyWin();
        isDraw    = verifyDraw();

        showButton();

        playerWinner(paragraph_Result, paragraph_Winning, body);

    }
})

const playerWinner = (paragraph_Result, paragraph_Winner, body) => {

    if(!isDraw){

        var verify_playerWinner = earning_Sequences.verifyWin() == true ? 

            verify_playerTime = player_Time == 0 ?

                    paragraph_Winner.innerHTML = "Winner: O"
                :  
                    paragraph_Winner.innerHTML = "Winner: X"

            : 

            verify_playerTime = player_Time == 1 ? 

                    paragraph_Result.innerHTML = "Turn: O" 
                :  
                    paragraph_Result.innerHTML = "Turn: X";
    }

    else{


        paragraph_Result.innerHTML = '';
    
        paragraph_Winner.style     = 'font-size: calc(60% + 3vmin); color: black';

        paragraph_Winner.innerHTML = 'DRAW';

        body.classList.add("body");

    }

}

const restartGame = () => {

    if (game_Over || isDraw){

        btn_restart.style = "display: block; animation-name: disabled; animation-duration: 1s; animation-fill-mode: both"
        
        paragraph_Turn.innerHTML = 'Turn:';

        if (!game_Over && isDraw){

            for(let i = 0; i < TicTacToe_Square.length; i++){

                paragraph_Turn.innerHTML = 'Turn:';

                game_Content = ['', '', '','', '', '','', '', ''];
                game_Content.findFull = findFull;


                TicTacToe_Square[i].classList.remove("X");
                TicTacToe_Square[i].classList.remove("O");  
                TicTacToe_Square[i].style     = 'border-color: rgba(117, 60, 6, 0.699); font-size: 0';

                HTML_body.classList.remove("body")



            }
        }
        
        if (!isDraw || game_Over){
            
            let win_Risk_1 = document.getElementById(winning_Sequences[0]);
            let win_Risk_2 = document.getElementById(winning_Sequences[1]);


            if(player_Time == 0){

                amount_Score_O++;
                player_X.innerHTML = "Player 2 &nbsp&nbsp(O): &nbsp" + amount_Score_O;

            }

                else{

                    amount_Score_X++;
                    player_O.innerHTML = "Player 1 &nbsp&nbsp(X): &nbsp" + amount_Score_X;

                }


            player_Turn = URL.get("player_Turn") === 'false' ? false : true;
            player_Time = parseInt(URL.get("player_Time"));

            game_Over = false;
            isDraw = false;

            for(let i = 0; i < TicTacToe_Square.length; i++){


                game_Content = ['', '', '','', '', '','', '', ''];
                game_Content.findFull = findFull;

                TicTacToe_Square[i].classList.remove("X");
                TicTacToe_Square[i].classList.remove("O");  

                if (showEarnings(['0', '3', '6']) || showEarnings(['1', '4', '7']) || showEarnings(['2', '5', '8'])){

                    win_Risk_1.innerHTML -= `<div class="win-Risk-Horizontal"></div>`;
                    win_Risk_1.style = 'font-size: 0';

                }

                else if (showEarnings(['0', '1', '2'],) || showEarnings(['3', '4', '5']) || showEarnings(['6', '7', '8'])){
                    
                    win_Risk_1.innerHTML -= `<div class="win-Risk-Vertical"></div>`;
                    win_Risk_1.style = 'font-size: 0';
                    
                }

                else if (showEarnings(['0', '4', '8'])){

                    win_Risk_2.innerHTML -= `<div class="win-Risk-Diagonal-1"></div>`
                    win_Risk_2.style = 'font-size: 0';

                }

                else if (showEarnings(['2', '4', '6'])){

                    win_Risk_2.innerHTML -= `<div class="win-Risk-Diagonal-2"></div>`
                    win_Risk_2.style = 'font-size: 0';

                }
            }
        }
    }

}

const animationWinner = () => {

    let win_Risk_Horizontal_And_Vertical = document.getElementById(winning_Sequences[0]);
    let win_Risk_Diagonal                = document.getElementById(winning_Sequences[1]);
    let color_Winner;

    verify_colorWinner = player_Time == 1 ? color_Winner = "background-color:rgb(58, 58, 58);" : color_Winner = "background-color:rgba(255, 255, 255, 0.829);"

    if (showEarnings(['0', '3', '6']) || showEarnings(['1', '4', '7']) || showEarnings(['2', '5', '8'])){

        win_Risk_Horizontal_And_Vertical.innerHTML += `<div style="${color_Winner}" class="win-Risk-Horizontal"></div>`

    }

    else if (showEarnings(['0', '1', '2'],) || showEarnings(['3', '4', '5']) || showEarnings(['6', '7', '8'])){

        win_Risk_Horizontal_And_Vertical.innerHTML += `<div style="${color_Winner}" class="win-Risk-Vertical"></div>`

    }

    else if (showEarnings(['0', '4', '8'])){

        win_Risk_Diagonal.innerHTML += `<div style="${color_Winner}" class="win-Risk-Diagonal-1"></div>`


    }

    else if (showEarnings(['2', '4', '6'])){

        win_Risk_Diagonal.innerHTML += `<div style="${color_Winner}" class="win-Risk-Diagonal-2"></div>`


    }

}

const showButton = () => {

    if (isDraw || game_Over){

        btn_restart.style = "display: block; animation-name: active; animation-duration: 1s; animation-fill-mode: both"

    }

}

btn_restart.onclick = () => {

    restartGame();

}