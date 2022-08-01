import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');
galleryEl.insertAdjacentHTML('beforeend', createGalleryItems(galleryItems));

const lightbox = new SimpleLightbox('.gallery a');
lightbox.options.captionsData = 'alt';
lightbox.options.captionDelay = 250;

function createGalleryItems(items) {
    return items.map((item) => {
        const { preview, original, description } = item;

        const itemEl = `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
        `
        return itemEl;
    }).join('');
}


