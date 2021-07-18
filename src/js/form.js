;(function () {

const form = document.querySelector('#form-order');
const sendButton = document.querySelector('#send');
const overlayForm = document.querySelector('#overlay-form');
const formMessadge = document.querySelector('#form-messadge');
const closeButton = document.querySelector('#overlay-form-button');






function validateForm(form) {
  let valid = true;

  if (!validate(form.elements.name)) {
    valid = false;
  }

  if (!validate(form.elements.phone)) {
    valid = false;
  }

  if (!validate(form.elements.comment)) {
    valid = false;
  }
  return valid;
};

function validate(elem) {
  if (elem.value.length < 1) {
    elem.style.border = "3px solid red";
    elem.nextElementSibling.classList.add('form__error--active');
    elem.nextElementSibling.textContent = 'Заполните это поле!';
    return false;
  };
  if (elem.value.length < 3) {
    elem.style.border = "3px solid red";
    elem.nextElementSibling.classList.add('form__error--active');
    elem.nextElementSibling.textContent = 'Введите больше символов!';
    return false;

  } else {
    elem.style.border = "3px solid transparent";
    elem.nextElementSibling.classList.remove('form__error--active');
    elem.nextElementSibling.textContent = '';
    return true;
  };
};


sendButton.addEventListener('click', e => {
  e.preventDefault();

  if (validateForm(form)) {

    const data = {
      name: form.name.value,
      phone: form.phone.value,
      comment: form.comment.value,
      to: 'test@mail.com',
    };

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.send(JSON.stringify(data));
    xhr.addEventListener('load', () => {

      // body.classList.add('locked');
      overlayForm.classList.add('overlay-form--active');

      formMessadge.textContent = xhr.response.message;
      const messadgeStatus = xhr.response.status;

      if (messadgeStatus === 1) {
        form.reset();
      };
    });

    closeButton.addEventListener('click', e => {
      e.preventDefault();

      // body.classList.remove('locked');
      overlayForm.classList.remove('overlay-form--active');

    });
  }
});

})()