let game_Content      = ['', '','','', '','','', '', ''];
const game_Symbol       = ['X', 'O'];
const earning_Sequences = [
    
    ['0', '3', '6'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['0', '4', '8'],
    ['2', '4', '6'],
    ['0', '1', '2'],
    ['3', '4', '5'],
    ['6', '7', '8'],  

];

let winning_Sequences;
let game_Over   = false;

let hasDraw     = false
var verify_playerTime;

const URL = new URLSearchParams(window.location.search);

let player_Turn = URL.get("player_Turn") === 'false' ? false : true;
let player_Time = parseInt(URL.get("player_Time"));

let amount_Score_O = 0;
let amount_Score_X = 0;

function verifyWin(){

    for (let i = 0; i < this.length; i++){
        
        let pos_1 = this[i][0];
        let pos_2 = this[i][1];
        let pos_3 = this[i][2];

        if (game_Content[pos_1] == game_Content[pos_2] && game_Content[pos_1] == game_Content[pos_3] && game_Content[pos_1] != ''){

            winning_Sequences = this[i];

            animationWinner();

            return true
            
        }

    }
    
    return false ;
    
}

earning_Sequences.verifyWin = verifyWin;

function findFull(callback){

    for(let i of this){
        
        if (callback(i)){

            return true;

        }

    }

    return false;
    
}

let hasEmpty = (i) => {
    
    if(i == ''){
        
        return true;

    }
    
}

let verifyDraw = () => {
    
    if (!game_Content.findFull(hasEmpty) && !earning_Sequences.verifyWin()){
        
        return true;
        
    }
}

game_Content.findFull = findFull;

function showEarnings(array){

    if(winning_Sequences.toString() !== array.toString()){
           
        return false;

    }   

    return true;
    
}