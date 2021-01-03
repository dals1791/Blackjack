var dealerScore1
var playerScore1

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
var playerPoints = function (){
    
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
     playerScore1 = cardValuesArray.reduce(adder)

    // console.log(playerScore)
//    playerScore1 = playerScore
    // console.log(playerScore1)
    

}
var dealerPoints = function (){
    
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
     dealerScore1 = cardValuesArray.reduce(adder)

    
     
     
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
        
        playerPoints()
        dealerPoints()
        displayScore() 
        
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
    playerPoints()
    displayScore()

    const score = $("<div>")
    const score2 = $("<div>")
    const victorySpot = $(".player h2")
    const victorySpot2 = $(".dealer h2")
    if (playerScore1===21){
        score.html("BlackJack")
        victorySpot.append(score)
        console.log(score, score2)
    }
    else if(playerScore1>21){
        score.html("Player Busts, Dealer Wins")
        score2.html("Dealer Wins")
        victorySpot.append(score)
        victorySpot2.append(score2)
        console.log(score, score2)
    }
})
}
playerHitCard()





const dealerHit = function (){
    const $dealerHitButton = $("button.dealerHit")
    $dealerHitButton.on("click", (event)=>{
        console.log(dealerScore1)
        while(dealerScore1<17){

         let newCard = createCard()
         const $dealerCards = $(".dealerCards")
         $dealerCards.append(newCard)
         dealerPoints()
        }
         
        displayScore()
        gameVictory() 

    })
    
     
 }
 dealerHit()

 const stay = function (){
 const $stayButton = $(".stayButton")
 $stayButton.on("click", (event)=>{
    dealerHit()


 })

 }


 const displayScore = function (){
 console.log("Player has " + playerScore1)
 console.log("Dealer has " + dealerScore1)
}

const gameVictory = function (){
    
    const score = $("<div>")
    const score2 = $("<div>")
    const victorySpot = $(".player")
    const victorySpot2 = $(".dealer")
    if (dealerScore1===21){
        
        score2.html("Dealer Wins")
        score.html("Player Wins")
        victorySpot.append(score)
        victorySpot2.append(score2)
        console.log(score, score2)
    }
    else if (playerScore1 ===21){
        score.html("BlackJack")
        victorySpot.append(score)
        console.log(score, score2)
    }
    else if (playerScore1===21 && dealerScore1===21){
        score.html("Player Pushes")
        const victorySpot = $(".player")
        victorySpot.append(score)
        console.log(score, score2)
    }
    else if(playerScore1>21){
        score.html("Player Busts, Dealer Wins")
        score2.html("Dealer Wins")
        victorySpot.append(score)
        victorySpot2.append(score2)
        console.log(score, score2)
    }
    else {}

}