// 8.1
document.forms.comments.addEventListener("submit", function (event) {
    event.preventDefault();

    let fieldset = document.createElement("fieldset");

    let authorImg = document.createElement("img");
    authorImg.setAttribute('src', '../img/1.jpg');

    let authorName = document.createElement("div");
    authorName.innerText = 'Александр';

    let commentDate = document.createElement("div");
    let date = new Date();
    commentDate.innerText = date.getDay() + "." + date.getMonth() + "." + date.getFullYear();

    let commentText = document.createElement("div");
    commentText.innerText = event.originalTarget[1].value;

    document.getElementById('comments').appendChild(fieldset);
    fieldset.appendChild(authorImg);
    fieldset.appendChild(authorName);
    fieldset.appendChild(commentDate);
    fieldset.appendChild(commentText);
});

// 8.2
let form = document.forms.feedback;

function paint(el) {
    form.style.background = el.value;
}

form.elements.color.forEach(el => {
    el.addEventListener('click', () => {
        paint(el);
    });
    if (el.checked) {
        paint(el);
    }
});

let languageArray = form.elements['language'];
languageArray.forEach(el => {
    el.addEventListener('click', () => {
        console.log('Нажаты:');
        languageArray.forEach(lang => {
            if (lang.checked) {
                console.log('\t' + lang.value);
            }
        });
    });
});

form.elements.dopInfoCheck.addEventListener('click', () => {
    form.elements.dopInfoText.toggleAttribute('disabled');
});




