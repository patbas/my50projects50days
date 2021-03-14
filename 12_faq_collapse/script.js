/*
1 - Bring in toggle buttons
2 - Loop throught nodelist 
3 add click event 
4 toggle the active class on the parent node
*/

const toggles = document.querySelectorAll('.faq-toggle');
console.log(toggles);
toggles.forEach(toggle => {
   toggle.addEventListener('click', () => {
      toggle.parentNode.classList.toggle('active');
   })
   
});