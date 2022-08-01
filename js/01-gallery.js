import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');
let instance;

galleryEl.insertAdjacentHTML('beforeend', createGallery(galleryItems));

galleryEl.addEventListener('click', galleryItemOnClick);
 
function galleryItemOnClick(e) {
    e.preventDefault();
    window.addEventListener('keydown', closeModalByEsc);

    if (e.target.nodeName === 'IMG') {
        const imgUrl = e.target.dataset.source;
        instance = basicLightbox.create(showModalImg(imgUrl));
        instance.show();
    }   
    
};

function closeModalByEsc(e) {
    if (e.code === 'Escape') {        
        instance.close();
        window.removeEventListener('keydown', closeModalByEsc);
};
};

function showModalImg(url) {
    return `
    <div class="modal">
        <img src="${url}">
    </div>
    `
};

function createGallery(items) {
    return items.map(item => {
        const { preview, original, description } = item;

        const itemEl = `
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`
        return itemEl;
    }).join('');    
};