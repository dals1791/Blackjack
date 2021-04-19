import createCardDeck from './modules/cardDeck.js';
import {cardDeck} from './modules/cardDeck.js';
import drawCard from './modules/drawCard.js';
import {dealerScore1, playerScore1, playerPoints, dealerPoints} from './modules/points.js'
import {dealCards, playerHitCard, dealerHit} from './modules/dealCards.js'

createCardDeck() //Creates a new 52 card deck 

dealCards()
playerHitCard()

 const stay = function (){
    const $stayButton = $(".stayButton")
    $stayButton.on("click", (event)=>{
        dealerHit()
    })
 }

stay()

 


// const playerScoreDisplay = function (){
//     const $scoreDisplay = $(".player h2")
//     $scoreDisplay.append(" has " + playerScore1)

// }
// playerScoreDisplay()

// const dealerScoreDisplay = function (){
//     const $scoreDisplay = $(".dealer h2")
//     $scoreDisplay.append(" has " + dealerScore1)

// }
// dealerScoreDisplay()