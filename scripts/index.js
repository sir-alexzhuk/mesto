
// Селектор элементов поп-апа
const popup = document.querySelector('.popup');
const popupProfileElement = document.querySelector('.popup-profile');
const popupProfileButtonCloseElement = popupProfileElement.querySelector('.popup__button-close');
const popupProfileEditButtonElement = document.querySelector('.profile__editbutton');

// Селектор элементов поп-апа
const formProfileElement = document.querySelector('.popup__container')
const nameInput = formProfileElement.querySelector('.popup__input_info_name')
const jobInput = formProfileElement.querySelector('.popup__input_info_job')
const popupProfileButtonSaveElement = formProfileElement.querySelector('.popup__button-save');
// Селектор элементов профиля
const profileElement = document.querySelector('.profile');
const nameProfil = profileElement.querySelector('.profile__name')
const jobProfil = profileElement.querySelector('.profile__title')


function openPopup (el) {
  el.classList.add('popup_is-opened');
}

function closePopup (el) {
  el.classList.remove('popup_is-opened');
}


// Открытие-закрытие поп-апа
const openProfilePopup = function() {
    nameInput.value = nameProfil.textContent;
    jobInput.value = jobProfil.textContent;
    openPopup(popup);
}

const closeProfilePopup = function() {
  closePopup(popup);
}

popupProfileEditButtonElement.addEventListener('click', openProfilePopup);
popupProfileButtonCloseElement.addEventListener('click', closeProfilePopup);

// Редактирование и перезапись полей имени и информации профиля



// Функиця замены имени и информации профиля
function formProfileSubmitHandler (evt) {
    evt.preventDefault(); 
    nameProfil.textContent = nameInput.value;
    jobProfil.textContent = jobInput.value;
    closeProfilePopup();
    }  
   

formProfileElement.addEventListener('submit', formProfileSubmitHandler); 

// Попап добавления карточки
// Селектор элементов поп-апа для карточки

const popupAddElement = document.querySelector('.popup-element');
const popupAddButtonCloseElement = popupAddElement.querySelector('.popup-element__button-close');
const addNewCardButton = document.querySelector('.profile__addbutton');

// Селектор элементов поп-апа для карточки
const formAddElement = document.querySelector('.popup-element__container');
const popupAddButtonSaveElement = formAddElement.querySelector('.popup-element__button-save');


// Открытие-закрытие поп-апа для карточки
const openAddPopup = function() {
  openPopup(popupAddElement);

}
const closeAddPopup = function() {
  closePopup(popupAddElement);
}

addNewCardButton.addEventListener('click', openAddPopup);
popupAddButtonCloseElement.addEventListener('click', closeAddPopup);


// Разметка и первичная подгрузка карточек 

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const elements = document.querySelector('.elements');
const elementTemplate = document.querySelector('.element-template').content;
const cardTemplate = elementTemplate.querySelector('.element');


function createCard (element) {

  const el = cardTemplate.cloneNode(true);

  el.querySelector('.element__name').textContent = element.name;
  el.querySelector('.element__photo').alt = element.name;
  el.querySelector('.element__photo').src = element.link;
  setEventCardListeners(el);
  return el;
}

function setEventCardListeners (el) {
  const likeButton = el.querySelector('.element__like');
  likeButton.addEventListener('click', likeElement);

  const deleteButton = el.querySelector('.element__delete');
  deleteButton.addEventListener("click", deleteElement);

  const popupImageOpenElement = el.querySelector('.element__photo');
  popupImageOpenElement.addEventListener('click', openImagePopup);
}

function addCard (element) {
  const el = createCard(element);
  elements.prepend(el)
}

initialCards.forEach(addCard);



// Функия Лайк

function likeElement  (evt) {
  evt.target.classList.toggle('element__like_active');
  }
  
// Функция Удаление карточки

  
  function deleteElement (event) {
  const target = event.target;
  const elementCurrent = target.closest(".element");
  elementCurrent.remove();
  }

// Функиця добавление каточки
function formAddSubmitHandler (evt) {
  evt.preventDefault(); 
  const cardNameInput = document.querySelector('.popup-element__input_info_name').value;
  const cardLinkInput = document.querySelector('.popup-element__input_info_link').value;
  
  addCard({name: cardNameInput, link: cardLinkInput});
  
  closeAddPopup();
  
  }  
 

  formAddElement.addEventListener('submit', formAddSubmitHandler); 


// Увеличение фото


// Селектор элементов поп-апа для фото

const popupImageElement = document.querySelector('.popup-image');
const popupImageButtonCloseElement = popupImageElement.querySelector('.popup-image__button-close');
const popupImageTitleElement = popupImageElement.querySelector('.popup-image__title');


// Открытие-закрытие поп-апа для фото
function openImagePopup (evt) {
    document.querySelector('.popup-image__zoom').alt = evt.target.alt;
    document.querySelector('.popup-image__zoom').src = evt.target.src;
    document.querySelector('.popup-image__title').textContent = evt.target.alt;
    openPopup(popupImageElement);

}
function closeImagePopup () {
  closePopup(popupImageElement);
}


popupImageButtonCloseElement.addEventListener('click', closeImagePopup);

 
