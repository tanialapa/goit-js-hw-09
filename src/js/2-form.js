// formData = {

//     email: " ",
//     message: " "
// };
const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('textarea');

form.addEventListener('submit', onFormSubmit);
textarea.addEventListener('input', onTextAreaInput);

function onFormSubmit(event) {
    event.preventDefault();
    const form = event.target;

    const formData = Object.fromEntries(new FormData(form));
    console.log(formData);
    form.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function onTextAreaInput(event) {
    message = event.target.value;
    localStorage.setItem(STORAGE_KEY, message);

}