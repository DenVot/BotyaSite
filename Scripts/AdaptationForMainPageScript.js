let screenWidth = window.outerWidth;
let innerAdvantages = document.querySelectorAll('.advantage-inner');
let images = document.querySelectorAll('.image');

let pageIntro = document.querySelector('.wave-intro');

if(screenWidth < 800) {
    pageIntro.remove();
}

if(screenWidth <= 500) {
    botSvg.style.marginTop = '1.5em';

    for(let innerAdvantage of innerAdvantages) {
        innerAdvantage.style.flexDirection = 'column';
        innerAdvantage.style.marginTop = '1em';
    }
    
    for(let img of images) {
        img.style.marginTop = '1.5em';        
    }
}

window.onresize = function() {
    let newScreenWidth = window.outerWidth;

    if(newScreenWidth < 800) {
        pageIntro.remove();
    } 
    
    if(newScreenWidth <= 500) {            
        for(let innerAdvantage of innerAdvantages) {
            innerAdvantage.style.flexDirection = 'column';
            innerAdvantage.style.marginTop = '1em';
        }
        
        for(let img of images) {
            img.style.marginTop = '1.5em';            
        }
    } else {            
        for(let innerAdvantage of innerAdvantages) {
            innerAdvantage.style.flexDirection = 'row';
            innerAdvantage.style.marginTop = '1em';
        }
        
        for(let img of images) {
            img.style.marginTop = '1.5em';
            img.style.order = '0';
        }
    }
}