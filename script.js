window.onload = function() {
    createStars();
    createShootingStars();
};

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

document.addEventListener("click", function() {
    const audio = document.getElementById("bg-music");
    if (audio.paused) {
        audio.play();
    }

    document.addEventListener("mousemove", function (e) {
        let body = document.querySelector("body");
        let flower = document.createElement("div");
        flower.classList.add("flower"); // Add class to apply styles
    
        let x = e.clientX;
        let y = e.clientY;
    
        flower.style.left = x + "px";
        flower.style.top = y + "px";
    
        let size = Math.random() * 80;
        flower.style.width = 20 + size + "px";
        flower.style.height = 20 + size + "px";
    
        let rotation = Math.random() * 360;
        flower.style.transform = `rotate(${rotation}deg)`;
    
        body.appendChild(flower);
    
        setTimeout(function () {
            flower.remove();
        }, 9000);
    });
    
    
    
});