//index.html
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>MyGame</title>
    <link rel="stylesheet" href="./css/main.css">
</head>
<body>
<div class="container">
    <div class="card" data-framework="codeCard1">
        <img class="face-card" src="./img/codeCard1.png" alt="codeCard1">
        <img class="background-card" src="./img/card-back.svg" alt="background-card">
    </div>
    <div class="card" data-framework="codeCard1">
        <img class="face-card" src="./img/codeCard1.png" alt="codeCard1">
        <img class="background-card" src="./img/card-back.svg" alt="background-card">
    </div>
    <div class="card" data-framework="codeCard2">
        <img class="face-card" src="./img/codeCard2.png" alt="codeCard2">
        <img class="background-card" src="./img/card-back.svg" alt="background-card">
    </div>
    <div class="card" data-framework="codeCard2">
        <img class="face-card" src="./img/codeCard2.png" alt="codeCard2">
        <img class="background-card" src="./img/card-back.svg" alt="background-card">
    </div>
    <div class="card" data-framework="codeCard3">
        <img class="face-card" src="./img/codeCard3.png" alt="face-card">
        <img class="background-card" src="./img/card-back.svg" alt="background-card">
    </div>
    <div class="card"data-framework="codeCard3">
        <img class="face-card" src="./img/codeCard3.png" alt="face-card">
        <img class="background-card" src="./img/card-back.svg" alt="background-card">
    </div>
    <div class="card" data-framework="codeCard4">
        <img class="face-card" src="./img/codeCard4.png" alt="face-card">
        <img class="background-card" src="./img/card-back.svg" alt="background-card">
    </div>
    <div class="card" data-framework="codeCard4">
        <img class="face-card" src="./img/codeCard4.png" alt="face-card">
        <img class="background-card" src="./img/card-back.svg" alt="background-card">
    </div>
    <div class="card" data-framework="codeCard5">
        <img class="face-card" src="./img/codeCard5.png" alt="face-card">
        <img class="background-card" src="./img/card-back.svg" alt="background-card">
    </div>
    <div class="card" data-framework="codeCard5">
        <img class="face-card" src="./img/codeCard5.png" alt="face-card">
        <img class="background-card" src="./img/card-back.svg" alt="background-card">
    </div>
    <div class="card" data-framework="codeCard6">
        <img class="face-card" src="./img/codeCard6.png" alt="face-card">
        <img class="background-card" src="./img/card-back.svg" alt="background-card">
    </div>
    <div class="card" data-framework="codeCard6">
        <img class="face-card" src="./img/codeCard6.png" alt="face-card">
        <img class="background-card" src="./img/card-back.svg" alt="background-card">
    </div>
</div>

<script src="./JS/main.js"></script>
</body>
</html>

//./css/main.css
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body {
    height: 100vh;
    display: flex;
}
.container {
    width: 640px;
    height: 640px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
}
.card {
    position: relative;
    margin: 5px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
    width: calc(25% - 10px);
    height: calc(33.333% - 10px);
    transform: scale(1);
    transform-style: preserve-3d;
    transition: transform .5s;
}
.card:active{
    transform: scale(0.97);
    transition: transform .2s;
}
.card.flipTheCard {
    transform: rotateY(180deg);
}
.face-card {
    transform: rotateY(180deg);
}
.face-card,
.background-card {
    background: #F0E68C;
    position: absolute;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    padding: 20px;
    backface-visibility: hidden;
}
//./JS/main.js

const TIMETOFLIP = 1000;

let cardSelection = document.querySelectorAll('.card');

let firstCard,nextCard;
let cardUpsideDown = false;
let returnBackCard = false;

function flipTheCard () {
    if (returnBackCard){
        return;
    }
    if (this === firstCard) return;

    this.classList.add('flipTheCard');

    if(!cardUpsideDown) {
        cardUpsideDown = true;
        firstCard = this;
        return;
    }
    nextCard = this;

    checkingCardMatching();
    }

function resetGamescreen () {
    [cardUpsideDown, returnBackCard] = [false, false];
    [firstCard, nextCard] = null, null;
}

function checkingCardMatching () {
    if (firstCard.dataset.framework === nextCard.dataset.framework) {
        stopMatchingCards ();
        return;
    } else  {
        returnPositionCard();
    }
}
function stopMatchingCards () {
    firstCard.removeEventListener('click', flipTheCard);
    nextCard.removeEventListener('click', flipTheCard);

    resetGamescreen();
}
function returnPositionCard (){
    returnBackCard = true;

    setTimeout(()=> {
        firstCard.classList.remove('flipTheCard');
        nextCard.classList.remove('flipTheCard');

        resetGamescreen();
    },TIMETOFLIP);
}

(function shuffleTheCards() {
    cardSelection.forEach(cardRandom => {
        let randomiseСard = Math.floor(Math.random()*12);
        cardRandom.style.order = randomiseСard;
    });
}());


cardSelection.forEach(cardSelection => cardSelection.addEventListener('click',flipTheCard));
