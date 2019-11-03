//available cards
let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];

let values = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 
'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two'];

//card in deck
let deck = [];

//add available cards to the deck
for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
    for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
        deck.push(values[valueIdx] + ' of ' + suits[suitIdx]);
    }
}

//player card
let playerCards = [deck[0], deck[2]];

//welcome message
console.log('Welcome to Blackjack!');

//card in play
console.log('You are dealt: ');
console.log(' ' + playerCards[0]);
console.log(' ' + playerCards[1]);
