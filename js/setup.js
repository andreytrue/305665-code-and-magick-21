'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

var wizards = [];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

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