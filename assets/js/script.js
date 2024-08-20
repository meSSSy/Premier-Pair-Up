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

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    // Load saved data from sessionStorage
    username.value = sessionStorage.getItem('username') || '';
    email.value = sessionStorage.getItem('email') || '';

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Validate password match
        if (password.value !== confirmPassword.value) {
            alert("Passwords don't match!");
            return;
        }

        // Save data to sessionStorage
        sessionStorage.setItem('username', username.value);
        sessionStorage.setItem('email', email.value);

        alert('Form submitted and data saved to session storage!');
        
    });
});



