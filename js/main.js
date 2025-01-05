import { getData } from './api.js';
import { showAlert } from './utils.js';
import { renderThumbnails } from './thumbnails.js';
import { setUserFormSubmit, hideForm } from './form-upload.js';
import { initFilters } from './sort.js';

getData()
  .then((photos) => {
    renderThumbnails(photos);
    initFilters(photos,(filteredPhotos) => {
      renderThumbnails(filteredPhotos);
    });
  })
  .catch((error) => {
    showAlert(error.message);
  });

setUserFormSubmit(hideForm);
