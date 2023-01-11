export default class Card {

	constructor(data, selectorTemplate, openImagePopup) {
		this.data = data;
		this.selectorTemplate = selectorTemplate;
		this.openImagePopup = openImagePopup;
	}

	createCard() {
		this._elementTemplate = document.querySelector(this.selectorTemplate).content;
		this._cardTemplate = this._elementTemplate.querySelector('.element');
		this._el = this._cardTemplate.cloneNode(true);
		this._elementPhoto = this._el.querySelector('.element__photo');
		this._elementName = this._el.querySelector('.element__name');
		this._elementLike = this._el.querySelector('.element__like');
		this._elementDelete = this._el.querySelector('.element__delete');

		this._elementName.textContent = this.data.name;
		this._elementPhoto.alt = this.data.name;
		this._elementPhoto.src = this.data.link;

		this._setEventCardListeners();

		return this._el;
	}

	_setEventCardListeners() {
		this._elementLike.addEventListener('click', this._likeElement);
		this._elementDelete.addEventListener("click", this._deleteElement);
		this._elementPhoto.addEventListener('click', this.openImagePopup);
	}

	// Функия Лайк
	_likeElement = () => {
		this._elementLike.classList.toggle('element__like_active');
	}

	// Функция Удаление карточки
	_deleteElement = () => {
		this._el.remove();
	}

}