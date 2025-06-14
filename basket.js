for (let index = 0; index < localStorage.length; index++) {
  let key = localStorage.key(index);
  let obj = JSON.parse(localStorage.getItem(key));
    
  let obj_html = `<div class="product">
          <img src="${obj.source}" alt="${obj.alt}">
          <h3>${obj.heading}</h3>
          <p>${obj.text}</p>
          <a class="article-but" href="#">Видалити</a>
        </div>
    `;

  document.querySelector(".basket_products").innerHTML += obj_html;
}
