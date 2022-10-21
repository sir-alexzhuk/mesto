// Селектор элементов поп-апа

const popupElement = document.querySelector('.popup');
const popupButtonCloseElement = popupElement.querySelector('.popup__button-close');
const popupProfileEditbuttonElement = document.querySelector('.profile__editbutton');
// Открытие-закрытие поп-апа
const openPopup = function() {
    popupElement.classList.add('popup_is-opened');
}
const closePopup = function() {
    popupElement.classList.remove('popup_is-opened');
}

popupProfileEditbuttonElement.addEventListener('click', openPopup);
popupButtonCloseElement.addEventListener('click', closePopup);

// Редактирование и перезапись полей имени и информации профиля

// Селектор элементов поп-апа
let formElement = document.querySelector('.popup__container')
let nameInput = formElement.querySelector('.popup__name')
let jobInput = formElement.querySelector('.popup__job')
const popupButtonSaveElement = formElement.querySelector('.popup__button-save');
// Селектор элементов профиля
const profilElement = document.querySelector('.profile');
let nameProfil = profilElement.querySelector('.profile__name')
let jobProfil = profilElement.querySelector('.profile__title')

// Функиця замены имени и информации профиля
function formSubmitHandler (evt) {
    evt.preventDefault(); 
    if (nameInput.value && jobInput !== '') {
        nameProfil.textContent = nameInput.value;
        jobProfil.textContent = jobInput.value;
        closePopup();
    }  
    else {

        closePopup();
    }

}

formElement.addEventListener('submit', formSubmitHandler); 