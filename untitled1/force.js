const trailContainer = document.getElementById('trail-container');

document.addEventListener('mousemove', (e) => {
    const trail = document.createElement('div');
    trail.className = 'trail';
    trail.style.left = `${e.pageX}px`;
    trail.style.top = `${e.pageY}px`;
    trailContainer.appendChild(trail);

    setTimeout(() => {
        trail.remove();
    }, 500);
});


function selectCategory(category) {
    let cardsDiv = document.getElementById('cards');
    cardsDiv.innerHTML = `<h2 class="magic-title">✨ Kies je kaart (${category}) ✨</h2>`;
    cardsDiv.style.display = 'block';


    let cardNames = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Boer', 'Koningin', 'Koning'];

    // Verwijder bestaande kaarten voor een frisse selectie
    cardsDiv.innerHTML = "";

    // Magische titel
    let title = document.createElement("h2");
    title.innerHTML = `✨ Kies je kaart (${category}) ✨`;
    title.classList.add("magic-title");
    cardsDiv.appendChild(title);

    cardNames.forEach((card, index) => {
        let btn = document.createElement('button');
        btn.classList.add('card-button');
        btn.innerText = `${category} ${card}`;
        btn.onclick = function() {
            location.href = `instructions.html?card=${encodeURIComponent(category + ' ' + card)}`;
        };

        // Animatie toevoegen
        btn.style.opacity = "0";
        btn.style.transform = "translateY(20px)";
        btn.style.animation = `fadeInUp 0.5s ease-out forwards ${index * 0.1}s`;

        cardsDiv.appendChild(btn);

    });
}

// Sterren genereren voor een magische achtergrond
document.addEventListener("DOMContentLoaded", function () {
    const starsContainer = document.querySelector(".stars");
    for (let i = 0; i < 100; i++) {
        let star = document.createElement("div");
        star.classList.add("star");
        star.style.top = Math.random() * 100 + "vh";
        star.style.left = Math.random() * 100 + "vw";
        star.style.animationDuration = (Math.random() * 2 + 1) + "s";
        starsContainer.appendChild(star);
    }
});
