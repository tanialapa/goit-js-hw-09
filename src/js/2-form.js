
const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');


let formData = {
  email: '',
  message: '',
};
populateForm();

form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);


function onFormInput() {
  formData = Object.fromEntries(new FormData(form));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  formData = Object.fromEntries(new FormData(form));

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData = { email: '', message: '' };
}

function populateForm() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return;
    const data = JSON.parse(saved);
    
  if (data.email) form.elements.email.value = data.email;
  if (data.message) form.elements.message.value = data.message;

  formData.email = data.email ? data.email : '';
  formData.message = data.message ? data.message : '';
}
