//declares scores at beginning of game. 
let dealerScore1 =0 
let playerScore1 =0

// function to make array of scores to add
const CVA = (cardValues)=>{
    return $.makeArray(cardValues).map((card, idx) => {
        return parseInt(card.attributes.value.value)
    })
}
const playerPoints = function (){
    const cardValues = $("section .playerCards").children()
    let array = CVA(cardValues)
    playerScore1 = array.reduce((acc, val)=>acc+val)
    const scoreDisplay = $(".playerContainer h2")
    scoreDisplay.html("Player has " + playerScore1)

}
const dealerPoints = function (){
    const cardValues = $("section .dealerCards").children()
    let array = CVA(cardValues)
    dealerScore1 = array.reduce((acc, val)=>acc+val)
    const scoreDisplay = $(".dealerContainer h2")
    scoreDisplay.html("Dealer has " + dealerScore1) 
}

const displayDealerScore = function (){
    console.log("Dealer has " + dealerScore1)
}
const displayPlayerScore = function (){
    console.log("Player has " + playerScore1)
}
export {dealerScore1, playerScore1, playerPoints, dealerPoints, displayDealerScore, displayPlayerScore};