import Card from "./Card.js";
import { configSelectors } from "./config.js";
import { initialCards } from "./const.js";
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";

// Селектор элементов поп-апа

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


function openPopup(el) {
	el.classList.add('popup_is-opened');
	document.addEventListener('keydown', keyHandler);
	el.addEventListener('mousedown', clickByOverlay);

}

function closePopup(el) {
	el.classList.remove('popup_is-opened');
	document.removeEventListener('keydown', keyHandler);
	el.removeEventListener('mousedown', clickByOverlay);
}


// Открытие-закрытие поп-апа
const openProfilePopup = function () {
	nameInput.value = nameProfil.textContent;
	jobInput.value = jobProfil.textContent;
	openPopup(popupProfileElement);
}

const closeProfilePopup = function () {
	closePopup(popupProfileElement);
}

popupProfileEditButtonElement.addEventListener('click', openProfilePopup);
popupProfileButtonCloseElement.addEventListener('click', closeProfilePopup);

// Редактирование и перезапись полей имени и информации профиля



// Функиця замены имени и информации профиля
function submitHandlerFormProfile(evt) {
	evt.preventDefault();
	nameProfil.textContent = nameInput.value;
	jobProfil.textContent = jobInput.value;
	closeProfilePopup();
}


formProfileElement.addEventListener('submit', submitHandlerFormProfile);

// Попап добавления карточки
// Селектор элементов поп-апа для карточки

const popupAddElement = document.querySelector('.popup-element');
const popupAddButtonCloseElement = popupAddElement.querySelector('.popup-element__button-close');
const buttonOpenPopupCard = document.querySelector('.profile__addbutton');

// Селектор элементов поп-апа для карточки
const formAddElement = document.querySelector('.popup-element__container');
const nameElementInput = formAddElement.querySelector('.popup__input_element_name');
const linkElementInput = formAddElement.querySelector('.popup__input_element_link');
const popupAddButtonSaveElement = formAddElement.querySelector('.popup__button-save');


function openformAddElementPopup() {
	popupAddButtonSaveElement.setAttribute("disabled", true);
	popupAddButtonSaveElement.classList.add('popup__button-save_inactive');
	openPopup(popupAddElement);
}

// Открытие-закрытие поп-апа для карточки


buttonOpenPopupCard.addEventListener('click', openformAddElementPopup);
popupAddButtonCloseElement.addEventListener('click', () => closePopup(popupAddElement));


// Разметка и первичная подгрузка карточек 



const sectionInstance = new Section({ 
	items: initialCards,
	renderer: createCardNode
}, '.elements');

sectionInstance.render();




function createCardNode(dataCard) {
	const card = new Card(dataCard, '.element-template', openImagePopup);
	const cardNode = card.createCard();

	return cardNode;
}

// const elements = document.querySelector('.elements');
// initialCards.forEach(createCardNode);


// Функиця добавление карточки

const cardNameInput = document.querySelector('.popup__input_element_name');
const cardLinkInput = document.querySelector('.popup__input_element_link');

function submitHandlerFormAdd(evt) {
	evt.preventDefault();

	addCard({ name: cardNameInput.value, link: cardLinkInput.value });

	closePopup(popupAddElement);

	evt.target.reset();

	
}


formAddElement.addEventListener('submit', submitHandlerFormAdd);


// Увеличение фото


// Селектор элементов поп-апа для фото

const popupImageElement = document.querySelector('.popup-image');
const popupImageButtonCloseElement = popupImageElement.querySelector('.popup-image__button-close');
const popupImageTitleElement = popupImageElement.querySelector('.popup-image__title');


// Открытие-закрытие поп-апа для фото
const popupImageZoom = document.querySelector('.popup-image__zoom');
const popupImageTitle = document.querySelector('.popup-image__title');


function openImagePopup(evt) {
	popupImageZoom.alt = evt.target.alt;
	popupImageZoom.src = evt.target.src;
	popupImageTitle.textContent = evt.target.alt;
	openPopup(popupImageElement);

}
function closeImagePopup() {
	closePopup(popupImageElement);

}


popupImageButtonCloseElement.addEventListener('click', closeImagePopup);


// Валидация

const formValidatorAddEl = new FormValidator(configSelectors, formAddElement);
formValidatorAddEl.enableValidation();

const formValidatorEditProfile = new FormValidator(configSelectors, popupProfileElement);
formValidatorEditProfile.enableValidation();

// Закрытие модальных окон кликом на оверлей и Esc

function keyHandler(evt) {
	if (evt.key === 'Escape') {
		const popupIsOpened = document.querySelector('.popup_is-opened');
		closePopup(popupIsOpened);
	}
}

function clickByOverlay(evt) {
	if (evt.target === evt.currentTarget) {
		const popupIsOpened = document.querySelector('.popup_is-opened');
		closePopup(popupIsOpened);
	}
}

