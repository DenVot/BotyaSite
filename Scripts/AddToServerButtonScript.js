let button = document.querySelector('.add-to-server-button');
let plusSVG = document.querySelector('.plus-svg');

button.onmouseenter = function() {    
    plusSVG.style.visibility = 'visible';
    plusSVG.animate([
    {transform: 'rotate(90deg)'}
    ],{ duration: 200, direction: "alternate", fill: "forwards" });
}

button.onmouseleave = function() {    
    plusSVG.animate([
    {transform: 'rotate(0deg)'}
    ],{ duration: 200, direction: "alternate", fill: "forwards" });    
}

button.onmousedown = function() {
    button.style.transition = 'all 0.5s';
    button.style.backgroundColor = '#0f546e';
}

button.onmouseup = function() {
    button.style.transition = 'all 0.5s';
    button.style.backgroundColor = '#127ca4';
}

button.onclick = function() {
    window.location= 'https://discord.com/oauth2/authorize?client_id=749991391639109673&scope=bot&permissions=1573583991';
}