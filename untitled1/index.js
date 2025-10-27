function revealSecret() {
    let secret = document.getElementById('secret');
    secret.style.display = 'block';
    setTimeout(() => {
        secret.style.opacity = '1';
    }, 100);
}

function createStars() {
    const starsContainer = document.querySelector('.stars');
    for (let i = 0; i < 100; i++) {
        let star = document.createElement('div');
        star.classList.add('star');
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.animationDuration = `${Math.random() * 3 + 1}s`;
        starsContainer.appendChild(star);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Sterren genereren
    createStars();

    // Trail bij muisbeweging
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

    // Klik op quiz-knop
    const quizButton = document.getElementById('startQuizBtn');
    if (quizButton) {
        quizButton.addEventListener('click', function () {
            window.location.href = 'quiz.html';
        });
    }
});
