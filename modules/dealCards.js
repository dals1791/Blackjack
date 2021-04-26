import drawCard from './drawcard.js'
import {playerScore1, dealerScore1, playerPoints, dealerPoints, displayPlayerScore, displayDealerScore} from './points.js'
import {gameVictory, blackJack, bust} from './victoryConditions.js'
import {cardDeck} from './cardDeck.js'

//Define variables
const dealCardsBtn = $(".dealButton")
const dealAgainBtn = $('.dealAgainBtn')
// Deals two starting cards to the player and dealer
const appendCard = (card, type)=>{
    const section = $(`section .${type}Cards`);
    section.append(card)
}

const dealCards = function (){
    
        //clears playing field prior to deal.
        $('.cardLocation').empty()
        $('.playerContainer h2').html('Player');
        $('.dealerContainer h2').html('Dealer');
        dealerPoints()
        //draws two cards fordealer and player
        const playerCard1= drawCard();
        const playerCard2 = drawCard();
        const dealerCard1 = drawCard();
        dealerCard1.addClass("hidden");
        const dealerCard2 = drawCard();
    
        appendCard(playerCard1, 'player');
        
        playerCard1.show('normal', 'swing', ()=>{
            appendCard(dealerCard1, 'dealer'); 
            dealerCard1.show('normal', 'swing',()=>{
                appendCard(playerCard2, 'player');
                playerCard2.show('normal', 'swing', ()=>{
                    appendCard(dealerCard2, 'dealer');
                    dealerCard2.show('normal', 'swing');
                    playerPoints();
                    displayPlayerScore();
                    blackJack()
                    bust()
                });
            })
        })
}
dealCardsBtn.on('click', ()=>{
    dealCards()
})
dealAgainBtn.on('click', ()=>{
    $('.resultsContainer').css('display', 'none')
    dealCards();
})

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
        const dealerCard1 =$('.dealerCards').children().first()
        dealerCard1.css('background-color', 'white')
        dealerCard1.css('color', 'black')
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