const toggles = document.querySelectorAll('button');

toggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    toggle.parentElement.classList.toggle('active');
  });
});
