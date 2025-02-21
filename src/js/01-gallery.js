// import * as basicLightbox from 'basiclightbox';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// -------------------------------------------------
import { galleryItems } from './gallery-items';

// -------------------------------------------------
const gallery = document.querySelector(".gallery");
// --------------------------------------------------
const markup = galleryItems.reduce((acc, item) => {
    return acc + `<li class = "gallery__item">
    <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
    </a>
    </li>
    `
}, "");

gallery.insertAdjacentHTML("beforeend", markup);

// --------------------------------------------------
// Логіка для basicLightbox

// gallery.addEventListener("click", handleClick);
// let instance;
// function handleClick(event) {
//     console.log(event);
//     event.preventDefault();
//     const url = event.target.dataset.source;
//     instance = basicLightbox.create(`
//     <img src="${url}" width="800" height="600">
// `, {
//         onShow: (instance) => {
//         window.addEventListener("keydown", onEscKeyPress);
//         instance.element().querySelector('img').onclick = instance.close;
//         },
//         onClose: (instance) => {
//         window.removeEventListener("keydown", onEscKeyPress)
//     }
// })

// instance.show() 
// }
 
// function onEscKeyPress(event) {
//     if (event.code === "Escape") {
//         instance.close(); 
//     }
// }
// ---------------------------------------------------
// логіка для simpleLightBox
// gallery.addEventListener("click", (event) => {
//     event.preventDefault();
// });
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
    captionPosition: 'bottom',
    animationSlide: false,
    preloading: false,
});
