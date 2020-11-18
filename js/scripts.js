// Business Logic for Pizza------
function Pizza (toppings, size, cost) {
  this.toppings = [];
  this. size = size;
  this.cost = 0;
}

Pizza.prototype.calculateCost = function() {
   this.cost = (this.toppings.length * 2) + this.size
}

// Business Logic for Pizza Orders----
function PizzaOrder () {
  this.pizzas = [];
  this.total = 0;
}

PizzaOrder.prototype.addPizza = function(pizza) {
  this.pizzas.push(pizza);
}

PizzaOrder.prototype.grandTotal = function() {
  this.total = 0;
  for (let i = 0; i< this.pizzas.length; i++) {
    this.total += this.pizzas[i].cost;
  }
}

// User Interface Logic------
let pizzaOrder = new PizzaOrder(0);

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
    $("input:checkbox[name=topping]:checked").each(function(){
      const pizzaTopper = $(this).val();
      pizza.toppings.push(pizzaTopper);
    });
    pizza.size = parseInt($("#pizza-size").val());
    pizza.calculateCost();
    pizzaOrder.addPizza(pizza);
    pizzaOrder.grandTotal();
    $("#pizza-total").text("$" + pizzaOrder.total);
    displayPizza(pizzaOrder);
  });   
  $("#another-pizza").click(function(){
    $("#pizza-receipt").toggle();
    $("#pizza-order").show().trigger("reset");
  });
  $("#checkout").click(function(){
    $("#checkout-questions").hide();
    $("#order-info").show();
  });
});