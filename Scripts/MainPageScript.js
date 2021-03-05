let wavesSvg = document.getElementById('wave');
let introWithHero = document.querySelector('.wave-intro');
let header = document.getElementsByTagName('header');
let buttonsInCombo = document.querySelectorAll('.button-in-combo');
let buttonWrapper = document.getElementById('toggle-button-wrapper');
let toggle = document.getElementById('toggle-button-selector');

let posOfToggleButton = 0;

toggle.onmouseenter = function() {
    toggle.style.cursor = 'pointer';
}

toggle.onclick = function() {
    if(posOfToggleButton === 0) {
        toggle.style.backgroundColor = "#44bd32";
        buttonWrapper.style.backgroundColor = "#252525";
        posOfToggleButton++;
        toggle.animate([
            {transform: "translateX(152px)"}
        ], {duration: 200, fill: 'forwards'});
    } else {
        toggle.style.backgroundColor = "#e84118";        
        buttonWrapper.style.backgroundColor = "transparent";
        toggle.animate([
            {transform: "translateX(-10px)"}
        ], {duration: 200, fill: 'forwards'});
        posOfToggleButton = 0;  
    }
}

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
