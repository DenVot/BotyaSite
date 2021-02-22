let emojies = document.querySelectorAll('.emoji');

for(let emoji of emojies) {
    emoji.onmouseenter = function() {
        emoji.style.cursor = 'pointer';
    }

    emoji.onclick = function() {
        let spans = emoji.getElementsByTagName('span');
        for(let span of spans) {
            if(span.textContent === '1') {
                span.textContent = '2'; 
                let timeId = setTimeout(() => {span.textContent = '1'; clearInterval(timeId);}, 1000);                             
            } else {
                span.textContent = '1';   
            }    
        }        
    }
}
