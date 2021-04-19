import {playerScore1, dealerScore1} from './points.js'

const gameVictory = function (){
    const score = $("<div>")
    const score2 = $("<div>")
    const victorySpot = $(".player h2")
    const victorySpot2 = $(".dealer h2")
    score.addClass("result")
    score2.addClass("result")
    if (dealerScore1===21){
        
        blackJack()
    }
    else if (playerScore1 ===21){
        blackJack()
    }
    else if (playerScore1===dealerScore1){
        score.html("Player Pushes")
        const victorySpot = $(".player")
        victorySpot.append(score)
    }
    else if(dealerScore1<playerScore1){
        score2.html("Dealer Loses")
        score.html("Player Wins")
        victorySpot.append(score)
        victorySpot2.append(score2)
    }
    else if(playerScore1>21){
        bust()
    }
    else if(dealerScore1>21){
        bust()
    }
    else {}

}
const blackJack = function (){
    const score = $("<div>")
    const score2 = $("<div>")
    const victorySpot = $(".player h2")
    const victorySpot2 = $(".dealer h2")
    score.addClass("result")
    score2.addClass("result")
    if (dealerScore1===21){
        score2.html("Dealer has Blackjack")
        score.html("Player Loses")
        victorySpot.append(score)
        victorySpot2.append(score2)
        // console.log(score, score2)
    }
    else if (playerScore1 ===21){
        score.html("Player has BlackJack")
        victorySpot.append(score)
        // console.log(score, score2)
    }
}
const bust = function (){
    const score = $("<div>")
    const score2 = $("<div>")
    const victorySpot = $(".player h2")
    const victorySpot2 = $(".dealer h2")
    score.addClass("result")
    score2.addClass("result")
    if (playerScore1>21){
        score.html("Player Busts, Dealer Wins")
        score2.html("Player Busts, Dealer Wins")
        victorySpot.append(score)
        victorySpot2.append(score2)
    }
    else if (dealerScore1>21){
        score.html("Dealer Busts, Player Wins")
        score2.html("Dealer Busts, Player Wins")
        victorySpot.append(score)
        victorySpot2.append(score2)
    }

}

export {gameVictory, blackJack, bust};