// reduce() syntax
shop = [
    {item: 'water', price: 1},
    {item: 'sandwich', price: 1}
]

const stockValue = shop.reduce((accumulator, stockItem) => {
  return accumulator + stockItem.price;  
}, 0)