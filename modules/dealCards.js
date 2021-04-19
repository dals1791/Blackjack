import drawCard from './drawcard.js'
import {playerScore1, dealerScore1, playerPoints, dealerPoints, displayPlayerScore, displayDealerScore} from './points.js'
import {gameVictory, blackJack, bust} from './victoryConditions.js'

// Deals two starting cards to the player and dealer
const dealCards = function (){
    const $dealCards = $(".dealButton")
    $dealCards.on("click", (event)=>{
        const playerCard1= drawCard()
        const playerCard2 = drawCard()
        const dealerCard1 = drawCard()
        const dealerCard2 = drawCard()

        const $playerSection = $("section .playerCards")
        const $dealerSection = $("section .dealerCards")

        $playerSection.append(playerCard1)
        $playerSection.append(playerCard2)
        $dealerSection.append(dealerCard1)
        $dealerSection.append(dealerCard2)
        
        playerPoints()
        dealerPoints()
        displayDealerScore() 
        displayPlayerScore() 
        blackJack()
        bust()
        
    })
}

// Adds card to player hands
const playerHitCard = function (){
    const hitCard = $("button.hitButton")
    hitCard.on("click", (event)=>{
    let newCard = drawCard()
    const playerCards = $(".playerCards")
    playerCards.append(newCard)
    playerPoints()
    displayPlayerScore()

    if (playerScore1===21){
        blackJack()
    }
    else if(playerScore1>21){
        bust()
    }
})
}

//deals a card for the dealer if below 17 score
const dealerHit = function (){
    if (dealerScore1<17){
        
        while(dealerScore1<17){
            let newCard = drawCard()
            const dealerCards = $(".dealerCards")
            dealerCards.append(newCard)
            dealerPoints()
            displayDealerScore()
            gameVictory()
        }
    }
    else{
        displayDealerScore()
        gameVictory() 
    }
     
}
const stay = function (){
    const $stayButton = $(".stayButton")
    $stayButton.on("click", (event)=>{
        dealerHit()
    })
 }
export {dealCards, playerHitCard, dealerHit, stay};