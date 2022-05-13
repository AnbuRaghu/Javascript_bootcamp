import Story from '../components/Story.js';
import view from '../utils/view.js';
import baseUrl from '../utils/baseUrl.js';

export default async function Item() {
  let story = null;
  let hasComments = false;  
  let hasError = false;
    
  try { 
     story = await getStory();  
     hasComments = story.comments.length > 0;
  } catch(error) {
     hasError = true; 
     console.error(error);
  } 
  
  if (hasError) {
     view.innerHTML = `<div class="error">Error fetching story</div>`;
  }
  
  view.innerHTML = `
  <div>
    ${Story(story)}
  </div>
  <hr/>
  ${hasComments ? story.comments.map(comment => JSON.stringify(comment)).join('') : 'No comments'}
  `  
}

async function getStory() {
     // url looks like this
    ///index.html#/item?id=21702424
    //window.location.hash gives the remainder from hash mark like this
    // #/item?id=21702424
    // we can use split() to split the url string split's 1st param is saying where the split exactly happen in the string and 2nd param says the splited value int his casse  as we need the split part and split alwasy return an array with 2 items like this ["#/item", "21702424"]
    //as we care about 2nd item we can use [1] here to get the split value
  const storyId = window.location.hash.split('?id=')[1];
  //console.log(storyId); //21702424
  const response = await fetch(`${baseUrl}/item/${storyId}`);
  const story = await response.json();
  return story;
}