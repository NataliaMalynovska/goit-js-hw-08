import throttle  from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';
const formData = {};
const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
};
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onDataInput, 500));

popularInput();

function onDataInput (e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function popularInput(){
    const saveData = localStorage.getItem(STORAGE_KEY);
    const parseData = JSON.parse(saveData);

    if(parseData.email){
    refs.input.value = parseData.email;
}
    if(parseData.message) {
refs.textarea.value = parseData.message;
}
}

function onFormSubmit(e){
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
}


