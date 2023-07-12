let btntext = document.querySelector('.dark-mode');

const change = () => {
  let btn = document.body;

  if (btntext.innerHTML === "☀️") {
    btn.classList.toggle('dark');
    btntext.innerHTML = "🌜"
  } else {
    btntext.innerHTML = "☀️"
  }
}