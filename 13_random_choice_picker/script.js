const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', (e) => {
   createTags(e.target.value);
   if (e.key === 'Enter') {
      setTimeout(() => {
         e.target.value= '';
      }, 10)
      randomSelect();
   }
})

function createTags(input) {
   console.log('pippo');
   /* const tags = input.split(',');
   console.log(tags);
   viene visualizzato un array degli elementi separati da virgola.
   Se nella textarea viene scritto 1,2 viene visualizzato un array di 2 elementi ["1","2"]*/
   const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
   /* .filter mi permetter di formattare l'output qui prima tolgo gli spazi da quello scritto e non lo prendo se non è uguale a '' */
   /* map ci permette di manipolare l'array qui mette tag nell'array ma tolto gli spazi */
   /* pulisco tagEl */
   tagsEl.innerHTML = '';
   //console.log(tags);
   tags.forEach(tag => {
      const tagEl = document.createElement('span');
      tagEl.classList.add('tag');
      tagEl.innerText = tag;
      tagsEl.appendChild(tagEl);
   });
}

function randomSelect() {
   console.log(123);
   const times = 30;
   /* questo crea effetto di scelta tra i vari tag:
      li illumina e di spegne */
   const interval = setInterval(() => {
      const randomTag = pickRandomTag();

      highlightTag(randomTag);
      setTimeout(() => {
         unHighlightTag(randomTag);
      }, 100)

   }, 100);
   /* questo alla fine li blocca */
   setTimeout(() => {
      clearInterval( interval );
      /* questo porta in evidenza il tag scelto */
      setTimeout(() => {
         const randomTag = pickRandomTag();
         highlightTag(randomTag);

      }, 100)

   }, times * 100)

}

function pickRandomTag() {
   const tags = document.querySelectorAll('.tag');
   return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
   tag.classList.add('highlight');
}

function unHighlightTag(tag) {
   tag.classList.remove('highlight');
}