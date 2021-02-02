const jokeElement = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);


generateJoke();

/* questo è un modo alternativo per non usare .then .then
Cerca library axios */
async function generateJoke() {
    const config =  {
        headers: {
            'Accept': 'application/json'
        }
    }
    const res = await fetch('https://icanhazdadjoke.com', config)
    /* quando usiamo await all'interno di una funzione alla funzione dobbiamo
    aggiungere async */

    const data = await res.json();
    jokeElement.innerHTML = data.joke;

}

/*function generateJoke() {
    const config =  {
        headers: {
            'Accept': 'application/json'
        }
    }
    fetch('https://icanhazdadjoke.com', config)
    .then(res => res.json())
    .then((data) => // console.log(data) 
    {
        jokeElement.innerHTML = data.joke;
    }
    
    )
}*/