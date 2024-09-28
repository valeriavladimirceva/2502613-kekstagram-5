const COUNT_PHOTOS = 25;
const ID_PHOTOS = Array.from({length: COUNT_PHOTOS}, (_,index) => index + 1);
const URL_PHOTOS = function () {
  const adress = [];
  for(let i = 1; i <= COUNT_PHOTOS; i++) {
    adress.push(`photos/${i}.jpg`);
  }
  return adress;
};
const DESCRIPTIONS_PHOTOS = ['Вся красота мира в одной картинке', 'Сегодня — самый лучший день', 'Сделано объективом и любовью',
  'Остановить время в одном кадре', 'Море — лучший лекарь для усталой души', 'Когда слова не нужны, достаточно фотографии',
  'Счастье в каждом кадре', 'Будьте героями своих собственных историй.', 'Каждый раз, когда ты думаешь делать или нет — делай.',
  'Будь собой, никто не сможет сделать это лучше', 'Улыбайтесь шире, смейтесь чаще', 'Больше жизни, меньше беспокойства',
  'Было сложно, но зато как вышло!', 'Просто оставлю это здесь.', 'Просто красивое фото.', 'Без слов.',
  'Хочется стереть память, чтобы увидеть это снова.', 'Как прекрасен этот мир.', 'Вперед к новым вершинам.',
  'Все в ваших руках!', 'Не ждите чуда, чудите сами.', 'Сегодня, тот самый день.', 'Как долго мы делали этот кадр? Ваши предложения.',
  'А как выглядит ваш идеальный день?', 'Красиво жить не запретишь.'];
const LIKES_PHOTOS = Array.from({length: 185},(_, index) => index + 15);
const ID_COMMENTS = Array.from({length: 200}, (_, index) => index + 1);
const AVATARS_COMMENTS = function () {
  const avatarAll = [];
  for(let i = 1; i <= 6; i++) {
    avatarAll.push(`img/avatar-${i}.svg`);
  }
  return avatarAll;
};
const MESSAGES_COMMENTS = ['Всё отлично!', 'В целом всё неплохо. Но не всё.',
  'когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const NAMES_COMMENTS = ['Артем', 'Тимофей', 'Иван', 'Михаил', 'Елизавета', 'Светлана', 'Мария', 'Юлия', 'Екатерина', 'Илья', 'Дарья', 'Валерия','Егор',
  'Александр', 'Никита', 'Надежда', 'Анна', 'Степан', 'Наталья', 'Алексей', 'Софья', 'Кристина', 'Семен', 'Максим', 'Денис', 'Рита', 'Ольга',
  'Алиса', 'Полина', 'Дмитрий'];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createComments = function() {
  const arrayComments = [];
  const count = getRandomInteger(0, 30);
  for(let i = 0; i < count; i++) {
    const objComment = {
      id:getRandomArrayElement(ID_COMMENTS),
      avatar: getRandomArrayElement(AVATARS_COMMENTS()),
      message: getRandomArrayElement(MESSAGES_COMMENTS),
      name: getRandomArrayElement(NAMES_COMMENTS)
    };
    arrayComments.push(objComment);
  }
  return arrayComments;
};

const createDescriptionPhotots = () => ({
  id: getRandomArrayElement(ID_PHOTOS),
  url: getRandomArrayElement(URL_PHOTOS),
  description: getRandomArrayElement(DESCRIPTIONS_PHOTOS),
  likes: getRandomArrayElement(LIKES_PHOTOS),
  comments: createComments()
});

const descriptionPhotots = Array.from({length: COUNT_PHOTOS}, createDescriptionPhotots);
console.log(descriptionPhotots);
