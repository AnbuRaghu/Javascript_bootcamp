const user = {
  name: "Reed",
  username: "Reedbarger",
  email: "reed@gmail.com",
  details: {
    title: "Programmer"  
  }  
};

// const { title } = user.details
// const { name, details: { title} } = user;

function displayUserBio({ name, details: { title} }) {
  console.log(`${name} is a ${title}`); 
}

displayUserBio(user);

// const { username, email } = user;

// function displayUser() {
//   console.log(`username: ${username}, email: ${email}`);  
// }

// displayUser()