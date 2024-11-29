// Main entry animation
const mainEntry = document.getElementById('main-entry');

mainEntry.addEventListener('click', () => {
    mainEntry.style.color = 'black';
    mainEntry.style.backgroundColor = 'white';
    mainEntry.style.border = '2px solid black';
    mainEntry.innerHTML = 'Entering...';
    setTimeout(() => {
        window.location.href = 'main-content.html'; // Redirect to your main page
    }, 1000);
});

// Additional interactions for entries
const entries = document.querySelectorAll('.entry');
entries.forEach((entry) => {
    entry.addEventListener('click', () => {
        alert(`You clicked on: ${entry.textContent}`);
    });
});
