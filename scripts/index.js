
// Селектор элементов поп-апа

const popupElement = document.querySelector('.popup');
const popupButtonCloseElement = popupElement.querySelector('.popup__button-close');
const popupProfileEditbuttonElement = document.querySelector('.profile__editbutton');

// Селектор элементов поп-апа
const formElement = document.querySelector('.popup__container')
let nameInput = formElement.querySelector('.popup__input_info_name')
let jobInput = formElement.querySelector('.popup__input_info_job')
const popupButtonSaveElement = formElement.querySelector('.popup__button-save');
// Селектор элементов профиля
const profilElement = document.querySelector('.profile');
let nameProfil = profilElement.querySelector('.profile__name')
let jobProfil = profilElement.querySelector('.profile__title')


// Открытие-закрытие поп-апа
const openPopup = function() {
    popupElement.classList.add('popup_is-opened');
    nameInput.value = nameProfil.textContent;
    jobInput.value = jobProfil.textContent;
}
const closePopup = function() {
    popupElement.classList.remove('popup_is-opened');
}

popupProfileEditbuttonElement.addEventListener('click', openPopup);
popupButtonCloseElement.addEventListener('click', closePopup);

// Редактирование и перезапись полей имени и информации профиля



// Функиця замены имени и информации профиля
function formSubmitHandler (evt) {
    evt.preventDefault(); 
    
        nameProfil.textContent = nameInput.value;
        jobProfil.textContent = jobInput.value;
        closePopup();
    }  
   

formElement.addEventListener('submit', formSubmitHandler); 

// Попап добавления карточки
// Селектор элементов поп-апа для карточки

const popupInsertElement = document.querySelector('.popup-element');
const popupInsertButtonCloseElement = popupInsertElement.querySelector('.popup-element__button-close');
const popupInsertAddbuttonElement = document.querySelector('.profile__addbutton');

// Селектор элементов поп-апа для карточки
const formInsertElement = document.querySelector('.popup-element__container');
const popupInsertButtonSaveElement = formInsertElement.querySelector('.popup-element__button-save');


// Открытие-закрытие поп-апа для карточки
const openInsertPopup = function() {
    popupInsertElement.classList.add('popup-element_is-opened');

}
const closeInsertPopup = function() {
    popupInsertElement.classList.remove('popup-element_is-opened');
}

popupInsertAddbuttonElement.addEventListener('click', openInsertPopup);
popupInsertButtonCloseElement.addEventListener('click', closeInsertPopup);


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

const Elements = document.querySelector('.elements');
const elementTemplate = document.querySelector('.element-template');


function createCard (element) {

  const el = elementTemplate.content.cloneNode(true).children[0];

  el.querySelector('.element__name').textContent = element.name;
  el.querySelector('.element__photo').alt = element.name;
  el.querySelector('.element__photo').src = element.link;
  Elements.prepend(el);

  const popupImageOpenElement = document.querySelector('.element__photo');
  popupImageOpenElement.addEventListener('click', openImagePopup);

  const DeleteButton = Elements.querySelector('.element__delete');
  DeleteButton.addEventListener("click", DeleteElement);

  Elements.querySelector('.element__like').addEventListener('click', LikeElement);
}

initialCards.forEach(createCard);


// Функия Лайк

function LikeElement  (evt) {
  evt.target.classList.toggle('element__like_active');
  }
  
// Функция Удаление карточки
  
  
  function DeleteElement (event) {
  const target = event.target;
  const ElementCurrent = target.closest(".element");
  ElementCurrent.remove();
  }

// Функиця добавление каточки
function formInsertSubmitHandler (evt) {
  evt.preventDefault(); 
  const cardNameInput = document.querySelector('.popup-element__input_info_name').value;
  const cardLinkInput = document.querySelector('.popup-element__input_info_link').value;
  
  createCard({name: cardNameInput, link: cardLinkInput});
  
  closeInsertPopup();
  
  }  
 

  formInsertElement.addEventListener('submit', formInsertSubmitHandler); 


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
    popupImageElement.classList.add('popup-image_is-opened');

}
function closeImagePopup () {
    popupImageElement.classList.remove('popup-image_is-opened');
}


popupImageButtonCloseElement.addEventListener('click', closeImagePopup);

 
