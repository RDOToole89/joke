const setupDiv = document.querySelector(`#setup`);
const punchlineDiv = document.querySelector(`#punchline`);
const punchlineBtn = document.querySelector(`#punchlineBtn`);
const newJokeBtn = document.querySelector(`#newJokeBtn`);
let punchline;





// Setup an async function called getJoke
// Create a variable called jokePromise that fetches a joke from https://official-joke-api.appspot.com/jokes/programming/random
// create a variable called joke that consumes the json data

async function getJoke() {
  const jokePromise = await fetch(`https://official-joke-api.appspot.com/jokes/programming/random`);
    
  if(jokePromise.ok) {

      const joke = await jokePromise.json();
      setupDiv.innerText = joke[0].setup;
      
      punchline = joke[0].punchline;
      
      punchlineBtn.classList.toggle(`hidden`);
      newJokeBtn.classList.toggle(`hidden`);
      
      console.log(punchline)

      punchlineDiv.innerText = '';
      punchlineDiv.classList.remove(`bubble`);


    } else {
      console.error(`Error: ${jokePromise.status}`); 
    }
}

async function getPunchline() {
    punchlineDiv.innerText = punchline;
    punchlineDiv.classList.add(`bubble`);
    punchlineBtn.classList.toggle('hidden');
    newJokeBtn.classList.toggle('hidden');
}




newJokeBtn.addEventListener(`click`, () => {
  getJoke();
})

punchlineBtn.addEventListener(`click`, () => {
  getPunchline();
})