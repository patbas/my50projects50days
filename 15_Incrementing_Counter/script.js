const counters = document.querySelectorAll('.counter');
//console.log(counters);
counters.forEach( counter => {
   counter.innerText = '0';

   const updateCounter = () => {
      const target = +counter.getAttribute('data-target');
      /*console.log(typeof target, target);
         string 12000
         string 8000
         string 7000 
         per strasformarlo in numero possiamo fare:
         Number(counter.getAttribute('data-target'));
         oppure semplicemente anteporre + */
      const c = +counter.innerText;
      const increment = target / 1200;
      /* aumentando 1200 va più piano diminuendo va più veloce */
      console.log(increment);

      if ( c < target ) { 
         /* non vogliamo superare il target */
         counter.innerText = `${Math.ceil( c + increment )}`;
         /* ceil arrotonda per eccesso */
         setTimeout( updateCounter, 1);
      } else  {
         /* se ha superato scriviamo direttamente il target */
         counter.innerText = target;
      }
   }

   updateCounter();
})