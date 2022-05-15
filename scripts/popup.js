const popupOpenBtn = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const popupCloseBtn = document.querySelector(".popup__close");

popupOpenBtn.addEventListener("click", function (event) {
  togglePopup(popup);
});

popupCloseBtn.addEventListener("click", function (event) {
  togglePopup(popup);
});

popup.addEventListener("click", function (event) {
  if (event.target == event.currentTarget) {
    togglePopup(popup);
  }
});

function togglePopup(popupObject) {
  popupObject.classList.toggle("popup_opened");
}


let formElement = document.querySelector ('.popup__container');
let nameInput = document.querySelector('#name')
let jobInput = document.querySelector('#text')

function formSubmitHandler (evt) {
    evt.preventDefault();
    document.getElementById('name').value
    document.getElementById('text').value
    document.querySelector('.profile__name').textContent = document.getElementById('name').value;
    document.querySelector('.profile__data').textContent = document.getElementById('text').value;
}
formElement.addEventListener('submit', formSubmitHandler); 


formElement.addEventListener("click", function (event) {
  if (event.target == event.currentTarget) {
    togglePopup(popup);
  }
});


