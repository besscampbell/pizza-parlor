# Georgie's Pizza Palace

####  Customize your own pie at Georgie's Pizza Palace, 11.06.2020 

#### By  **Bess Campbell** 

## Description

 Tired of ordering a standard pizza that doesn't come with exactly what you want? At Georgie's Pizza Palace ordering website you can order a pizza from your couch with exactly what you want on it! You want a cowboy pizza with anchovies, YOLO! You can customize your pie however you like at Georgie's. 

 
## Setup/Installation Requirements


* GitHub repository link: https://github.com/besscampbell/pizza-parlor.git
* Type the GitHub repository link into your browser
* Click on the green 'Code' button 
* Choose the Download ZIP option
* Once it has downloaded, open the file
* Double-click the 'index.html' file or open the file in your browser

## Testing
 
 Describe: Pizza.prototype.calcualteCost()

 Test: "It should charge the guest for a small pizza if the guest orders a small." 
 Expect: (calculateCost(small)).toEqual(+10)

 Test: "It should charge the guest for 3 toppings when they choose three toppings." 
 Expect: (calculateCost(3)).toEqual(+(3*2)) 

 Describe: PizzaOrder.prototype.addPizza()
 
 Test: "It should push the pizzas into the pizza order constructor."
 Expect: (.addPizza(pizza1)).toEqual(pizzaOrder.pizza1)

 Describe: PizzaOrder.prototype.grandTotal()

 Test: "It should calculate the total of one pizza that costs $26 and another pizza that cost $18."
 Expect: (grandTotal(26+18)).toEqual(44)


## Known Bugs

 No known bugs. 

## Support and contact details

 _Please email <bess.k.campbell@gmail.com> if you have any issues._

## Technologies Used
 
 * VisualStudio Code
 * Git
 * GitHub
 * HTML 
 * CSS 
 * Bootstrap
 * JavaScript
 * jQuery 

### License

[MIT license](https://opensource.org/licenses/MIT)

## Copyright (c) 2020 **_Bess Campbell_**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.