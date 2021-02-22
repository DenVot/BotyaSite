let langInfo = document.querySelectorAll('.lang-svg');

for(let info of langInfo) {
    info.onmouseenter = function() {       
        info.animate([
            {transform: 'rotate(-90deg)'}
        ], {duration: 500, fill: 'forwards', easing: 'ease-in-out'})
    }
    info.onmouseleave = function() {        
        info.animate([
            {transform: 'rotate(0deg)'}
        ], {duration: 500, fill: 'forwards', easing: 'ease-in-out'})
    }
}
