import { getData } from './api.js';
import { showAlert } from './utils.js';
import { drawingThumbnails } from './thumbnails.js';
import { setUserFormSubmit, hideForm } from './form-upload.js';

getData()
  .then((photos) => {
    drawingThumbnails(photos);
  })
  .catch((error) => {
    showAlert(error.message);
  });
setUserFormSubmit(hideForm);
