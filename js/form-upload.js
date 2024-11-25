import { init as initScale, reset as resetScale } from './scale.js';
import { init as initSlider, reset as resetSlider } from './effects.js';

const MAX_HASHTAGS_COUNT = 5;
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const ErrorText = {
  INVALID_COUNT: `Нельзя использовать больше ${MAX_HASHTAGS_COUNT} хэш-тэгов`,
  NOT_UNIQUE: 'Хэш-тэги должны быть уникальными',
  INVALID_PATTERN: 'Хэш-тег должен начинаться с # и содержать только буквы и цифры.'
};

const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadCancel = document.querySelector('.img-upload__cancel');
const textHashtags = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');
const body = document.body;

const pristine = new Pristine (imgUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
});

const showForm = () => {
  initScale();
  initSlider();
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeyDown);
};

const hideForm = () => {
  imgUploadForm.reset();
  pristine.reset();
  resetScale();
  resetSlider();
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeyDown);
};

const isTextFieldFocused = () => document.activeElement === textHashtags || document.activeElement === textDescription;

const onFileInputChange = () => showForm();

const onCancelButtonClick = () => hideForm();

function onDocumentKeyDown(evt) {
  if (evt.key === 'Escape' && !isTextFieldFocused()) {
    evt.preventDefault();
    hideForm();
  }
}
const normalizeTags = (tagString) => tagString.trim().split(/\s+/).filter((tag) => tag.length > 0);

const validateHashtagsLogic = (value) => {
  const tags = normalizeTags(value);
  const isValidCount = tags.length <= MAX_HASHTAGS_COUNT;
  const isValidTags = tags.every((tag) => VALID_SYMBOLS.test(tag));
  const isUniqueTags = tags.length === new Set(tags.map((tag) => tag.toLowerCase())).size;

  return { isValidCount, isValidTags, isUniqueTags };
};

const validateHashtags = (value) => {
  const { isValidCount, isValidTags, isUniqueTags } = validateHashtagsLogic(value);
  return isValidCount && isValidTags && isUniqueTags;
};

const getHashtagErrorMessage = (value) => {
  const { isValidCount, isValidTags, isUniqueTags } = validateHashtagsLogic(value);

  if (!isValidCount) {
    return ErrorText.INVALID_COUNT;
  }
  if (!isValidTags) {
    return ErrorText.INVALID_PATTERN;
  }
  if (!isUniqueTags) {
    return ErrorText.NOT_UNIQUE;
  }
  return true;
};

pristine.addValidator(textHashtags, validateHashtags, getHashtagErrorMessage);

imgUploadForm.addEventListener('change', onFileInputChange);

imgUploadCancel.addEventListener('click', onCancelButtonClick);
