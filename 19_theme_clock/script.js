const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toogle = document.querySelector('.toggle');

const days = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"];

const months = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];

toogle.addEventListener('click', (e) => {
   const html = document.querySelector('html');
   if ( html.classList.contains('dark')) {
      html.classList.remove('dark');
      e.target.innerHTML = 'Dark mode';
   } else {
      html.classList.add('dark');
      e.target.innerHTML = 'Light mode';
   }

})

function setTime() {
   const time =  new Date();
   console.log(time);
   /* Mon Mar 01 2021 13:01:36 GMT+0100 (Ora standard dell’Europa centrale) */
   const month = time.getMonth();
   const day = time.getDay();
   const date = time.getDate();
   const hours = time.getHours(); /* 24 ore */
   const hoursForClock = hours % 12; /* 12 ore */
   const minute = time.getMinutes();
   const second = time.getSeconds();
   const ampm = hours >= 12 ? 'PM' : 'AM';

   /*hourEl.style.transform = `translate(-50%, -100%) rotate(30deg)`;*/
   hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`;
   minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minute, 0, 59, 0, 360)}deg)`;
   secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(second, 0, 59, 0, 360)}deg)`;
   
   timeEl.innerHTML = `${hours}:${minute < 10 ? `0s {minute}`: minute} ${ampm}`;
   dateEl.innerHTML = `${days[day]} <span class="circle">${date}</span> ${months[month]} `
}


/* voglio trasformare le ore da 0 a 11 con i gradi */
const scale = (num, in_min, in_max, out_min, out_max) => {
   return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }

setTime();

setInterval(setTime, 1000);