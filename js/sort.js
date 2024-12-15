import { debounce } from './utils.js';

const FILTER_DELAY = 500;
const RANDOM_PHOTOS_COUNT = 10;
const FILTERS = {
  FILTER_RANDOM: 'filter-random',
  FILTER_DISCUSSED: 'filter-discussed',
  FILTER_DEFAULT: 'filter-default'
};

const imgFilters = document.querySelector('.img-filters');
const filterButtons = document.querySelectorAll('.img-filters__button');
let currentFilter = FILTERS.FILTER_DEFAULT;

const applyFilter = (photos) => {
  switch (currentFilter) {
    case FILTERS.FILTER_RANDOM:
      return photos
        .sort(() => 0.5 - Math.random())
        .slice(0, RANDOM_PHOTOS_COUNT);
    case FILTERS.FILTER_DISCUSSED:
      return photos
        .sort((firstPhoto, secondPhoto) => secondPhoto.comments.length - firstPhoto.comments.length);
    case FILTERS.FILTER_DEFAULT:
    default:
      return [...photos];
  }
};

const setFilter = (filter, photos, updateThumbnails) => {
  currentFilter = filter;
  const filteredPhotos = applyFilter(photos);
  updateThumbnails(filteredPhotos);
};

const setActiveButton = (activeButton) => {
  filterButtons.forEach((button) => button.classList.remove('img-filters__button--active'));
  activeButton.classList.add('img-filters__button--active');
};

const onFilterButtonClick = (evt, photos, updateThumbnails) => {
  const targetButton = evt.target;
  setActiveButton(targetButton);
  setFilter(targetButton.id, photos, updateThumbnails);
};

const initFilters = (photos, updateThumbnails) => {
  imgFilters.classList.remove('img-filters--inactive');

  const debouncedSetFilter = debounce((filterType) => {
    setFilter(filterType, photos, updateThumbnails);
  }, FILTER_DELAY);

  filterButtons.forEach((button) => {
    button.addEventListener('click', (evt) => {
      debouncedSetFilter(evt.target.id);
      onFilterButtonClick(evt, photos, updateThumbnails);
    });
  });
};

export { initFilters };
