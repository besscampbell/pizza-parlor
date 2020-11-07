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
  this.pizzas = [];
}

PizzaOrder.prototype.addPizza = function(pizza) {
  this.pizzas.push(pizza);
}

PizzaOrder.prototype.grandTotal = function() {
  let grandTotal = 0;
  for (let i = 0; i< this.pizzas.length; i++) {
    grandTotal += this.pizzas[i].cost;
  }
  return grandTotal;
}


// User Interface Logic------
let pizzaOrder = new PizzaOrder();

function displayPizza(pizzaOrder) {
  let pizzaList = $("ul#pizzas");
  let htmlForPizza = "";
  pizzaOrder.pizzas.forEach(function(pizza){
    htmlForPizza += "<li> $" + pizza.cost + "</li>";
  });
  pizzaList.html(htmlForPizza);
};

$(document).ready(function(){  
  $("#pizza-order").submit(function(event){
    event.preventDefault();
    $("#pizza-receipt").toggle();
    $("#pizza-order").hide();
    let pizza = new Pizza();
    pizza.toppings = [];
    $("input:checkbox[name=topping]:checked").each(function(){
      const pizzaTopper = $(this).val();
      pizza.toppings.push(pizzaTopper);
    });
    pizza.size = parseInt($("#pizza-size").val());
    pizza.calculateCost();
    pizzaOrder.addPizza(pizza);
    const total = pizzaOrder.grandTotal();
    console.log(pizzaOrder);
    $("#pizza-total").text("$" + total);
    displayPizza(pizzaOrder);
  });   
  $("#another-pizza").click(function(){
    $("#pizza-receipt").toggle();
    $("#pizza-order").show().trigger("reset");
  });
});