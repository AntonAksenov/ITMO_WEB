function FormValidator(form) {
    this._form = form;
    this._form.addEventListener('submit', this.some.bind(this));
    this._form.addEventListener('change', this.some.bind(this));
    this._errors = {};
}

FormValidator.prototype.addRules = function (rules) {
    this._rules = rules.rules;
    this._messages = rules.messages;
};

FormValidator.prototype.some = function (event) {
    event.preventDefault();
    console.log(JSON.stringify(formValidator));
    for (let i = 0; i < this._form.length; i++) {
        if (this._rules.hasOwnProperty(this._form[i].name)) {
            if (!this._rules[this._form[i].name].test(this._form[i].value)) {
                if (this._errors[this._form[i].name] === undefined) {
                    let error = document.createElement("div");
                    error.innerText = this._messages[this._form[i].name];
                    error.classList.add("error");
                    this._errors[this._form[i].name] = error;
                    this._form.appendChild(error);
                    this._form[i].classList.add("error_selection");
                }
            } else {
                if (this._errors[this._form[i].name] !== undefined) {
                    this._form[i].classList.remove("error_selection");
                    this._form.removeChild(this._errors[this._form[i].name]);
                    delete this._errors[this._form[i].name];
                }
            }
        }
    }
};


let form = document.forms.form;

let formValidator = new FormValidator(form);

formValidator.addRules({
    rules: {
        login: /^(?=.{6,})([a-zA-Z0-9_\-]+)$/,
        pwd: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})([a-zA-Z0-9_\-]+)$/
    },
    messages: {
        login: "Логин должен быть не короче 6 символов,\n" +
            "может содержать только цифры,\n" +
            "строчные и прописные латинские буквы,\n" +
            "а так же символы '_' и '-'",
        pwd: "Пароль должен быть не короче 8 символов,\n" +
            "содержать хотя бы одну цифру,\n" +
            "хотя бы одну строчную латинскую букву,\n" +
            "хотя бы одну прописную латинскую букву,\n" +
            "может содержать только цифры,\n" +
            "строчные и прописные латинские буквы,\n" +
            "а так же символы '_' и '-'"
    }
});
//
// if (formValidator.some()) {
//     console.log("Ошибок нет");
// } else {
//     console.log("Есть ошибки");
// }