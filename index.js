///PROBLEM 1///////////////

// const food = {
//    name : "Jollof Rice",
//    price : 2500,
//    restaurant : "peppys kitchen"
// }

// function describFood(){
//   return "This " + food.name + " is going for " + food.price + " and you can get it at " + food.restaurant
// }

// console.log(describFood(food))


///PROBLEM 2/////////////////

// const food = {
//     name : "Egusi Spoup",
//     price : 3000
// }

// function isAffordable(food, budget){
//   if(budget > food.price){
//     return "Yes can afford this"
//   }else{
//     return "This is above your budget"
//   }
// }

// console.log(isAffordable(food, 4000))//YES YOU CAN AFFORD THIS
// console.log(isAffordable(food,1500))//THIS IS ABOVE YOUR BUDGET


///PROBLEM 3 //////////////////

// const restaurant = {
//   name : "peppys kitchen",
//   openHour : 9,
//   closeHour : 17
// }

// function checkStatus(restaurant) {
//   let date = new Date().getHours()

//   if (date >= restaurant.openHour && date < restaurant.closeHour) {
//     return restaurant.name + " is now open"
//   } else if (date < restaurant.openHour) {
//     return restaurant.name + " is not yet open, opens at " + restaurant.openHour
//   } else {
//     return restaurant.name + " is closed, opens tomorrow at " + restaurant.openHour
//   }
// }

// console.log(checkStatus(restaurant))


////PROBLEM 4////////////

// const food = {
//   name : "bread",
//   price : 300
// }

// let cost_per_item = 0
// let total_cost = 0

// function generateReceipt(name, food, quantity){
//   return`
//     customer : ${name}
//     food name : ${food.name}
//     food price : ${food.price}
//     food quantity : ${quantity}
//     total : ${food.price * quantity}
//   `
// }

// console.log(generateReceipt("auta", food, 2))


///PROBLEM 5////////////

// const food = {
//   name : "egusi",
//   price : 4500
// }

// function getPriceCategory(food){
//   if(food.price < 1000){
//     return "Budget Friendly"
//   }else if(food.price >= 1000 && food.price <=2500){
//     return "Regular"
//   }else{
//     return "Premium"
//   }
// }

// console.log(getPriceCategory(food))


///PROBLEM 6////////////

// const food1 = {
//   name : "Jollof Rice",
//   price : 500
// }

// const food2 = {
//   name : "White Rice",
//   price : 500
// }

// function cheaperOption(food1, food2){
//   if(food1.price > food2.price){
//     return food2.name + " is the cheaper option"
//   }else if(food2.price > food1.price){
//     return food1.name + " is the cheaper option"
//   }else if(food1.price == food2.price){
//     return food1.name + " and " + food2.name + " are equal in price"
//   }
// }

// console.log(cheaperOption(food1, food2))



// ///////////////////TASK 1
// function fetchName(){
//     console.log(document.getElementById("restaurant-name").textContent)
    
// }

  

/// ///////////////////TASK 2



//  function openRestaurant(){
//     console.log(document.getElementById("status").textContent = "Open")
//  }

//  function closeRestaurant(){
//      console.log(document.getElementById("status").textContent = "Close")
//  }



/// //////////////////////////////////TASK 3


// function addItem(){
//     let list_container = document.getElementById("cart-list")
// let new_list = document.createElement("li")
//   new_list.textContent = "Jollof Rice - N2,800"
//   list_container.appendChild(new_list)
//   console.log(list_container)
// }




// ////////////////////////////////TASK 4

// function removeBanner(){
//     document.getElementById("promo-banner").remove()
// }



// ///////////////////////////////////TASK 5

// function showTotal(){
//     let price = parseInt(document.getElementById("food-price").textContent)
//     let total = document.getElementById("total-display")

//     total.innerHTML = `Total: $${price * 3}`
// }



// //////////////////////////////TASK 6

// function addFoodCard(){
//     let main_section = document.getElementById("menu-section")
//     let newDiv = document.createElement("div")

//     newDiv.innerHTML = `
//     <p><strong>Food Name:</strong>Egusi</p>
//     <p><strong>Food Price:</strong>1600</p>
//     `

//     main_section.appendChild(newDiv)
// }


///// LEARNING FOREACH METHOD////////////////////////

// let prices = [2800, 1500, 500];
// let sum = 0
// let card = ""
// prices.forEach((item)=>{
    
//    sum += item
//    card += `
//     Item ${item + 1} : ${item}
//    `
// })

// card += `
//  Total ${sum}
// `

// console.log(card)


/// ////////////////////////////TASK 1

// const foods = ["Jollof Rice", "Egusi Soup", "Suya Chicken", "Chapman", "Puff Puff"]
// let text = ""
// foods.forEach((item) =>{
//     text += item + "\n"
// })

// console.log(text)


/// ////////////////////////////////TASK 2

// const prices = [2800, 1800, 2500, 600, 900]
// let num = ""
// prices.forEach((item) =>{
//     num += "₦"+item + "\n"
// })

// console.log(num)




/// /////////////////////////TASK 3

// const menuItems = [
//   { name: "Jollof Rice", price: 2800 },
//   { name: "Egusi Soup", price: 1800 },
//   { name: "Suya Chicken", price: 2500 }
// ]

// let text = ""

// menuItems.forEach((item) =>{
//   text += item.name + " costs " + " ₦" + item.price + "\n"
// })

// console.log(text)



/// //////////////////////////////////TASK 4

// const menuItems = [
//   { name: "Jollof Rice", price: 2800 },
//   { name: "Egusi Soup", price: 1800 },
//   { name: "Suya Chicken", price: 2500 }
// ]

// let num = 0


// menuItems.forEach((item) =>{
//     num += item.price
// })

// console.log("Total :" +  num )



/// ////////////////////TASK 5

// const menuItems = [
//   { name: "Jollof Rice", price: 2800, available: true },
//   { name: "Egusi Soup", price: 1800, available: false },
//   { name: "Suya Chicken", price: 2500, available: true },
//   { name: "Asun", price: 3000, available: false },
//   { name: "Chapman", price: 600, available: true }
// ]

// let text = ""

// menuItems.forEach((item) =>{
//     if(item.available){
//         text += "Name: " + item.name + " " + "Price: " + item.price + "\n"
//     }
// })

// console.log(text)


/// ///////////////////////////////TASK 6

// const foods = ["Jollof Rice", "Egusi Soup", "Suya Chicken"]

// let list_container = document.getElementById("food-list")

// foods.forEach((item) =>{
//     let newList = document.createElement("li")
//     newList.innerText += item
//     list_container.appendChild(newList)
// })

