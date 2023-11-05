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

// Récupération des différents éléments
const progressCircles = document.querySelectorAll(".progress__circle");
const progressText = document.querySelectorAll(".data__progress");

progressCircles.forEach((progressCircle) => {
  // Création des différentes variables
  let percentage = progressCircle.getAttribute("data-value");
  let color = progressCircle.getAttribute("data-stroke");
  let radius = progressCircle.r.baseVal.value;
  let circumference = radius * 2 * Math.PI;
  let stroke = circumference - (circumference * percentage) / 100;
  progressCircle.style.setProperty("--stroke-dashoffset", stroke);
  progressCircle.style.setProperty("--stroke-dasharray", circumference);
  progressCircle.style.setProperty("--stroke", color);
  progressCircle.style.setProperty("--animation-time", `${percentage * 100}ms`);
});

progressText.forEach((text) => {
  let data = text.getAttribute("data-value");
  // Création de la variable progressValue
  let progressValue = 0;
  // La méthode setInterval() appelle à plusieurs reprises une fonction ou exécute un extrait de code, avec un délai fixe entre chaque appel.
  let progressBar = setInterval(() => {
    // Incrémentation de la variable progressValue
    progressValue++;
    text.textContent = `${progressValue}%`;
    if (progressValue == data) {
      // La méthode globale clearInterval() annule une action répétitive et chronométrée qui a été précédemment établie par un appel à setInterval().
      clearInterval(progressBar);
    }
  }, 100);
});
