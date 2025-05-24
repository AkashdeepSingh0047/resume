let intervalId;

document.addEventListener('DOMContentLoaded', function () {
    intervalId = setInterval(shiftCards, 3000); // Shift cards every 3 seconds
});

function shiftCards() {
    const cardsContainer = document.querySelector('.project-cards-container');
    const cards = cardsContainer.querySelectorAll('.project-card');

    const firstCard = cards[0];
    cardsContainer.removeChild(firstCard);
    cardsContainer.appendChild(firstCard.cloneNode(true));

    cards.forEach((card, index) => {
        card.style.zIndex = cards.length - index;
    });
}

function stopShuffling() {
    clearInterval(intervalId);
}

function startShuffling() {
    intervalId = setInterval(shiftCards, 3000);
}

