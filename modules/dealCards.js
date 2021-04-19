import drawCard from './drawcard.js'
import {playerScore1, dealerScore1, playerPoints, dealerPoints, displayPlayerScore, displayDealerScore} from './points.js'
import {gameVictory, blackJack, bust} from './victoryConditions.js'

// Deals two starting cards to the player and dealer
const appendCard = (card, type)=>{
    const section = $(`section .${type}Cards`);
    section.append(card)
}

const dealCards = function (){
    const $dealCards = $(".dealButton")
    $dealCards.on("click", (event)=>{
        const playerCard1= drawCard()
        const playerCard2 = drawCard()
        const dealerCard1 = drawCard()
        const dealerCard2 = drawCard()
        
        appendCard(playerCard1, 'player');
        
        playerCard1.show('normal', 'swing', ()=>{
            appendCard(dealerCard1, 'dealer'); 
            dealerCard1.show('normal', 'swing',()=>{
                appendCard(playerCard2, 'player');
                playerCard2.show('normal', 'swing', ()=>{
                    appendCard(dealerCard2, 'dealer');
                    dealerCard2.show('normal', 'swing');
                    playerPoints();
                    dealerPoints();
                    displayDealerScore();
                    displayPlayerScore();
                    blackJack()
                    bust()
                });
            })
        })
    });
}

// Adds card to player hands
const playerHitCard = function (){
    const hitCard = $("button.hitButton")
    hitCard.on("click", (event)=>{
    let newCard = drawCard()
    appendCard(newCard, 'player');
    newCard.show('slow', 'swing')
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
    let newCard = drawCard();
    appendCard(newCard, 'dealer');
    newCard.show('normal', 'swing')
    dealerPoints();
    displayDealerScore();
    gameVictory();
}
    
     

const stay = function (){
    const $stayButton = $(".stayButton")
    $stayButton.on("click", (event)=>{
        if(dealerScore1<17){
            
            while(dealerScore1<17){
                dealerHit()
            }
        }else{
            dealerPoints()            
            displayDealerScore()
            gameVictory() 
        }
        
        
    })
 }
export {dealCards, playerHitCard, dealerHit, stay};