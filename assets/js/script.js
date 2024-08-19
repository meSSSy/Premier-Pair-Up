const cards = document.querySelectorAll('.crest-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
    } else {
        hasFlippedCard = false;
        secondCard = this;

        // Check if the two selected cards match
        if (firstCard.dataset.framework === secondCard.dataset.framework) {
            // Disable further clicks on the matched cards
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard);
        } else {
            // Unflip the cards after a short delay
            setTimeout(() => {
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
            }, 1000);
        }
    }
}

cards.forEach(card => card.addEventListener('click', flipCard));

// timer

