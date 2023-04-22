const userData = { 
  username: "Reed",
  title: "JavaScript Programmer",
  getBio: () => {
    console.log(`User ${this.username} is a ${this.title}`);
  },
  askToFriend() {
    const that =this
    setTimeout(() => {
      console.log(`Would you like to friend ${that.username}?`);   
    }, 2000);  
  } 
}

console.log(this);

 userData.getBio();
 userData.askToFriend()