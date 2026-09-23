    // Creates a deck and shuffles it
    export const createDeck = (suits, figures) => {
        let deck = [];

        for (let i = 2; i <= 10; i++ ) {
            for (let suit of suits) {
                deck.push(i + suit);
            }
        }

        for (let figure of figures) {
            for (let suit of suits) {
                deck.push(figure + suit);
            }
        }
        
        /* Shuffles the created deck */
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
        
        return deck;
    }