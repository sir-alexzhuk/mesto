export default class FormValidator {

	constructor(configSelectors, formNode) {
		this.configSelectors = configSelectors;
		this.formNode = formNode;
	}

	enableValidation() {
		this._setEventListeners();
	}

	_setEventListeners() {
		this.formNode.addEventListener('submit', (event) => {
			event.preventDefault();
		});

		this._inputNodes = Array.from(this.formNode.querySelectorAll(this.configSelectors.inputSelector));
		this._submitButtonNode = this.formNode.querySelector(this.configSelectors.submitButtonSelector);

		this._toggleButtonState(this._inputNodes, this._submitButtonNode);

		this._inputNodes.forEach(inputNode => {

			const wrapperInputNode = inputNode.closest(this.configSelectors.popupFormSection);
			const errorElementNode = wrapperInputNode.querySelector(this.configSelectors.inputErrorClass);
			const inputErrorLineNode = wrapperInputNode.querySelector(this.configSelectors.inputSelector);

			inputNode.addEventListener('input', () => {
				this._checkInputValidity({wrapperInputNode, errorElementNode, inputErrorLineNode, inputNode});
				this._toggleButtonState();
			});
		});
	}

	_toggleButtonState() {
		const hasInvalidInput = this._inputNodes.some(inputNode => !inputNode.validity.valid);

		if (hasInvalidInput) {
			this._submitButtonNode.setAttribute("disabled", true);
			this._submitButtonNode.classList.add(this.configSelectors.inactiveButtonClass);
		} else {
			this._submitButtonNode.removeAttribute("disabled");
			this._submitButtonNode.classList.remove(this.configSelectors.inactiveButtonClass);
		}
	}

	_checkInputValidity({errorElementNode, inputErrorLineNode, inputNode}) {
		const isValid = inputNode.validity.valid;

		if (isValid) {
			this._hideInputError(errorElementNode, inputErrorLineNode);
		}
		else {
			this._showInputError(errorElementNode, inputNode.validationMessage, inputErrorLineNode);
		}
	}

	_hideInputError(errorElementNode, inputErrorLineNode) {
		errorElementNode.textContent = '';
		errorElementNode.classList.remove(this.configSelectors.errorClass);
		inputErrorLineNode.classList.remove(this.configSelectors.imputErrorLine);
	}

	_showInputError(errorElementNode, errorMessage, inputErrorLineNode) {
		errorElementNode.textContent = errorMessage;
		errorElementNode.classList.add(this.configSelectors.errorClass);
		inputErrorLineNode.classList.add(this.configSelectors.imputErrorLine);
	}

}