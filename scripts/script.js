const btns = document.querySelectorAll('.btn');
const submitBtn = document.querySelector('.submit-btn');
const ratingButtons = document.querySelectorAll('.btn');
const screen1 = document.getElementById('1-screen');
const screen2 = document.getElementById('2-screen');
const ratingDisplay = document.getElementById('rating-display');

let selectedRating = null;


btns.forEach(btn => {
    btn.addEventListener('click', function() {
        btns.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
    });
});

submitBtn.addEventListener('click', function() {

});

// Selección de rating
ratingButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Limpiar selección anterior
        ratingButtons.forEach(b => b.classList.remove('selected'));
        // Marcar este como seleccionado
        btn.classList.add('selected');
        selectedRating = btn.textContent;
    });
});

// Al hacer click en Submit
submitBtn.addEventListener('click', () => {
    if (selectedRating) {
        screen1.classList.add('hidden');
        screen2.classList.remove('hidden');
        screen2.style.display = 'flex';
        screen2.style.justifyContent = 'center';
        screen2.style.alignItems = 'center';
        screen2.style.flexDirection = 'column';
        screen2.style.textAlign = 'center';
        ratingDisplay.style.margin = '40px 0 ';
        ratingDisplay.textContent = `You selected ${selectedRating} out of 5`;
        ratingDisplay.style.padding = '10px';
        ratingDisplay.style.color = 'var(--orange-500)';
        ratingDisplay.style.backgroundColor = 'hsl(214, 17%, 24%)';
        ratingDisplay.style.borderRadius = '16px';
    } else {
        alert("Please select a rating, then submit.");
    }
});




