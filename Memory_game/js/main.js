console.log("Up and running!");
var cards = [{
        "rank": "queen",
        "suit": "hearts",
        "cardImage": "images/queen-of-hearts.png"
    },
    {
        "rank": "queen",
        "suit": "diamonds",
        "cardImage": "images/queen-of-diamonds.png"
    },
    {
        "rank": "king",
        "suit": "hearts",
        "cardImage": "images/king-of-hearts.png"
    },
    {
        "rank": "king",
        "suit": "diamonds",
        "cardImage": "images/king-of-diamonds.png"
    }
];

var cardsInPlay = [];
var numGamesPlayed = 0;
var wins = 0;
var losses = 0;

function shuffleCards() {
    cards.sort(function() { return 0.5 - Math.random() });
}

function resetGame() {
    cardsInPlay = [];
    var elem = document.getElementById("game-board");
    while (elem.firstChild) {
        elem.removeChild(elem.firstChild);
    }
    createBoard();
}

function checkForMatch() {
    numGamesPlayed++;
    document.getElementById('numGamesPlayed').textContent = numGamesPlayed;
    if (cardsInPlay[0] === cardsInPlay[1]) {
        wins++;
        document.getElementById('wins').textContent = wins;
        alert("You found a match!");
    } else {
        losses++;
        document.getElementById('losses').textContent = losses;
        alert("Sorry, try again.");
    }
    resetGame();
}

function flipCard() {
    var cardId = this.getAttribute("data-id");
    this.setAttribute("src", cards[cardId].cardImage);
    console.log("User flipped " + cards[cardId].rank);
    cardsInPlay.push(cards[cardId].rank);
    console.log(cards[cardId].suit);
    console.log(cards[cardId].cardImage);
    console.log("Cards in play: " + cardsInPlay);
    if (cardsInPlay.length === 2) {
        setTimeout("checkForMatch()", 200);
    }
}

function createBoard() {
    shuffleCards();
    for (var i = 0; i < cards.length; i++) {
        var cardElement = document.createElement('img');
        cardElement.setAttribute("src", "images/back.png");
        cardElement.setAttribute("data-id", i);
        cardElement.addEventListener("click", flipCard);
        document.getElementById("game-board").appendChild(cardElement);
    }

}


createBoard();