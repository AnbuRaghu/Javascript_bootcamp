 const el = document.getElementById('home')
 console.log(el)

 const links = document.querySelectorAll('a');
// // console.log(link);

 links.forEach(link => {
   if (link.matches('a[href="/login"]')) {
     const loginLink = link;
     console.log(loginLink);  
   }
 })

const divs = document.getElementsByTagName('div')
// console.log(divs);

