import { takeOne, cardValue, createCard } from "./export.js";

// Sets the computer's score and appends the card image
export const computersTurn = (minscore, deck, computerScoreHTML, divComCards, btnNewGame) => {
    let comScore = 0;
    let lastCard;

    do {
        lastCard = takeOne(deck);
        comScore += cardValue(lastCard);
        computerScoreHTML.textContent = comScore;
    
        const cardImg = createCard(lastCard);
        divComCards.append(cardImg);

        if (comScore > 21) {
            break;
        }

    } while ((comScore < minscore) && (minscore <= 21));

    setTimeout(() => {
        if (comScore === minscore) {
            alert('No winners');
        } else if (minscore > 21) {
            alert('Computer wins!');
        } else if (comScore > 21){
            alert('Player wins');
        } else if (comScore > minscore) {
            alert('Computer wins');
        } else {
            alert('Player wins')
        }
        btnNewGame.disabled = false;
    }, 100);
}