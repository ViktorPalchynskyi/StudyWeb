const myDeck = {
   deck: [],
   drawCards: [],
   suits: ['hearts', 'diamonds', 'spades', 'clubs'],
   values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
   initializeDeck() {
      const { values, suits, deck } = this;
      for (const value of values) {
         for (const suit of suits) {
            deck.push({
               value,
               suit,
            })
         }
      }
   },
   drawCard() {
      const { drawCards, deck } = this;
      const card = deck.pop();
      drawCards.push(card);
      return card;
   },
   drawMultiple(numCards) {
      const cards = [];
      for (let i = 0; i < numCards; i++) {
         cards.push(this.drawCard());
      }
      return cards;
   },
   shuffle() {
      const { deck } = this;
      for (let i = deck.length - 1; i > 0; i--) {
         let j = Math.floor(Math.random() * (i + 1));
         [deck[i], deck[j]] = [deck[j], deck[i]];
      }
   }
}

myDeck.initializeDeck();
myDeck.shuffle();
const h1 = myDeck.drawMultiple(2);
const h2 = myDeck.drawMultiple(2);
const h3 = myDeck.drawMultiple(5);

console.log(h1);