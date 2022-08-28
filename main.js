const personName = 'Happy Birthday Rajlaxmi';

document.title = personName;

const partyStartBtn = document.getElementById('party-button'),
    birthdayBanner = document.getElementById('banner'),
    cakeContainer = document.getElementById('cake-container'),
    ballonGroup = document.getElementById('balloon-group'),
    popperLeft = document.getElementById('popper-left'),
    popperRight = document.getElementById('popper-right'),
    footerText = document.getElementById('footer-text'),
    waviy = document.getElementById('waviy'),
    word = document.getElementById('word');


let words = [
    'Wishing You a day that is as special in every way as you are',
    'Happy birthday Mouni Baby! 🎂',
    'Love u Forever💞',
    'Today is As beautiful as other days 💫',
    'But you realize',
    'Another year has gone',
    'in a blink of the eyes',
    'Do you know..? 🤷‍♂️',
    'Today is so special 🌅',
    "That's why let's make it",
    'The best virtual celebration ever 🎊',
    'And let me share you a piece of happiness and Joy🤡',
    'I made all this for you 👈',
    'As a birthday present 🎁',
    "Thanks for always being there in my hard time's",
    "Its a blessing to have a beautiful girl friend like you. ✨",
    "Not Girl Friend , my love",
    "Partner and Pellam also",
    'And i hope',
    "you'll find..",
    'Happiness along the way',
    'Keep your spirit up',
    'Enjoy every single moment..',
    'That you experience today ☀️',
    'Fill it with your most beautiful smile',
    'And make it the best memory..',
    'Never ever think that you dont have any one',
    'I will be always there for you Baby Doll 💖',
    'Once again I wish you a happy birthday!',
    'Made with love 💖 by Gopal alias ur Alien',
    'alias ur loving baby 😘',
    'Love u Baby and I want u to be with me every moment'
],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 50;

let wordflick = function () {
    setInterval(function () {
        if (forwards) {
            if (offset >= words[i].length) {
                ++skip_count;
                if (skip_count == skip_delay) {
                    forwards = false;
                    skip_count = 0;
                }
            }
        }
        else {
            if (offset == 0) {
                forwards = true;
                i++;
                offset = 0;
                if (i >= len) {
                    i = 0;
                }
            }
        }
        part = words[i].substr(0, offset);
        if (skip_count == 0) {
            if (forwards) {
                offset++;
            }
            else {
                offset--;
            }
        }
        word.innerText = part;

    }, speed);
};

birthdayBanner.style.display = 'none';

const cakeAnimation = () => {
    let cakePosY = 100;
    const animateCake = setInterval(() => {
        if (cakePosY < 25) {
            clearInterval(animateCake);
            waviy.style.display = 'block';
            setTimeout(() => {
                cakeContainer.style.display = 'none';
                wordflick();
            }, 3000)
        }
        cakePosY -= 1;
        cakeContainer.style.top = `${cakePosY}rem`
    }, 50)
}

partyStartBtn.addEventListener('click', () => {
    document.getElementById('audio').play();
    partyStartBtn.style.display = 'none';
    let posY = 0, ballonGrpPosY = 100;
    const animationTimer = setInterval(() => {
        birthdayBanner.style.display = 'block';
        let rect = birthdayBanner.getBoundingClientRect();
        if (rect.y >= 15) {
            posY += 1;
        }
        else {
            footerText.style.display = 'unset';
            if (ballonGrpPosY <= -20) {
                ballonGroup.style.display = 'none';
                popperLeft.style.display = 'unset';
                popperRight.style.display = 'unset';
                clearInterval(animationTimer);
                cakeAnimation();
            }
            ballonGrpPosY -= 1;
            ballonGroup.style.top = `${ballonGrpPosY}rem`;
        }
        birthdayBanner.style.bottom = `${posY}rem`;
        waviy.style.bottom = `${posY - 2}rem`
    }, 40)
})