const panels = document.querySelectorAll('.panel');

panels.forEach( (panel) => {
    // aggiungo un evento su ciascuno
    panel.addEventListener('click', () => {
        // tolgo la classe active sugli altri
        removeClassActive();
        // aggiungo la classe active
        panel.classList.add('active');
    })
})

function removeClassActive() {
    // se un solo argomento le parentesi () possono essere tolte
    // sopra ho lasciato per mostrare la differenza
    panels.forEach( panel => {
        panel.classList.remove('active');
    })
}