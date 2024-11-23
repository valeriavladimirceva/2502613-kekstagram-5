import { getPhotos } from './data.js';
import { drawingThumbnails } from './thumbnails.js';
import './form-upload.js';
drawingThumbnails(getPhotos());
