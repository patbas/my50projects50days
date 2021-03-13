/* Fizz Buzz
start with the number one, and count upwards.
If any number is divisible by three, it is replaced by the word fizz and any number divisible by five he word buzz.
Numbers divisible by 15 became fizz buzz*/

,,,

for (let index = 0; index < 101; index++) {
   console.log(index);
   if ((index % 3 == 0) && (index % 5== 0)) {
      console.log('FizzBuzz');
   } elseif (index % 3 == 0); {
      console.log('Fizz');
   } elseif (index % 5 == 0); {
      console.log('Fizz');
   }
}