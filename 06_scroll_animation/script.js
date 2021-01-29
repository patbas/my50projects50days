const boxes = document.querySelectorAll('.box');

/* evento di scroll della pagina */

window.addEventListener('scroll', checkBoxes);
/* se richiamo la funzione appaino i primi 3 che corrispondono a parametri più bassi
del triggerBottom e a cui viene aggiunta la classe show :

checkBoxes();
senza questo sotto il titolo non viene mostrato nulla */

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;
    /* ha diviso l'altezza della finestra per 5 e motiplicato per 4 per essere quasi alla fine */
    boxes.forEach( box => {
        const boxTop = box.getBoundingClientRect().top;
        /*https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect*/
        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    })
}

/* cerca la libreria animation scroll per cose più complicate */