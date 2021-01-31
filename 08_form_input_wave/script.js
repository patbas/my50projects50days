const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
    label.innerHTML = label.innerText
    .split('') /* divide le lettere della label ciascuna in un elemento dell'array */
    .map((letter, idx) => `<span style="transition-delay:${idx * 200}ms">${letter}</span>` ) 
    /* trasform l'array in un altro array */
    /* idx * 50 molto + veloce */
    .join(''); /* noi non vogliamo un array ma una stringa */
} )