import Story from '../components/Story.js';
import Comment from '../components/Comment.js';
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
  
  ${hasComments ? story.comments.map(comment => Comment(comment)).join('') : 'No comments'}
  `  
  //  // here we map over the comment and inside the iteration we call the Comment function which is a seperate component (function) and pass the comment to it
}

async function getStory() {
  const storyId = window.location.hash.split('?id=')[1];
  const response = await fetch(`${baseUrl}/item/${storyId}`);
  const story = await response.json();
  return story;
}