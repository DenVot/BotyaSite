let wavesSvg = document.getElementById('wave');
let introWithHero = document.querySelector('.wave-intro');
let header = document.getElementsByTagName('header');
let buttonsInCombo = document.querySelectorAll('.button-in-combo');
let timeText = document.getElementById('message-time');
let now = new Date();

wavesSvg.style.height = (window.outerHeight > introWithHero.clientHeight + header.clientHeight ? window.outerHeight - introWithHero.clientHeight - header.clientHeight :  introWithHero.clientHeight - window.outerHeight - header.clientHeight);

timeText.textContent = now.getHours() + ':' + (now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes());

for(let button of buttonsInCombo) {
    let url = button.dataset.url;

    if(button.id === 'invite-button') {
        button.onmouseenter = function() {
            button.style.transition = "box-shadow 0.3s";
            button.style.boxShadow = '0 0 10px #7289da';
        }
        button.onmouseleave = function() {
            button.style.transition = "box-shadow 0.3s";
            button.style.boxShadow = '0 0 0px #7289da';
        }
        button.onmouseup = function() {
            button.style.transition = "box-shadow 0.3s";
            button.style.boxShadow = '0 0 10px #7289da';
        }
        button.onmousedown = function() {
            button.style.transition = "box-shadow 0.3s";
            button.style.boxShadow = '0 0 0px #7289da';
            window.location = url;
        }
    } else {
        button.onmouseenter = function() {
            button.style.transition = "box-shadow 0.3s";
            button.style.boxShadow = '0 0 10px #127ca4';
        }
        button.onmouseleave = function() {
            button.style.transition = "box-shadow 0.3s";
            button.style.boxShadow = '0 0 0px #127ca4';
        }
        button.onmouseup = function() {
            button.style.transition = "box-shadow 0.3s";
            button.style.boxShadow = '0 0 10px #127ca4';
        }
        button.onmousedown = function() {
            button.style.transition = "box-shadow 0.3s";
            button.style.boxShadow = '0 0 0px #127ca4';
            window.location = url;
        }
    }    
}