const loadtext = document.querySelector('.loading-text');
const bg       = document.querySelector('.bg');

let load = 0;

/* la vogliamo attivare in un intervallo di tempo
   ogni 30 millisecondi */

let int = setInterval( blurring, 30);
       /* setInterval( funzione,  tempo) */

function blurring() {
        load++;
        console.log(load);
        if (load > 99) {
            clearInterval(int); /* si ferma quando arriva a 100 */
        }
        loadtext.innerText = `${load}%`;
        /* start fully opaque 
           opacity va da 0 a 1
           load va da 0 a 100 
           usa un post di stackoverflow map a range of numbers to another range of numbers
           const scale = (num, in_min, in_max, out_min, out_max) => {
            return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
           } 
           0 -> 100 load
           1 -> 0 opacity 
        */
       /* la percentuale man mano che arriva al 100% scompare */
       loadtext.style.opacity = scale(load, 0, 100, 1, 0);
       bg.style.filter = `blur(${scale(load,0,100,30,0)}px)`;
       /* non parto dal completo blur solo il 30 */
    }

const scale = (num, in_min, in_max, out_min, out_max) => {
        return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
       }
