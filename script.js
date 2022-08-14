// const text = require("body-parser/lib/types/text");

// Get jokes
const button = document.getElementById('button');
const audio = document.getElementById('audio');
const jokeContent = document.getElementById('jokeContent');

function toggleButton() {
  button.disabled = !button.disabled
}

async function getJokes () {
  
    let joke = ""
    const apiUrl = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
       if(data.setup) {
        joke = `${data.setup}... ${data.delivery}`
       } else {
         return data.joke;
       }
       const writup = document.createElement('p');
       writup.textContent = joke;
       jokeContent.append(writup)
       textToSpeech(joke) +   jokeContent.innerText(joke);
       
    } catch (error) {

    }
}

const textToSpeech = (joke) => {
  // making speech request
    const utterance = new SpeechSynthesisUtterance(joke);
    speechSynthesis.speak(utterance);
 }
 button.addEventListener('click', getJokes)
