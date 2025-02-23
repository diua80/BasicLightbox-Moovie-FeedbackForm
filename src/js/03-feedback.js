import throttle from 'lodash.throttle';
const STORAGE_KEY = "feedback-form-state";
const refs = {
    email: document.querySelector('input[name="email"]'),
    message: document.querySelector('textarea[name="message"]'),
    form: document.querySelector(".feedback-form"),
    formSubmit: document.querySelector("button"),
}
populateFormFields();
refs.form.addEventListener("submit", onFormSubmit);
refs.form.addEventListener("input", throttle(writeToLocalStorage, 500));

function populateFormFields(){
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        const { email, message } = JSON.parse(savedData);
        refs.email.value = email || "";
        refs.message.value = message || "";
    }
}

function writeToLocalStorage() {
    const obj = {
        email: refs.email.value.trim(),
        message: refs.message.value.trim(),
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
}
function onFormSubmit() {
    if (!refs.email.value || !refs.message.value) {
        alert("Fill out all fields!");
        return;
    } 
    console.log({ email: refs.email.value, message: refs.message.value });
    localStorage.removeItem(STORAGE_KEY);
    refs.form.reset();
}