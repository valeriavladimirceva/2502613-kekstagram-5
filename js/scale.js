const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;

const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlValue = document.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview img');

const scaleImage = (value) => {
  imgUploadPreview.style.transform = `scale(${value / 100})`;
  scaleControlValue.value = `${value}%`;
};

const onSmallerControlClick = () => {
  scaleImage(Math.max(parseInt(scaleControlValue.value, 10) - SCALE_STEP, MIN_SCALE));
};

const onBiggerControlClick = () => {
  scaleImage(Math.min(parseInt(scaleControlValue.value, 10) + SCALE_STEP, MAX_SCALE));
};

const setScale = () => scaleImage(DEFAULT_SCALE);

const addListener = () => {
  scaleControlSmaller.addEventListener('click', onSmallerControlClick);
  scaleControlBigger.addEventListener('click', onBiggerControlClick);
};

const removeListener = () => {
  scaleControlSmaller.removeEventListener('click', onSmallerControlClick);
  scaleControlBigger.removeEventListener('click', onBiggerControlClick);
};

const init = () => {
  setScale();
  addListener();
};

const reset = () => {
  setScale();
  removeListener();
};

export { init, reset };
