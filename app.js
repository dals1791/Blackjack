// Creates a card Deck and stores the card object into an array
let cardDeck = []
    const createCardDeck = function (){
        
        for (let i=0; i<52; i+=1){
            const number = i%13
            let cardName = ""
            let cardValue=null
            if (number===0){
                cardName="King"
                cardValue=10
            }
            else if(number===1){
                cardName="Ace"
                cardValue=11
            }
            else if (number===11){
                cardName="Jack"
                cardValue=10
            }
            else if (number===12){
                cardName="Queen"
                cardValue=10
            }
            else{
                cardName = number.toString()
                cardValue = number
            }

            if (i<13){
                cardName+=" of Spades"
            }
            else if(i<26){
                cardName+=" of Hearts"
            }
            else if (i<39){
                cardName+=" of Clubs"
            }
            else{
                cardName+=" of Diamonds"
            }
            const cardObject = {"description": cardName, "value": cardValue}
           cardDeck.push(cardObject)
        }
        
    }

createCardDeck()
// ------------------------------------------------------------
// Pulls a random card from the deck and removes it from the deck.
const createCard = function (){
    const randCard = Math.floor(Math.random()*cardDeck.length);
    const card = cardDeck[randCard]
    const $div = $("<div>")
    $div.addClass("card")
    $div.html(card.description)
    
    cardDeck.splice(randCard, 1)
    return $div
}
const playerScore = function (){
    const playerScore = null
    const $cardValues = $("section .playerCards").children()
    // add foreach function to loop through and add value of each child


}

// ------------------------------------------------------------
// Deals two starting cards to the player and dealer
const dealCards = function (){
    const $dealCards = $(".dealButton")
    $dealCards.on("click", (event)=>{
        const playerCard1= createCard()
        const playerCard2 = createCard()
        const dealerCard1 = createCard()
        const dealerCard2 = createCard()

        const $playerSection = $("section .playerCards")
        const $dealerSection = $("section .dealerCards")

        $playerSection.append(playerCard1)
        $playerSection.append(playerCard2)
        $dealerSection.append(dealerCard1)
        $dealerSection.append(dealerCard2)
    })
}
dealCards()


// ------------------------------------------------------------
// Adds card to player hands
const hitCard = function (){
    const $hitCard = $("button.hitButton")
    $hitCard.on("click", (event)=>{
    let newCard = createCard()
    const $playerCards = $(".playerCards")
    $playerCards.append(newCard)
})
}
hitCard()


