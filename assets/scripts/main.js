let btntext = document.querySelector('.dark-mode');

const change = () => {
  let btn = document.body;

  if (btntext.innerHTML === `<i class="fa-solid fa-sun"></i>`) {
    btn.classList.toggle('dark');
    btntext.innerHTML = `<i class="fa-solid fa-moon"></i>`
  } else {
    btntext.innerHTML = `<i class="fa-solid fa-sun"></i>`
  }
}