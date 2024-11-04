import { showBigPictureModal } from './big-picture.js';
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();

const drawingThumbnails = (pictures) => {
  pictures.forEach(({url, description, comments, likes}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__img').alt = description;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureElement.querySelector('.picture__likes').textContent = likes;

    pictureElement.addEventListener('click', (evt) => {
      evt.preventDefault();
      showBigPictureModal({url, description, comments, likes});
    });
    fragment.appendChild(pictureElement);
  });
  picturesContainer.appendChild(fragment);
};

export { drawingThumbnails };
