window.onload = () => {
  // Récupération des div ayant la classe bar
  const bars = document.querySelectorAll(".bar");
  bars.forEach((bar) => {
    let value = bar.getAttribute("data-value");
    bar.style.width = `${value}%`;
    // Création de la variable count
    let count = 0;
    // La méthode setInterval() appelle à plusieurs reprises une fonction ou exécute un extrait de code, avec un délai fixe entre chaque appel.
    let progressAnimation = setInterval(() => {
      // Incrémentation de la variable count
      count++;
      bar.setAttribute("data-text", `${count}%`);
      if (count == value) {
        // La méthode globale clearInterval() annule une action répétitive et chronométrée qui a été précédemment établie par un appel à setInterval().
        clearInterval(progressAnimation);
      }
    }, 20);
  });
};
