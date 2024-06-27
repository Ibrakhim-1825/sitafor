 let box = document.querySelector(".box")
 let elcard1 = document.querySelector(".card1")
 let elcard2 = document.querySelector(".card2")
 let elcard3 = document.querySelector(".card3")

 let changeColor = () => {
    setTimeout(() => {
        elcard1.classList.add("red")
        elcard2.classList.remove("yellow")
        elcard3.classList.remove("green")
    }, 0),
    setTimeout(() => {
        elcard1.classList.remove("red")
        elcard2.classList.add("yellow")
        elcard3.classList.remove("green")
    }, 2000),
    setTimeout(() => {
        elcard1.classList.remove("red")
        elcard2.classList.remove("yellow")
        elcard3.classList.add("green")
    }, 4000)
 }
 changeColor()

 setInterval(() => {
    changeColor()
 }, 6000)