function createStars() {
    const starsContainer = document.getElementById("stars");
    for (let i = 0; i < 200; i++) {
        let star = document.createElement("div");
        star.classList.add("star");
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        starsContainer.appendChild(star);
    }
}

function createShootingStars() {
    setInterval(() => {
        for (let i = 0; i < 5; i++) {
            let shootingStar = document.createElement("div");
            shootingStar.classList.add("shooting-star");
            shootingStar.style.left = `${Math.random() * window.innerWidth}px`;
            shootingStar.style.top = `${Math.random() * window.innerHeight / 2}px`;
            document.body.appendChild(shootingStar);
            setTimeout(() => { shootingStar.remove(); }, 1500);
        }
    }, 500);
}

createStars();
createShootingStars();