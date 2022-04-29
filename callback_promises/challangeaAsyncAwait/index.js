// Challenge: 
// Rewrite the GET API call from the previous challenge using async-await


// Challenge: 
/*fetch('https://jsonplaceholder.typicode.com/users/3')
  .then(response => {
      if (!response.ok) {
        throw new Error(response.status);  
      }
      
      return response.json()
  })
  .then(person => console.log(`${person.name} works for ${person.company.name}`))
  .catch(err => console.error(err))*/
  
  async function getData(){
    
    try{
      const res= await fetch('https://jsonplaceholder.typicoe.com/users/3')
      const parsedData= await res.json()
     
      console.log(`${parsedData.name} works for ${parsedData.company.name}`)
      if(!res.ok){
           throw new Error(res.status);  
      }
    }
    catch(error){
      console.log(error)
    }
  }
  
getData()