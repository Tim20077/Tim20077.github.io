/* script.js */
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('year').textContent = new Date().getFullYear();

    document.getElementById('btnProjects').addEventListener('click', () => smoothScroll('#projects'));
    document.getElementById('btnContact').addEventListener('click', () => smoothScroll('#contact'));

    document.querySelectorAll('.project .btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const url = btn.dataset.url;
            if (url && url !== '#') window.location.href = url;
        });
    });

    // ---------------- CONTACT FORM ----------------
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', e => {
        e.preventDefault();
        const status = document.getElementById('formStatus');
        status.textContent = 'Sending...';

        // Formspree URL invullen (vervang dit met jouw eigen Formspree endpoint!)
        const formUrl = "https://formspree.io/f/xayvbdpq";

        fetch(formUrl, {
            method: "POST",
            body: new FormData(form),
            headers: { 'Accept': 'application/json' }
        })
            .then(response => {
                if (response.ok) {
                    form.reset();
                    status.textContent = "Message sent successfully! 🪄";
                } else {
                    status.textContent = "Oops! Something went wrong.";
                }
            })
            .catch(() => {
                status.textContent = "Oops! Something went wrong.";
            });
    });

    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('light');
        document.body.style.background = isDark ? '#f5f7fa' : 'var(--bg)';
        document.body.style.color = isDark ? '#111' : 'var(--fg)';
    });

    // ------------------ DISCO SECTION ------------------

    const discoBtn = document.getElementById('discoBtn');
    let discoMusic;
    let colorInterval;

    discoBtn.addEventListener('click', startDisco);

    function startDisco() {
        document.body.classList.add('disco-active');
        createDiscoBall();

        for (let i = 0; i < 100; i++) {
            setTimeout(createConfetti, i * 100);
        }

        discoMusic = new Audio('retro-disco-old-school-117950.mp3');
        discoMusic.volume = 0.5;
        discoMusic.play();

        let hue = 0;
        colorInterval = setInterval(() => {
            hue += 20;
            document.body.style.backgroundColor = `hsl(${hue}, 70%, 40%)`;
        }, 200);

        setTimeout(stopDisco, 10000);
    }

    function stopDisco() {
        clearInterval(colorInterval);
        document.body.classList.remove('disco-active');
        document.body.style.backgroundColor = '';
        if (discoMusic) discoMusic.pause();
        stopDiscoBall();
    }

    function createConfetti() {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.animationDuration = 3 + Math.random() * 2 + 's';
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 5000);
    }

    function createDiscoBall() {
        if (document.getElementById('discoBall')) return;

        const discoBall = document.createElement('img');
        discoBall.src = '505264_37792.gif';
        discoBall.id = 'discoBall';
        discoBall.classList.add('disco-ball');
        document.body.appendChild(discoBall);
    }

    function stopDiscoBall() {
        const discoBall = document.getElementById("discoBall");
        if (discoBall) {
            discoBall.style.opacity = "0";
            setTimeout(() => discoBall.remove(), 500);
        }
    }
}); // sluit DOMContentLoaded af

// ------------------ SCROLL FUNCTION ------------------
function smoothScroll(id) {
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
}
