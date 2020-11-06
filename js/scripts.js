function Pizza (toppings, size, cost) {
  this.toppings = toppings;
  this. size = size;
  this.cost = cost;
}
let pizza = new Pizza(["cheese", "pepperoni", "anchovies"], 10, 0)

Pizza.prototype.calculateCost = function() {
   this.cost = (this.toppings.length * 2) + this.size
}
