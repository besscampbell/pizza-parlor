// Business Logic for Pizza------
function Pizza (toppings, size, cost) {
  this.toppings = toppings;
  this. size = size;
  this.cost = cost;
}

Pizza.prototype.calculateCost = function() {
   this.cost = (this.toppings.length * 2) + this.size
}

// Business Logic for Pizza Orders----
function PizzaOrder () {
  this.pizzas = []
}

PizzaOrder.prototype.addPizza = function(pizza) {
  this.pizzas.push(pizza);
}

PizzaOrder.prototype.grandTotal = function() {
  for (let i = 0; i< this.pizzas.length; i++) {
  let grandTotal = 0
  grandTotal = grandTotal + this.pizzas.cost
  }
  return grandTotal;
}



// User Interface Logic------
$(document).ready(function(){  
  $("#pizza-order").submit(function(event){
    event.preventDefault();
    $("#pizza-receipt").toggle();
    $("#pizza-order").hide();
    let pizza = new Pizza();
    pizza.toppings = []
    $("input:checkbox[name=topping]:checked").each(function(){
      const pizzaTopper = $(this).val();
      pizza.toppings.push(pizzaTopper);
    });
    pizza.size = parseInt($("#pizza-size").val());
    pizza.calculateCost();
    $("#pizza-total").text("$" + pizza.cost);
  });   
  $("#another-pizza").click(function(){
    $("#pizza-receipt").toggle();
    $("#pizza-order").show().trigger(reset);
    $("input:checkbox[name=topping]:checked").each(function(){
      const pizzaTopper = $(this).val("");
    });
  });
});