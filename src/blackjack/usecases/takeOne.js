    // Takes the last card from the deck
export const takeOne = (deck) => {
    if (!deck || deck.length === 0) {
        throw 'No more cards in deck';
    }

    const card = deck.pop();

    return card;
}