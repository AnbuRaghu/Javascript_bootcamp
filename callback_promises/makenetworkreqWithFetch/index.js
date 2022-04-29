// API - Application Programming Interface: software to communicate with other software
// API - helpful service
// REST API

// CRUD 
// create POST
// read GET
// update PUT / PATCH
// delete DELETE

// http://jsonplaceholder.typicode.com/posts
// JSON - JavaScript Object Notation
// fetch(url)
// jsonplaceholder.typicode.com

// GET /posts/1 - single blog post
// POST /posts
const blogPost = {
  title: "Cool post",
  body: "lkajsdflkjasjlfda",
  userId: 1  
}

fetch('https://jsonplaceholder.typicode.com/pots/1')
  .then(response => {
      if (!response.ok) {
        throw new Error(response.status);  
        // 4xx:400range status code means it's fault of programmer or user
        // 5xx:5000nrange means server had a problem which means.this isn't our fault
      }
  })
  .then(data => console.log(data))
  .catch(error => console.error(error))