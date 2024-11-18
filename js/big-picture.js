const COMMENTS_EACH_DOWNLOAD = 5;

const bigPicture = document.querySelector('.big-picture');
const bigPictureSocial = bigPicture.querySelector('.big-picture__social');
const commentCount = bigPicture.querySelector('.social__comment-count');
const allComments = bigPicture.querySelector('.social__comments');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');

let currentCommentIndex = 0;
let currentComments = [];

const createComment = ({avatar, name, message}) => {
  const comment = commentTemplate.cloneNode(true);
  const commentPicture = comment.querySelector('.social__picture');
  commentPicture.src = avatar;
  commentPicture.alt = name;
  comment.querySelector('.social__text').textContent = message;
  return comment;
};

const showComments = () => {
  currentCommentIndex += COMMENTS_EACH_DOWNLOAD;
  if (currentCommentIndex >= currentComments.length) {
    commentsLoader.classList.add('hidden');
    currentCommentIndex = currentComments.length;
  } else {
    commentsLoader.classList.remove('hidden');
  }

  const fragment = document.createDocumentFragment();
  const commentsToShow = currentComments.slice(0, currentCommentIndex);

  commentsToShow.forEach(({avatar, name, message}) => {
    const comment = createComment({avatar, name, message});
    fragment.append(comment);
  });

  allComments.innerHTML = '';
  allComments.append(fragment);
  commentCount.textContent = `${currentCommentIndex} из ${currentComments.length} комментариев`;
};

const hideBigPictureModal = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeyDown);
  currentCommentIndex = 0;
  currentComments = [];
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
  commentsLoader.classList.remove('hidden');
  commentCount.classList.remove('hidden');
  renderBigPicture(picture);
  currentComments = picture.comments;
  showComments();
};

const onCancelButtonClick = () => {
  hideBigPictureModal();
};

const onCommentsLoaderClick = () => {
  showComments();
};

bigPictureCancel.addEventListener('click', onCancelButtonClick);
commentsLoader.addEventListener('click', onCommentsLoaderClick);

export { showBigPictureModal };
