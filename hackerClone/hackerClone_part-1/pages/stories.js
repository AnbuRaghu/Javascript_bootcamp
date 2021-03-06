import view from '../utils/view.js';

export default async function Stories(path) {
  const stories = await getStories(path);
  const hasStories = stories.length > 0; // checking if the stories has something
                    
  view.innerHTML = `<div>
    ${hasStories ? stories.map(story => JSON.stringify(story)) : 'No stories'}
  </div>`;  
}

async function getStories(path) {
  const isHomeRoute = path === '/';
  const isNewRoute = path === '/new';
  if (isHomeRoute) {
    path = '/news';  
  } else if (isNewRoute) {
    path = '/newest';  
  } 
  const response = await fetch(`https://node-hnapi.herokuapp.com${path}`);
  const stories = await response.json();
  return stories;
}

// https://node-hnapi.herokuapp.com

// / (Top) -> /news
// /new (New) -> /newest
// /ask (Ask) -> /ask
// /show (Show) -> /show 