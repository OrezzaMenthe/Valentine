function openLetter() {
    document.getElementById("card").style.transform = "translate(0%, -180px)";
    setTimeout(() => {
        document.getElementById("buttons").style.display = "block";
    }, 1000);
}

function refreshPage() {
    location.reload();
}

function moveNoButton() {
    let btnNo = document.getElementById("btn-no");
    let parent = document.querySelector(".buttons");

    let maxWidth = parent.clientWidth - btnNo.clientWidth;
    let maxHeight = parent.clientHeight - btnNo.clientHeight;

    let newX = Math.max(0, Math.random() * maxWidth);
    let newY = Math.max(0, Math.random() * maxHeight);

    btnNo.style.transform = `translate(${newX}px, ${newY}px)`;
}

function answerYes() {
    showPopup();
    generateHearts();
}

function showPopup() {
    let popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerText = "Thank you 🥰";
    document.body.appendChild(popup);
    popup.style.display = "block";
}

function generateHearts() {
    const heartContainer = document.getElementById("hearts-container");
    for (let i = 0; i < 20; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        let size = Math.random() * 30 + 20; // Taille aléatoire entre 20px et 50px
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";
        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}
