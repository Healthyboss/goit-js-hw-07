import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".class");

for (let i = 0; i < galleryItems.length; i++) {
  const galleryItem = `
    <li class="gallery__item">
      <a class="gallery__link" href="${galleryItems[i].original}">
        <img
          class="gallery__image"
          src="${galleryItems[i].preview}
          data-source="${galleryItems[i].original}
          alt="${galleryItems[i].description}"
        />
      </a>
    </li>`;
  gallery.insertAdjacentHTML("beforeend", galleryItem);
}
console.log(galleryItems);
console.log(gallery);
