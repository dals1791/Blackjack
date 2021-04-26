import {playerScore1, dealerScore1} from './points.js'
const resultTxt = $(".resultTxt .result")
const showResult =()=>{
    $('.dealButton').css('display', 'none')
    $('.resultDealer').html(dealerScore1)
    $('.resultPlayer').html(playerScore1)
    $('.resultsContainer').css('display', 'flex')
}
const gameVictory = function (){
    if (dealerScore1===21){
        blackJack()
    }
    else if (playerScore1 ===21){
        blackJack()
    }
    else if (playerScore1===dealerScore1){
        resultTxt.html("Player Pushes")
        showResult()
    }
    else if(dealerScore1<playerScore1){
        resultTxt.html("Player Wins")
        showResult()
    }
    else if(playerScore1>21){
        bust()
    }
    else if(dealerScore1>21){
        bust()
    }
    else {
        resultTxt.html("House Wins")
        showResult()
    }
}
const blackJack = function (){
    if (dealerScore1===21){
        resultTxt.html("House has Blackjack, Player Loses")
        showResult()
    }
    else if (playerScore1 ===21){
        resultTxt.html("Player has BlackJack!")
        showResult()
    }
}
const bust = function (){
    if (playerScore1>21){
        resultTxt.html("Player Busts")
        showResult()
    }
    else if (dealerScore1>21){
        resultTxt.html("House Busts, Player Wins")
        showResult()
    }

}

export {gameVictory, blackJack, bust};