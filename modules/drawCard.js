 import {cardDeck} from './cardDeck.js'
 import createCardDeck from './cardDeck.js'
 
 // Pulls a random card from the deck and removes it from the deck.
 const drawCard = function (){
    const randCard = Math.floor(Math.random()*cardDeck.length);
    const card = cardDeck[randCard]
    const $div = $("<div>")
    $div.addClass("card")
    $div.html(card.description)
    $div.attr("value", card.value)
    
    cardDeck.splice(randCard, 1)
    $('.cardDeck').html(cardDeck.length + " left")
    if(cardDeck.length<14){
        createCardDeck(); 
    }
    return $div.hide()
    
}


export default drawCard