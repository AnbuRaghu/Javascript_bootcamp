// Challenge: 
// Use reduce() to sum the weights of all the cars
// Stretch goal: 
// Use reduce to sum the weights of only the electric cars 

const cars = [
  { name: "Toyota", isElectric: false, weight: 1320 },
  { name: "Ford", isElectric: false, weight: 1400 },
  { name: "Volkswagen", isElectric: false, weight: 1370 },
  { name: "Honda", isElectric: false, weight: 1375 },
  { name: "Tesla", isElectric: true, weight: 1750 },
  { name: "BMW", isElectric: true, weight: 1350 },  
];


/*let results=cars.reduce( (accu,car) =>{
    let ele=car.isElectric
    if(ele){
        return accu + car.weight   
    }
 
},0)
console.log(results)*/
 //approach 1 for: Use reduce to sum the weights of only the electric cars : i used here js chaining 1st filtered and reduced
/*let results=cars.filter(el => el.isElectric).reduce((acc,car)=>{
    return acc +car.weight
},0)
console.log(results)*/



 //approach 2 for: Use reduce to sum the weights of only the electric cars 

const results = cars.reduce((accumulator, car) => {
    if (car.isElectric) {
        return accumulator + car.weight;
    } else {
        return accumulator;
    }
}, 0)


console.log(results)