// const posts = document.querySelectorAll(".post");
// posts.forEach(post => {  
//   post.addEventListener('click', event => {
//   //   console.log(event.target);  
//     console.log('Do you want to edit this post?')
//   });
// });

document.body.addEventListener('click', event => {
  if (!event.target.closest('.post')) return;
  
  console.log('Do you want to edit this post?')  
})