'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var userDialog = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

userDialog.querySelector('.setup-similar').classList.remove('hidden');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarListElement = document.querySelector('.setup-similar-list');

var getRandomNumber = function(maxNumber) {
    return Math.round( Math.random() * maxNumber );
}

var getRandomName = function(names, surnames) {
    return names[getRandomNumber(names.length-1)] + ' ' + surnames[getRandomNumber(surnames.length-1)];
}

var getRandomCoatColor = function(coatColors) {
    return coatColors[getRandomNumber(coatColors.length-1)];
}

var getRandomEyesColor = function(eyesColors) {
    return eyesColors[getRandomNumber(eyesColors.length-1)];
}

var userNameInput = document.querySelector('.setup-user-name');

// Mock
var wizards = [
    {
        name: getRandomName(WIZARD_NAMES, WIZARD_SURNAMES),
        coatColor: getRandomCoatColor(WIZARD_COAT_COLORS),
        eyesColor: getRandomEyesColor(WIZARD_EYES_COLORS)
    },
    {
        name: getRandomName(WIZARD_NAMES, WIZARD_SURNAMES),
        coatColor: getRandomCoatColor(WIZARD_COAT_COLORS),
        eyesColor: getRandomEyesColor(WIZARD_EYES_COLORS)
    },
    {
        name: getRandomName(WIZARD_NAMES, WIZARD_SURNAMES),
        coatColor: getRandomCoatColor(WIZARD_COAT_COLORS),
        eyesColor: getRandomEyesColor(WIZARD_EYES_COLORS)
    },
    {
        name: getRandomName(WIZARD_NAMES, WIZARD_SURNAMES),
        coatColor: getRandomCoatColor(WIZARD_COAT_COLORS),
        eyesColor: getRandomEyesColor(WIZARD_EYES_COLORS)
    }
];

var renderWizard = function(wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
}


var printWizards = function() {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < wizards.length; i++) {
        fragment.appendChild(renderWizard( wizards[i] ));
    }

    similarListElement.appendChild(fragment);
}

printWizards();

var openPopup = function() {
    userDialog.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
}

var hidePopup = function() {
    userDialog.classList.add('hidden');
    document.removeEventListener('click', onPopupEscPress);
}

var onPopupEscPress = function(evt) {
    if ( !(evt.target === userNameInput) ) {
        if (evt.keyCode === ESC_KEYCODE) {
            hidePopup();
        }
    }
};

var setupClose = document.querySelector('.setup-close');

setupClose.addEventListener('click', function() {
    hidePopup();
});

setupClose.addEventListener('keydown', function(evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
        hidePopup();
    }
});

setupOpen.addEventListener('click', function() {
    openPopup();
});

setupOpen.addEventListener('keydown', function(evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
        openPopup();
    }
});

var setupFireball = document.querySelector('.setup-fireball-wrap');
var changeFireballColor = function() {
    setupFireball.style.backgroundColor = getRandomCoatColor(WIZARD_COAT_COLORS);
}

setupFireball.addEventListener('click', changeFireballColor);

var changeCoatColor = function() {
    wizardCoat.style.fill = getRandomCoatColor(WIZARD_COAT_COLORS);
}

var changeEyesColor = function() {
    wizardEyes.style.fill = getRandomEyesColor(WIZARD_EYES_COLORS);
}

var wizardCoat = document.querySelector('.wizard-coat');
wizardCoat.addEventListener('click', changeCoatColor);

var wizardEyes = document.querySelector('.wizard-eyes');
wizardEyes.addEventListener('click', changeEyesColor);








