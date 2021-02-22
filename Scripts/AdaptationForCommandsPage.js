let emojiesElems = document.querySelectorAll('.emojies');
let screenWidth = window.outerWidth;

if(screenWidth <= 500) {
    for(let emojiesElem of emojiesElems) {
        emojiesElem.style.flexDirection = 'column';
        let emojies = emojiesElem.querySelectorAll('.emoji');
        for(let emoji of emojies) {
            emoji.style.marginLeft = 0;
            emoji.style.marginTop = 2;
        }
    }
}

window.onresize = function() {
    let screenWidthResized = window.outerWidth;
    if(screenWidthResized <= 500) {
        for(let emojiesElem of emojiesElems) {
            emojiesElem.style.flexDirection = 'column';
            let emojies = emojiesElem.querySelectorAll('.emoji');
            for(let emoji of emojies) {
                emoji.style.marginLeft = 0;
                emoji.style.marginTop = 2;
            }
        }
    } else {
        for(let emojiesElem of emojiesElems) {
            emojiesElem.style.flexDirection = 'row';
            let emojies = emojiesElem.querySelectorAll('.emoji');
            for(let emoji of emojies) {
                emoji.style.marginLeft = 2;
                emoji.style.marginTop = 0;
            }
        }
    }
}