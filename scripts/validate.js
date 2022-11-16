// ВАЛИДАИЯ ФОРМ

function chekImputValidity (inputElement) {
    const isValid = inputElement.validity.valid;
    const formSection = inputElement.closest('.popup__form-section');
    const errorElement = formSection.querySelector(selectors.inputErrorClass);
    const inputErrorLine = formSection.querySelector(selectors.inputSelector);

    if (isValid) {
      hideInputError(errorElement, inputErrorLine);
      
    }
    else {
      showInputError(errorElement, inputElement.validationMessage, inputErrorLine);
      
    }
  }
  
  function showInputError (errorElement, errorMessage, inputErrorLine) {
    errorElement.textContent = errorMessage;
    errorElement.classList.add(selectors.errorClass);
    inputErrorLine.classList.add(selectors.imputErrorLine);
    
  }
  
  function hideInputError (errorElement, inputErrorLine) {
    errorElement.textContent = '';
    errorElement.classList.remove(selectors.errorClass);
    inputErrorLine.classList.remove(selectors.imputErrorLine);
    
  }
  
  const toggleButtonState = (inputList, buttonElement) => {
    const hasInvalidInput = inputList.some(inputElement => !inputElement.validity.valid);
  
    if (hasInvalidInput) {
        buttonElement.setAttribute("disabled", true);
        buttonElement.classList.add(selectors.inactiveButtonClass);
      } else {
        buttonElement.removeAttribute("disabled");
        buttonElement.classList.remove(selectors.inactiveButtonClass);
      }
  };
  
  function setEventListeners (formElement) {
  
    formElement.addEventListener('submit', (event) => {
          event.preventDefault();
      })
  
  
    const inputList = Array.from(formElement.querySelectorAll(selectors.inputSelector));
    const submitButton = formElement.querySelector(selectors.submitButtonSelector);
  
    toggleButtonState(inputList, submitButton);
    
    inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        chekImputValidity(inputElement);
        toggleButtonState(inputList, submitButton);
      })
    })
  }
  
  function enableValidation (selectors) {
    const formList = document.querySelectorAll(selectors.formSelector);
  formList.forEach(formElement => {
    setEventListeners(formElement, selectors);
  })
  }
  
  const selectors = {
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    imputErrorLine: 'popup__input_type_error',
    submitButtonSelector: '.popup__button-save',
    inactiveButtonClass: 'popup__button-save_inactive',
    inputErrorClass: '.popup__input-error', 
    errorClass: 'popup__input-error_active'
    
  }
