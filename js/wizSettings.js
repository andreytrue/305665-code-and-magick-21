'use strict';

(function () {
  const wizardSettings = document.querySelector('.setup-wizard');
  const wizardAppereances = document.querySelector('.setup-wizard-appearance');
  const coatColor = wizardSettings.querySelector('.wizard-coat');
  const wizardEyes = wizardSettings.querySelector('.wizard-eyes');
  const fireballColor = document.querySelector('.setup-fireball-wrap');
  const FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  const randomNum = function (min, max) {
    const random = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(random);
  };

  coatColor.addEventListener('click', function () {
    const color = window.WIZARD_COATS[randomNum(0, window.WIZARD_COATS.length)];
    coatColor.style = 'fill: ' + color;
    wizardAppereances.querySelector('[name="coat-color"]').value = color;
  });

  wizardEyes.addEventListener('click', function () {
    const color = window.WIZARD_EYES[randomNum(0, window.WIZARD_EYES.length)];
    wizardEyes.style = 'fill: ' + color;
    wizardAppereances.querySelector('[name="eyes-color"]').value = color;
  });

  fireballColor.addEventListener('click', function () {
    const color = FIREBALL_COLOR[randomNum(0, FIREBALL_COLOR.length)];
    fireballColor.style.background = color;
    fireballColor.querySelector('input').value = color;
  });
})();
