
// Adds a card       
export const createCard = ( lastCard ) => {
    const cardImg = document.createElement('img');
    cardImg.src = `../assets/cards/${lastCard}.png`;
    cardImg.classList.add('card');

    return cardImg;
}
