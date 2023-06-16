// Задача. при клике на кнопку btn, в консоли отобразить "приветствую!"
/*
    addEventListener - метод, который позволяет вызвать функцию по происшествии какого-либо события

    addEventListener(type, cb) - принимает два аргумента
    type - тип события - click, scroll, submit, change, input
    cb - callback function - функция обратного вызова, функцию вызываем не мы, а какая-то другая функция
*/ 

/* const btn = document.querySelector(".btn")
btn.addEventListener("click", function() {
    console.log("приветствую")
})
*/
// Задача. При нажатии на кпноку btn увеличивать значение в p.text на 1  /*    1. Создаем переменную для хранения текущего значения числа    2. При клике увеличиваем переменную на 1        2.1. Повесить слушатель события на кнопку        2.2. Вызывать cb функцию, которая увеличивает переменную на 1    3. меняем текст в теге p на значение переменной */
/* const btn = document.querySelector(".btn")
    const text = document.querySelector(".text")
    let num = 0 // число, которое хранит текущее значение 
    
    btn.addEventListener("click", function() {
        num++ // num = num + 1
        text.innerText = num
    })
    */
// Задача а при нажатии на минус 1 уменьшать значение в p.text на 1
/* const btn = document.querySelector(".btn")
const text = document.querySelector(".text")
const btnMinus = document.querySelector(".btn-minus")
let num = 0 

btn.addEventListener("click", function() {
    num = num + 1
    text.innerText = num
})

btnMinus.addEventListener("click", function() {
    if(num > 0) {
        num = num - 1
        text.innerText = num
    }
})
*/
//nazatie na knopku red menjatsja body cvet na krasnij
const redBtn = document.querySelector(".red-btn")
redBtn.addEventListener("click",function() {
    document.body.style.backgroundColor = "red"
})
//pomenjat cvet knopki
redBtn.addEventListener("click",function() {
    document.body.style.backgroundColor = "red"
    redBtn.style.color = "black"
})

const greenBtn = document.querySelector(".green-btn")
greenBtn.addEventListener("click",function() {
    document.body.style.backgroundColor = "green"
})

const blueBtn = document.querySelector(".blue-btn")
blueBtn.addEventListener("click",function() {
    document.body.style.backgroundColor = "blue"
})

const yellowBtn = document.querySelector(".yellow-btn")
yellowBtn.addEventListener("click",function() {
    document.body.style.backgroundColor = "yellow"
})

img.addEventListener("click", function () {
    document.body.style.backgroundImage = "url('./')";
  });