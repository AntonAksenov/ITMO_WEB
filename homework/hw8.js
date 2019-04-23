// 8.1
document.forms[0].addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(event);

    let fieldset = document.createElement("fieldset");

    let authorImg = document.createElement("img");
    authorImg.setAttribute('src', 'img/1.jpg');

    let authorName = document.createElement("div");
    authorName.innerText = 'Александр';

    let commentDate = document.createElement("div");
    let date = new Date();
    commentDate.innerText = date.getDay() + "." + date.getMonth() + "." + date.getFullYear();

    let commentText = document.createElement("div");
    commentText.innerText = event.originalTarget[1].value;

    document.getElementById('comments')
        .appendChild(fieldset);
    fieldset.appendChild(authorImg);
    fieldset.appendChild(authorName);
    fieldset.appendChild(commentDate);
    fieldset.appendChild(commentText);
});