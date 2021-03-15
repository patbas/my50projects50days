const smallCups = document.querySelectorAll('.cup-small');
//console.log(smallCups);
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

updateBigcup();

smallCups.forEach( (cup, idx) => {
   //console.log(idx);
   cup.addEventListener('click', () => highLightCups(idx))
   }
);

function highLightCups(idx) {
   if ( smallCups[idx].classList.contains('full') &&
           !smallCups[idx].nextElementSibling.classList.contains('full')) {
               idx--;
           }
   // console.log(idx);
   // riempio ciascuna
   // smallCups[idx].classList.add('full');
   /* ma io se clicco ad esempio sulla 4 voglio riempire tutte le tazze fino alla 4 */
   smallCups.forEach( (cup, idx2) => {
      /* se clicco di nuovo su una tazza già selezionata e il successivo non è selezionata voglio che la tazza torni a non essere selezionata */
      if ( idx2 <= idx ) {
         /* se l'indice attuale è più piccolo o uguale di quello in cui ho cliccato */
         /*smallCups[idx2].classList.add('full');
         meglio: */
         cup.classList.add('full');
      } else {
         cup.classList.remove('full');
      }
   })
   updateBigcup();
}

function updateBigcup() {
   const fullCups = document.querySelectorAll('.cup-small.full').length;
   //console.log(fullCups);
   const totalCups = smallCups.length;
   // nascondo la percentuale se a 0
   if ( fullCups === 0 ) {
      percentage.style.visibility = 'hidden';
      percentage.style.height = 0;
   } else {
      percentage.style.visibility  = 'visible';
      percentage.style.height = `${fullCups / totalCups * 330}px`;
      percentage.innerText = `${fullCups / totalCups * 100}%`;
   }

   if ( fullCups === totalCups) {
      remained.style.visibility = 'hidden';
      remained.style.height = 0;
   } else {
      remained.style.visibility = 'visible';
      liters.innerText = `${2 - (250 * fullCups / 1000)}L`;
   }
}