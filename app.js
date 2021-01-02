// const cardDeck = [
//     "Ace-Spade", "Ace-Heart", "Ace-Club", "Ace-Diamond",
//     "2-Spade", "2-Heart", "2-Club", "2-Diamond",
//     "3-Spade", "3-Heart", "3-Club", "3-Diamond",
//     "4-Spade", "4-Heart", "4-Club", "4-Diamond",
//     "5-Spade", "5-Heart", "5-Club", "5-Diamond",
//     "6-Spade", "6-Heart", "6-Club", "6-Diamond",
//     "7-Spade", "7-Heart", "7-Club", "7-Diamond",
//     "8-Spade", "8-Heart", "8-Club", "8-Diamond",
//     "9-Spade", "9-Heart", "9-Club", "9-Diamond",
//     "10-Spade", "10-Heart", "10-Club", "10-Diamond",
//     "Jack-Spade", "Jack-Heart", "Jack-Club", "Jack-Diamond",
//     "Queen-Spade", "Queen-Heart", "Queen-Club", "Queen-Diamond",
//     "King-Spade", "King-Heart", "King-Club", "King-Diamond",
//     ]
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
console.log(cardDeck)


   const player = function (){

   }
const createCard = function (){
      const randCard = Math.floor(Math.random()*cardDeck.length);
      const card = cardDeck[randCard]
      const $div = $("<div>")
      $div.addClass("card")
      $div.html(card.description)
      
      cardDeck.splice(randCard, 1)
      return $div
}

const hitCard = function (){
    const $hitCard = $("button.hitButton")
    $hitCard.on("click", (event)=>{
    let newCard = createCard()
    const $playerCards = $(".playerCards")
    $playerCards.append(newCard)
})

}
hitCard()


