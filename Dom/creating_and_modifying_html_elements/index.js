const newPost = document.createElement('div');
newPost.className = 'top-post';
newPost.innerHTML = "<strong>This is a new post</strong>"

// document.body.prepend(newPost);
const post = document.querySelector('.post');

post.prepend(newPost);