const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');
console.log(empties);

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for( const empty of empties ) {
   empty.addEventListener('dragover', dragOver);
   empty.addEventListener('dragenter', dragEnter);
   empty.addEventListener('dragleave', dragLeave);
   empty.addEventListener('drop', dragDrop);
}

function dragStart() {
   console.log('drag start');
   this.className += ' hold';
   /* setTimeout perchè altrimenti non c'è tempo per prendere immagine - 0 perchè basta farla prima */
   setTimeout(() => this.className = 'invisible', 0);

}

function dragEnd() {
   console.log('drag end');
   this.className = 'fill';
}

function dragOver(e) {
   console.log('drag over');
   e.preventDefault();
}

function dragEnter(e) {
   console.log('drag enter');
   e.preventDefault();
   this.className += ' hovered';
}

function dragLeave(e) {
   console.log('drag leave');
   this.className += 'empty';
}

function dragDrop() {
   console.log('drag drop');
   this.className = 'empty';
   this.append(fill);

}