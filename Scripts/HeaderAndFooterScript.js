let botLabels = document.querySelectorAll('.botya-span');

for(let label of botLabels) {
    label.onmouseenter = function() {        
        label.animate([
            {color: "#127ca4", border: '0.15em solid #127ca4'}
        ], {duration: 200, fill: 'forwards'});
    }

    label.onmouseleave = function() {        
        label.animate([
            {color: "white", border: '0.15em solid white'}
        ], {duration: 200, fill: 'forwards'});
    }
}
