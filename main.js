document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("catalogToggle");
  const menu = document.getElementById("catalogMenu");

  toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("show");
  });

  // Якщо хочете, щоб меню ховалося при кліку поза ним:
  document.addEventListener("click", (event) => {
    if (
      !toggleBtn.contains(event.target) &&
      !menu.contains(event.target)
    ) {
      menu.classList.remove("show");
    }
  });
});

let products = document.querySelectorAll(".product");

// Відключили перезавантаження для кнопок
function randint(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

products.forEach((item, index) => {
  item
    .querySelector(".article-but")
    .addEventListener("click", function () {
      let obj = {
        source: item.querySelector("img").getAttribute("src"),
        alt: item.querySelector("img").getAttribute("alt"),
        heading: item.querySelector("h3").innerHTML,
        text: item.querySelector("p").innerHTML,
      };
      let id = randint(-10000, 10000)

      localStorage.setItem(`card ${id}`, JSON.stringify(obj));
    });
});
