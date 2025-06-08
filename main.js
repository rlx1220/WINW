document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('catalogToggle');
  const menu = document.getElementById('catalogMenu');

  toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('show');
  });

  // Якщо хочете, щоб меню ховалося при кліку поза ним:
  document.addEventListener('click', (event) => {
    if (!toggleBtn.contains(event.target) && !menu.contains(event.target)) {
      menu.classList.remove('show');
    }
  });
});
