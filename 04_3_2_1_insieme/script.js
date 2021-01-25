/* progress bar */
const panels = document.querySelectorAll('.panel');
const progressBar = document.getElementById('progressBar');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
let arrNode=[];
console.log(circles);
/*console.log(circles);*/
let currentActive = 1;
/*window.addEventListener('resize', () => {*/
let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
for(var k=0;k<circles.length;k++){
    console.log(circles[k]);
    //arrNode.push(circles[k]);
    arrNode[arrNode.length]=circles[k];
}
if (width < 667) {
    arrNode.pop(); // tolgo ultimo
    arrNode.pop(); // tolgo ultimo
}
console.log(arrNode);
console.log(arrNode.length);
next.addEventListener('click', () => {
    currentActive++;
    if ( currentActive > arrNode.lenght ) {
        currentActive = arrNode.lenght;
    }
    update();
    /*console.log(currentActive);*/
})

prev.addEventListener('click', () => {
    currentActive--;
    if ( currentActive < 1 ) {
        currentActive = 1;
    }    
    
    update();
})

function update() {
    circles.forEach( (circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active');
            removeClassActive();
            panels[idx].classList.add('attivo');
        } else {
            circle.classList.remove('active');
        }  
    });

    const actives = document.querySelectorAll('.active');
    console.log(actives.length, circles.length);
    progressBar.style.width = (actives.length -1) / (arrNode.length -1) * 100 + '%';

    if (currentActive === 1) {
        prev.disabled = true;
    } else if ( currentActive === arrNode.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}

/* expanding cards */
/*const panels = document.querySelectorAll('.panel');*/

panels.forEach( (panel, idx ) => {
    panel.addEventListener('click', () => {
        removeClassActive();
        panel.classList.add('attivo');
        currentActive = idx+1;
        /*console.log(idx);*/
        update();
    })
})

function removeClassActive() {
    panels.forEach( panel => {
        panel.classList.remove('attivo');
    })
}

/*rotation navigation*/
const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

open.addEventListener('click', () => {
    container.classList.add('show-nav');
})

close.addEventListener('click', () => {
    container.classList.remove('show-nav');
})
const search  = document.querySelector('.search');
const input   = document.querySelector('input');
const bottone = document.querySelector('.bottone');

console.log(search);
console.log(input);
console.log(bottone);
bottone.addEventListener('click', () => {
    search.classList.toggle('active');
    input.focus();
})