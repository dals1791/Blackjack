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
    $div.attr("value", card.value)
    
    cardDeck.splice(randCard, 1)
    return $div
    // console.log(cardValue)
}
const playerScore = function (){
    
    const cardValues = $("section .playerCards").children()
    
    // console.log("*******cardValues******")
    const cardValuesArray = $.makeArray(cardValues).map((card, idx) => {
        // console.log(card.attributes.value.value)
        return parseInt(card.attributes.value.value)
    })
    // console.log("*******cardValuesArray******")
    // console.log(cardValuesArray)
    const adder = function (accumulator, value){
        return accumulator+value
    }
    const playerScore = "Player has " + cardValuesArray.reduce(adder)

    console.log(playerScore)
    return playerScore
    

}
const dealerScore = function (){
    
    const cardValues = $("section .dealerCards").children()
    
    // console.log("*******cardValues******")
    const cardValuesArray = $.makeArray(cardValues).map((card, idx) => {
        // console.log(card.attributes.value.value)
        return parseInt(card.attributes.value.value)
    })
    // console.log("*******cardValuesArray******")
    // console.log(cardValuesArray)
    const adder = function (accumulator, value){
        return accumulator+value
    }
    const dealerScore = "Dealer has " + cardValuesArray.reduce(adder)

    console.log(dealerScore)
    return dealerScore
    

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
        
        playerScore()
        dealerScore()
    })
}
dealCards()


// ------------------------------------------------------------
// Adds card to player hands
const playerHitCard = function (){
    const $hitCard = $("button.hitButton")
    $hitCard.on("click", (event)=>{
    let newCard = createCard()
    const $playerCards = $(".playerCards")
    $playerCards.append(newCard)
    playerScore()
})
}
playerHitCard()

const dealerHit = function (){
   if(dealerScore<17){
    let newCard = createCard()
    const $dealerCards = $(".dealerCards")
    $dealerCards.append(newCard)
    dealerScore()
}
    


}

const gameRules = function (){
    const score = $("<div>")
    const score2 = $("<div>")
    const victorySpot = $(".player")
    const victorySpot2 = $(".dealer")
    if (dealerScore===21){
        
        score2.html("Dealer Wins")
        score.html("Player Wins")
        victorySpot.append(score)
        victorySpot2.append(score2)

    }
    else if (playerScore ===21){
        score.html("BlackJack")
        
        victorySpot.append(score)
    }
    else if (playerScore===21 && dealerScore===21){
        
        score.html("Player Pushes")
        const victorySpot = $(".player")
        victorySpot.append(score)
    }
    else{
        score.html("Player Busts, Dealer Wins")
    }

}

