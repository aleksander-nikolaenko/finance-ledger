export const sendingForm = () => {
  const formEl = document.querySelector('.contact__form');
  const errorMessageEl = document.querySelector('.form__error-message');

  const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const emailValue = form.elements.userEmail.value;
    if (!emailValue) {
      errorMessageEl.textContent = 'Email is required field';
      errorMessageEl.classList.remove('visually-hidden');
      return;
    }
    if (!emailValue.match(EMAIL_REGEX)) {
      errorMessageEl.textContent = 'Enter valid email please';
      errorMessageEl.classList.remove('visually-hidden');
      return;
    }
    errorMessageEl.textContent = '';
    errorMessageEl.classList.add('visually-hidden');
    form.submit();
  };

  formEl.addEventListener('submit', handleSubmit);
};
