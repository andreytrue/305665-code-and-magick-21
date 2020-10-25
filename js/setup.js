'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

var wizards = [];

// var userDialog = document.querySelector('.setup');
// userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');


var wizardCreator = function (wizardArray, wizardsAmount) {
  for (var i = 0; i < wizardsAmount; i++) {
    wizardArray[i] = {};

    wizardArray[i].name = WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)];
    wizardArray[i].surname = WIZARD_SURNAMES[Math.floor(Math.random() * WIZARD_SURNAMES.length)];
    wizardArray[i].coatColor = WIZARD_COATS[Math.floor(Math.random() * WIZARD_COATS.length)];
    wizardArray[i].eyesColor = WIZARD_EYES[Math.floor(Math.random() * WIZARD_EYES.length)];
  }
};

wizardCreator(wizards, 4);

for (var i = 0; i < wizards.length; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name + ' ' + wizards[i].surname;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  similarListElement.appendChild(wizardElement);
}

// Open & Close Settings
let setup = document.querySelector('.setup');
let setupUserName = document.querySelector('.setup-user-name');
let setupOpen = document.querySelector('.setup-open');
let setupClose = document.querySelector('.setup-close');

const onPopupEscPress = function (evt) {
  if ((evt.key === 'Escape') && evt.target !== setupUserName) {
    evt.preventDefault();
    closePopup();
  }
};

const openPopup = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

const closePopup = function () {
  setup.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

// Task 3 - 5 (Change coat, eyes color, fireball color)
let wizardSettings = document.querySelector('.setup-wizard');
let wizardAppereances = document.querySelector('.setup-wizard-appearance');
let coatColor = wizardSettings.querySelector('.wizard-coat');
let wizardEyes = wizardSettings.querySelector('.wizard-eyes');
let fireballColor = document.querySelector('.setup-fireball-wrap');
// let fireballColorInput = fireballColor.querySelector('input');
let FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

const randomNum = function (min, max) {
  let random = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(random);
};

coatColor.addEventListener('click', function () {
  let color = WIZARD_COATS[randomNum(0, WIZARD_COATS.length)];
  coatColor.style = 'fill: ' + color;
  wizardAppereances.querySelector('[name="coat-color"]').value = color;
});

wizardEyes.addEventListener('click', function () {
  let color = WIZARD_EYES[randomNum(0, WIZARD_EYES.length)];
  wizardEyes.style = 'fill: ' + color;
  wizardAppereances.querySelector('[name="eyes-color"]').value = color;
});

fireballColor.addEventListener('click', function () {
  let color = FIREBALL_COLOR[randomNum(0, FIREBALL_COLOR.length)];
  fireballColor.style.background = color;
  fireballColor.querySelector('input').value = color;
});
