// DOM и навигация по html

/*
    числа
    строки
    буль
    объекты (массивы) - 
        let user = {
            name: "Arsen"
        }

    main = {
        className: "main"
        innerHTML: "<h1></h1>"
        style: {
            backgroundColor: "red"
        }
    }
*/
//po tegu//
/* const title = document.querySelector("h1")
console.log(title.innerText)
title.innerText = "Hallo Kami"
*/

//po klassu//
/*const descr = document.querySelector(".descr")
connsole.log(descr)

querySelector() - поиск первого элемента по селектору
querySelectorAll() - поиск всех элементов по селектору 
/* 

  функция

  function greeting() {
    console.log("Hello")
  }

  метод

  let user = {
    key: value
    greeting: function () {
        console.log("Hello")
    }
  }
*/

/*innerText - свойство получить или назначить текст внутри тега
    title = {
        innerText: "Hello World"
    }
    */


   //zadachi
   // Найти элементы
// а) найти тег ссылки на гугл
// б) найти тег с классом footer
// в) найти заголовок в main

/* a) const googlelink = document.querySelector("main a")
console.log(googlelink)
   б) const footerText = document.querySelector(".footer")
   в) const ttitle1 = document.querySelector("h2") 
   */

    //zadachi
// 1.Поменять текст внутри ссылки гугл на "Facebook"
// 2.Поменять текст внутри тега с классом footer на Hello
// 3.Поменять текст внутри h2 на TITLE

// 1. googlelink.innerText = "Facebook"
// 2.footerText.innerText = "footer"
// 3.title1.innerText = "TITLE"


/*dobavitj k tekstu vnutri h1. Eto moj pervij zagalovok
const title = document.querySelector("h1")
title.innerText += ". Eto moj pervij zagalovok" */

// Задача. Поменять текст во всех тегах p на "Привет. Как дела?"
/*const texts = document.querySelectorAll("p")
texts[0].innerText = "Привет. Как дела?"
texts[1].innerText = "Привет. Как дела?"
texts[2].innerText = "Привет. Как дела?"*/
// Переписать код используя цикл for
/*const texts = document.querySelectorAll("p")
texts[0].innerText = "Привет. Как дела?"
texts[1].innerText = "Привет. Как дела?"
texts[2].innerText = "Привет. Как дела?"

for(let i = 0; i < texts.length; i++) {
   texts[i].innerText = "Привет. Как дела?"
}
*/
/*
    nodeList.length - длина списка или количество найденных элементов
*/

// const array = [10, 20, 30, 50]
// console.log(array)

/*
    const names = ["Arsen", "Lana", "Bogdan"]
    const numbers = [10, 20, 30, 40, 50]

    const texts = [
        {
            innerText: "Lorem...."
        },
        {
            innerText: "Lorem...."
        }, 
        {
            innerText: "Lorem...."
        }
    ]
    texts[0].innerText
    texts.innerText
*/
// pomenjat tekst u tega googlelink na "FACEBOOK" i pomenjat ssilku na "facebook.com"
//const googlelink = document.querySelector("main a")
//googlelink.innerText = "Facebook"
//googlelink.setAttribute("href", "https://fb.com")
//const href = googlelink.getAttribute("href")
//console.log(href)
/*
getAttribute(attr) - метод, для получения значение атрибута тега
        attr - название атрибута, значение которого мы хотим получить
    setAttribute(attr, value) - метод, для назначения атрибута
        attr - название атрибута, значение которого мы хотим изменить
        value - значение, на которое хотим поменять

*/
// Задача. Поменять у всех ссылок текст на Instagram
// Ссылку у всех тегов поменять на https://instagram.com

const links = document.querySelectorAll("a") // [{}, {}]
for(let i = 0; i < links.length; i++) {
    links[i].innerText = "Instagram"
    links[i].setAttribute("href", "https://instagram.com")
}
