class Product {
  constructor(name, price, discountable) {
    this.name = name;
    this.price = price;
    this.discountable = discountable;  
  }  
  
  isDiscountable() {
    return this.discountable;  what about inheriting a method we have to use super key word and the name of function to call the function in child class
  }
}

class SaleProduct extends Product {
  constructor(name, price, discountable, percentOff) {
     super(name, price, discountable);
     this.percentOff = percentOff; 
  }  
  
  getSalePrice() {
       what about inheriting a method we have to use super key word and the name of function to call the function in child class
     if (super.isDiscountable()) {
       return this.price * ((100 - this.percentOff) / 100);
     } else {
        return `${this.name} is not eligible for a discount`;
     }
  }
}

const saleProduct1 = new SaleProduct("Coffee Maker", 99, false, 20);
console.log(saleProduct1.getSalePrice());

// React 
// https://reactjs.org