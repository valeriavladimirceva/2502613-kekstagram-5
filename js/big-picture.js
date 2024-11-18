const bigPicture = document.querySelector('.big-picture');
const bigPictureSocial = bigPicture.querySelector('.big-picture__social');
const commentCount = bigPicture.querySelector('.social__comment-count');
const allComments = bigPicture.querySelector('.social__comments');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');

const createComment = ({avatar, name, message}) => {
  const comment = commentTemplate.cloneNode(true);
  const commentPicture = comment.querySelector('.social__picture');
  commentPicture.src = avatar;
  commentPicture.alt = name;
  comment.querySelector('.social__text').textContent = message;
  return comment;
};

const showComments = (comments) => {
  allComments.innerHTML = '';
  const fragment = document.createDocumentFragment();
  comments.forEach(({avatar, name, message}) => {
    const comment = createComment({avatar, name, message});
    fragment.append(comment);
  });
  allComments.append(fragment);
};

const hideBigPictureModal = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeyDown);
};

function onDocumentKeyDown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideBigPictureModal();
  }
}

const renderBigPicture = ({url, likes, description}) => {
  const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
  bigPictureImg.src = url;
  bigPictureImg.alt = description;
  bigPictureSocial.querySelector('.likes-count').textContent = likes;
  bigPictureSocial.querySelector('.social__caption').textContent = description;
};

const showBigPictureModal = (picture) => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeyDown);
  commentsLoader.classList.add('hidden');
  commentCount.classList.add('hidden');

  renderBigPicture(picture);
  showComments(picture.comments);
};

const onCancelButtonClick = () => {
  hideBigPictureModal();
};

bigPictureCancel.addEventListener('click', onCancelButtonClick);

export { showBigPictureModal };
