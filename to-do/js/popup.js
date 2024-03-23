var openPopup = () => {
  document.getElementById('popup').style = "opacity: 1; visibility: inherit";
}

var closePopup = () => {
  var popupWrapper = document.querySelector('.popup-wrapper');
  popupWrapper.style = 'opacity: 0; visibility: hidden';
}

var closePopupSecond = () => {
  var popupWrapperSecond = document.querySelector('.popup-wrapper-second');
  popupWrapperSecond.style = 'opacity: 0; visibility: hidden';
}
