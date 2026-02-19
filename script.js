// Exemple simple de compte à rebours
function startTimer() {
    const blocks = document.querySelectorAll(".time-block span");
    // Ceci est une simulation visuelle
    setInterval(() => {
        let seconds = parseInt(blocks[3].innerText);
        if (seconds > 0) {
            blocks[3].innerText = (seconds - 1).toString().padStart(2, '0');
        }
    }, 1000);
}

startTimer();