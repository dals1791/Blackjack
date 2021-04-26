import createCardDeck from './modules/cardDeck.js';
import {cardDeck} from './modules/cardDeck.js'
import {dealCards, playerHitCard, stay} from './modules/dealCards.js'

createCardDeck() //Creates a new 52 card deck 


const cardDeckLocation = $('.cardDeck')
console.log(cardDeck.length)
playerHitCard()//draws a card for player
stay()//player stays, dealer continually draws until over 17 score or bust

