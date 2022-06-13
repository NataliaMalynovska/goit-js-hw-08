import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector(".gallery");
const galleryImages= createGalleryImages(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryImages);


function createGalleryImages(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
      <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>       
            `;
        }).join(``);
}
var lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt',  captionDelay: "250"});

galleryContainer.addEventListener("click", onGalleryContainerClick)

function onGalleryContainerClick(event) {
    event.preventDefault();
    const isGalleryImage = event.target.classList.contains("gallery__image");
    if (!isGalleryImage) {
        return;
    }

    console.log(event.target)
    console.log(event.currentTarget)
   
}

console.log(galleryItems);