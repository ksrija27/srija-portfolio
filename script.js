// Simple typing effect without external library

    const texts = ['Student','Frontend Developer'];
    const textSpan = document.querySelector('.text');
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    let pauseTime = 1000;

    function type() {
      const currentText = texts[textIndex];
      if (!isDeleting) {
        textSpan.textContent = currentText.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentText.length) {
          isDeleting = true;
          setTimeout(type, pauseTime);
          return;
        }
      } else {
        textSpan.textContent = currentText.slice(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length;
        }
      }
      setTimeout(type, isDeleting ? typingSpeed / 2 : typingSpeed);
    }
const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");

  hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });

  hamburger.addEventListener("keypress", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      navbar.classList.toggle("active");
    }
  });

    type();