const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
let insertX = ["Willy the Goblin","Big Daddy","Father Christmas"];
let insertY = ["the soup kitchen","Disneyland","the White House"];
let insertZ = ["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;
  let insertPerson = "";
  let insertLoc = "";
  let insertEvent = "";

  insertPerson = randomValueFromArray(insertX);
  insertLoc = randomValueFromArray(insertY);
  insertEvent = randomValueFromArray(insertZ);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = storyText.replaceAll("Bob", name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300*0.0714286) + ' stone';
    const temperature =  Math.round((94 - 32) * (5/9)) + ' Celcius';
    
    newStory = storyText.replaceAll("300 pounds", weight);
    newStory = storyText.replaceAll("94 fahrenheit", temperature);
  }

  newStory = storyText.replaceAll(":insertx:", insertPerson);
  newStory = storyText.replaceAll(":inserty:", insertLoc);
  newStory = storyText.replaceAll(":insertz:", insertEvent);

  story.textContent = newStory;
  story.style.visibility = 'visible';
}