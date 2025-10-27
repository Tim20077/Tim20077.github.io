/* script.js */
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
// Haal de gekozen kaart op uit de URL
const urlParams = new URLSearchParams(window.location.search);
const chosenCard = urlParams.get('card');

// Check of er een kaart is geselecteerd
if (!chosenCard) {
    document.getElementById("instructionText").innerText = "Geen kaart geselecteerd!";
    document.querySelector(".next-step-button").style.display = 'none'; // Verberg de knop als geen kaart is geselecteerd
} else {
    document.getElementById("instructionText").innerText = "✨Klik op 'Volgende Stap' om de instructies te starten.✨";
}

// Instructies array
const instructions = [
    "Laat de toeschouwer een kaart kiezen uit de stapel op de manier dat jij leuk vind.",
    "Zeg tegen de toeschouwer dat ze hun gekozen kaart goed moeten onthouden, maar niet hardop zeggen.",
    "Doe de kaart ergens tussen",
    "In het kaartspel...",
    "Laat de toeschouwer de kaarten schudden.",
    "🔮Nu komt het moment van de onthulling. De voorspelde kaart is..."
];

let currentStep = 0;

// Functie om de instructies te tonen
function showNextInstruction() {
    if (currentStep < instructions.length) {
        document.getElementById("instructionText").innerText = instructions[currentStep];
        currentStep++;
    } else {
        // Pas de kaart tonen nadat alle instructies zijn gegeven
        document.getElementById("cardGuess").innerText = chosenCard;
        document.getElementById("cardGuess").style.display = 'block'; // Zet de kaart zichtbaar
        document.querySelector(".next-step-button").style.display = 'none'; // Verberg de knop
        document.getElementById("backToMenu").style.display = 'block'; // Zet de "Terug naar Menu" knop zichtbaar
    }
}

// Functie om terug naar het main menu te gaan
function goToMenu() {
    window.location.href = "supertimtastic.html"; // Verstuurt de gebruiker naar het main menu
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
    const tips = [
        "Wist je dat een kaarttruc net als een mop is... als je hem moet uitleggen, is de magie weg!",
        "SuperTimtastic tip: Oefen elke truc voor een spiegel én je kat 🐱.",
        "Een echte goochelaar verbergt zijn geheim... en soms ook z'n kaarten 😉.",
        "Gebruik je handen, maar laat je glimlach het echte wonder zijn!",
        "De beste truc? Mensen laten lachen 😄!"
    ];

    const helper = document.querySelector('.magic-helper');
    const bubble = document.getElementById('speech-bubble');

    function showHelper() {
        const randomTip = tips[Math.floor(Math.random() * tips.length)];
        bubble.textContent = randomTip;
        helper.style.bottom = '20px';

        setTimeout(() => {
            helper.style.bottom = '-200px';
        }, 8000);
    }


    setInterval(showHelper, 30000);
    setTimeout(showHelper, 2000);

});
