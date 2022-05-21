const popupOpenBtn = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const popupCloseBtn = document.querySelector(".popup__close");

popupOpenBtn.addEventListener("click", () => opendPopup(popup));

popupCloseBtn.addEventListener("click", () => closePopup(popup));

function opendPopup(popupObject) {
  popupObject.classList.add("popup_opened");
}
function closePopup(popupObject) {
  popupObject.classList.remove("popup_opened");
}


let formElement = document.querySelector ('.popup__container');
let nameInput = document.querySelector('#name');
let jobInput = document.querySelector('#text');
let profileName = document.querySelector('.profile__name');
let profileData = document.querySelector('.profile__data');

function formSubmitHandler (evt) {
    evt.preventDefault();
    let nameInput = document.getElementById('name').value
    let textInput = document.getElementById('text').value
    let  saveNameInput = document.querySelector('.profile__name').textContent = document.getElementById('name').value;
    let  savetextInput = document.querySelector('.profile__data').textContent = document.getElementById('text').value;
    closePopup(popup)
}
formElement.addEventListener('submit', formSubmitHandler); 





