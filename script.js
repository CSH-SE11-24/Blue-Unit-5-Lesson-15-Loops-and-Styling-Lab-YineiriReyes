console.log("Script running test...");
// Task 1: All off button
// Select the all off button and console log to confirm you selected successfully
let buttons=document.querySelectorAll("#clear")
console.log(buttons)

// Select all the lightbulb p tags and console log the length to confirm you selected successfully
let ptags=document.querySelectorAll(".lightbulb")
console.log(ptags)

// Add an event listener such that when the all off button is clicked, the background color of all the lightbulbs becomes black
buttons[0].addEventListener("click",function(event){
  console.log("buttonsclick")
  for(let i=0; i<ptags.length; i++){
    ptags[i].style.backgroundColor="black"
  }

})




// Task 2: CSH Mode
// Select the CSH mode button and console log to confirm you selected successfully
// Make sure to add an ID so you can select this button
let button2=document.querySelector("#idk")
console.log(button2)

// Select the body and console log to confirm you selected successfully
let body=document.querySelector("body")

// Add an event listener such that when your mouse is over CSH mode button, the background color of body becomes green and the text of the lightbulb tags becomes "💻"
button2.addEventListener("mouseover",function(event){
  body.style.backgroundColor="green"
  for(let i = 0; i < ptags.length; i++){
       ptags[i].textContent = "💻"
  }

})




// Add an event listener such that when your mouse is off CSH mode button, the background color of body becomes black again and the text of the lightbulb tags goes back to "💡"
button2.addEventListener("mouseout",function(event){
  body.style.backgroundColor="black"
 for(let i=0; i<ptags.length; i++){

     ptags[i].textContent="💡"
 }
})



// Task 3: On and off features
// Add an event listener to each lightbulb such that when you click it, the background color of that p tag changes to white
for(let i=0; i<ptags.length; i++){
  ptags[i].addEventListener("click",function(event){
    ptags[i].style.backgroundColor="white"
  })
}






// Extra credit: use classList and toggle to the lightbulb class to toggle on AND off when you click each lightbulb






