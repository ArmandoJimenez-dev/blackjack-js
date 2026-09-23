
import { createDeck, takeOne, cardValue, computersTurn, createCard } from "./usecases/export.js";

(() => {


    'use strict'

    let deck = [],
    lastCard = [];

    const suits = ['C', 'D', 'H', 'S',],
        figures = ['J', 'Q', 'K', 'A'];
        
    let playerScore = 0,
           comScore = 0;

    const btnNewGame = document.querySelector('.btnNewGame'),
            btnHitMe = document.querySelector('.btnHitMe'),
             btnStop = document.querySelector('.btnStop');

    const playerScoreHTML = document.querySelector('.playerScoreHtml'),
           divPlayerCards = document.querySelector('.playerCards');

    const computerScoreHTML = document.querySelector('.computerScoreHtml'),
                divComCards = document.querySelector('.comCards');


    const buttonDisable = () => {
        btnHitMe.disabled = true;
        btnStop.disabled = true;
    }

    buttonDisable();


    // BUTTONS
    // Sets the player's score and appends the card image
    btnHitMe.addEventListener('click', () => {
        lastCard = takeOne(deck);
        playerScore += cardValue(lastCard);
        playerScoreHTML.textContent = playerScore;

        const cardImg = createCard(lastCard);
        divPlayerCards.append(cardImg);

        if (playerScore > 21) {
            btnHitMe.disabled = true;
            btnStop.disabled = true;
            computersTurn(playerScore, deck, computerScoreHTML, divComCards, btnNewGame);

        } else if (playerScore === 21) {
            console.warn('This is my first easter egg. The developer says: 21, congrats and thank you for playing!!!');
            btnHitMe.disabled = true;
            btnStop.disabled = true;
            computersTurn(playerScore, deck, computerScoreHTML, divComCards, btnNewGame);
        }
    });

    btnStop.addEventListener('click', () => {
        btnHitMe.disabled = true;
        btnStop.disabled = true;
        computersTurn(playerScore, deck, computerScoreHTML, divComCards, btnNewGame);
    });

    btnNewGame.addEventListener('click', () => {
        console.clear();
        deck = [];
        deck = createDeck(suits, figures);
        btnHitMe.disabled = false;
        btnStop.disabled = false;
        btnNewGame.disabled = true;
        playerScore = 0;
        comScore = 0;
        playerScoreHTML.textContent = playerScore;
        divPlayerCards.innerHTML = '';
        computerScoreHTML.textContent = comScore;
        divComCards.innerHTML = '';
    });


})();

