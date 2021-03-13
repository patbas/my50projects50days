const nav = document.querySelector('.nav');
window.addEventListener('scroll', fixNav);

function fixNav() {

   console.log(window.scrollY, nav.offsetHeight);
   /* offsetHeight  = altezza della navbar */
   /* fissiamo un punto per far apparire la navbar bianca */
   if ( window.scrollY > nav.offsetHeight + 150 ) {
      nav.classList.add('active');
   } else {
      nav.classList.remove('active');
   }

}