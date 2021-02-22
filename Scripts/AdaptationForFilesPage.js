let xmlBlocks = document.querySelectorAll('.xml');
let examples = document.querySelector('.embed-examples');
let width = window.outerWidth;

if(width < 500) {    
    for(let xml of xmlBlocks) {
        xml.style.fontSize = '10px';
    }
    examples.style.flexDirection = 'row';
}

window.onresize = function() {
    let widthres = window.outerWidth;
    if(widthres < 500) {    
        for(let xml of xmlBlocks) {
            xml.style.fontSize = '10px';
        }
        examples.style.flexDirection = 'row';
    } else {
        for(let xml of xmlBlocks) {
            xml.style.fontSize = '14px';
        }
        examples.style.flexDirection = 'column';
    }
};