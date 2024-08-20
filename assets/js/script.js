const cards = document.querySelectorAll('.crest-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
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
            lockBoard = true;
            // Unflip the cards after a short delay
            setTimeout(() => {
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
                lockBoard = false;
            }, 1000);
        }
        function resetBoard() {
            [hasFlippedCard, lockBoard] = [false, false];
            [firstCard, secondCard] = [null, null];
        }
    }
}

(function shuffle() {
    cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 16);
    card.style.order = randomPos;
    });
})();

cards.forEach(card => card.addEventListener('click', flipCard));

// Signup and Signin forms

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

document.addEventListener('DOMContentLoaded', () => {
    const signInForm = document.getElementById('signInForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
  
    signInForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const username = usernameInput.value;
      const password = passwordInput.value;
  
      // Retrieve stored user data
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
  
      // Check if user exists and password matches
      const user = storedUsers.find(u => u.username === username && u.password === password);
  
      if (user) {
        alert('Sign in successful!');
        // Redirect to a logged-in page or perform other actions
      } else {
        alert('Invalid username or password');
      }
  
      // Clear form fields
      usernameInput.value = '';
      passwordInput.value = '';
    });
  });



 





