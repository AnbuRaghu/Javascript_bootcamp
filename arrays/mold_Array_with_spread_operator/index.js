const breakfastMenuIdeas = ["Buckwheat Pancakes"];
const dinnerMenuIdeas = ["Glazed Salmon", "Meatloaf", "American Cheeseburger"];

const allMenuIdeas = [
    ...breakfastMenuIdeas, 
    "Harvest Salad", 
    "Southern Fried Chicken",
    ...dinnerMenuIdeas
];


// how to update or change an array element name first we have to findindex of the element and then we have to spread that aaray and slice untill that element and the we have to spread again the array and slice the rest of the array
const saladIndex = allMenuIdeas.findIndex(idea => idea === 'Harvest Salad');

const finalMenuIdeas = [
  ...allMenuIdeas.slice(0, saladIndex),// it removes the 'Harvest Salad' and we add the changing element  "Garden Salad", snd we slice rest element
  "Garden Salad",
  ...allMenuIdeas.slice(saladIndex + 1) // it gives the next element
];

console.log(finalMenuIdeas);