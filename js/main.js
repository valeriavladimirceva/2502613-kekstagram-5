import { getData } from './api.js';
import { showAlert } from './utils.js';
import { drawingThumbnails } from './thumbnails.js';
import { setUserFormSubmit, hideForm } from './form-upload.js';
import { initFilters } from './sort.js';

getData()
  .then((photos) => {
    drawingThumbnails(photos);
    initFilters(photos, (filteredPhotos) => {
      document.querySelector('.pictures').innerHTML = '';
      drawingThumbnails(filteredPhotos);
    });
  })
  .catch((error) => {
    showAlert(error.message);
  });

setUserFormSubmit(hideForm);
