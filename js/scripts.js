function Pizza (toppings, size, cost) {
  this.toppings = toppings;
  this. size = size;
  this.cost = cost;
}
// let pizza = new Pizza(["cheese", "pepperoni", "anchovies"], 10, 0)

Pizza.prototype.calculateCost = function() {
   this.cost = (this.toppings.length * 2) + this.size
}


$(document).ready(function(){
  $("#pizza-order").submit(function(event){
    event.preventDefault();
    $("#pizza-total").show();
    let pizza = new Pizza();
    pizza.toppings = []
    $("input:checkbox[name=topping]:checked").each(function(){
      const pizzaTopper = $(this).val();
      pizza.toppings.push(pizzaTopper);
    });
    pizza.size = parseInt($("#pizza-size").val());
    pizza.calculateCost();
    console.log(pizza);
    $("#pizza-total").text("$" + pizza.cost);
  });
});