const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

// Для створення елементів галереї є масив обє'ктів. Кожний об'єкт являє собою один елемент галереї.
// preview — посилання на маленьку версію зображення для картки галереї
// original — посилання на велику версію зображення для модального вікна
// description — текстовий опис зображення, для атрибута alt малого зображення та підпису великого зображення в модалці.

// В атрибуті src тега <img> вказуємо посилання на маленьку версію зображення (preview).
// Для атрибута alt викор опис зображення(description).
// Посилання на велике зображення повинно зберігатися в data-атрибуті source на елементі <img>, і вказуватися в href посилання.
// зображення огорнуте посиланням, у якого атрибут href вказує на шлях до файлу(original) з зображенням. 
// Отже клік по ньому може викликати завантаження зображення на комп'ютер користувача. Заборони цю поведінку за замовчуванням.


// 3. створити і вставити розмітку
const galleryList = document.querySelector('.gallery');
if (!galleryList) {console.log('error');}

const galleryMarkup = images
  .map(({ preview, original, description }) => {
    return `<li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img
          class="gallery-image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`;
  })
  .join('');

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);  //вставити розмітку

// 5. делегування подій
galleryList.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();  //заборона дефолтного завантаження браузером

  const isImage = event.target.classList.contains('gallery-image');
  if (!isImage) return;

  const largeImageURL = event.target.dataset.source;
  openModal(largeImageURL);
}

//  7. відкрити модалку через basicLightbox.create
function openModal(imageUrl) {
  const instance = basicLightbox.create(`<img src="${imageUrl}" width="800" height="600">`);
  instance.show();
}
