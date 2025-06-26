console.log("Le script JavaScript est chargé et fonctionne !");

// Simple interaction: Alerte quand un lien de navigation est cliqué
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Empêche la navigation réelle pour l'exemple, mais affiche une alerte
            event.preventDefault();
            alert(`Vous avez cliqué sur : "${event.target.textContent}".`);
            console.log(`Navigation bloquée pour l'exemple : ${event.target.href}`);
        });
    });

    // Simulation très basique de changement de thème (couleur de fond du body)
    const body = document.body;
    let bgColorIndex = 0;
    const colors = ['#f0f8ff', '#e6f7ff', '#d9efff']; // Quelques couleurs claires

    // Change la couleur de fond toutes les 5 secondes
    setInterval(() => {
        bgColorIndex = (bgColorIndex + 1) % colors.length;
        body.style.backgroundColor = colors[bgColorIndex];
        console.log(`Changement de couleur de fond à ${colors[bgColorIndex]}`);
    }, 5000);
});