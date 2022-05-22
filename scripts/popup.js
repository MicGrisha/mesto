const popupOpenBtn = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const popupCloseBtn = document.querySelector(".popup__close");

function opendPopup(popupObject) {
  popupObject.classList.add("popup_opened");
  nameInput.value = profileName.textContent;
  jobInput.value = profileData.textContent;
}
function closePopup(popupObject) {
  popupObject.classList.remove("popup_opened");
}

popupOpenBtn.addEventListener("click", () => opendPopup(popup));

popupCloseBtn.addEventListener("click", () => closePopup(popup));


let formElement = document.querySelector(".popup__container");
let nameInput = document.querySelector("#name");
let jobInput = document.querySelector("#text");
let profileName = document.querySelector(".profile__name");
let profileData = document.querySelector(".profile__data");

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameInput.value;
  jobInput.value;
  profileName.textContent = nameInput.value;
  profileData.textContent = jobInput.value;
  closePopup(popup);
}
formElement.addEventListener("submit", formSubmitHandler);
