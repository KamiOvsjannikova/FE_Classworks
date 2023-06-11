// poprositj polzovatelja vvesti ego rozdenija.
// v console otobrazitj ego vozrast
// 2000 -> 23

// const yearbirth = +prompt("Vvedite Vaw god rozdenija")
// console.log(2023 - yearbirth)

// Задача. Запросить у пользователя число.
// Если введенное пользователем число больше чем 100, то в консоли отображаем "Больше"
//const number = +prompt("vvedite chislo")
//if(number > 100) {
//console.log("Больше")
//} else if(number == 100) {
   // console.log("RAVNI")
//} else {
   // console.log("Menwe")
//}

const price = +prompt("enter price")
if(price > 1500) {
    console.log("Vawa skidka 20%")
} else if(price > 1000) {
    console.log("Vawa skidka 15%")
} else {
    console.log("Skidki net")
}

/*Логические операторы:
        && - логическое И - верно, если оба части выражения верны. 100 > 50 && 100 > 70
        || - логическое ИЛИ - верно, если хотя бы одна часть выражения равна.  100 > 50 || 100 > 200

        if(price > 1000 && price < 1500) {
            console.log("ваша скидка 15%")
        } else if(price > 1500) {
            console.log("ваша скидка 20%")
        } else {
            console.log("скидки нет")
        }
*/

// Задача. Если товар находится в категории phone или laptop, то в консоли отображать "скидка есть"
// const category1 = "phone"
// const category2 = "laptop"

// const product = "TV"
// if(product == category1 || product == category2) {
//     console.log('скидка есть')
// }

//const number = +prompt("vvedite chislo")
//if(number > 100) {
//console.log("Больше")
//} else if(number == 100) {
   // console.log("RAVNI")
//} else {
   // console.log("Menwe")
//}


//Esli bolwe 18, to razreweno 
//const yearbirth = +prompt("Vvedite Vaw god rozdenija")
//const age =2023 - yearbirth
//if(age >= 18) {
    //console.log("Razreweno")
//} else {
    //console.log("Zapreweno")
//}



//Условие - условное ветвление - if/else

   // if(условие) {
        // действие. будет выполнено только если условие верно
   // } else if(условие) {
        // действие. будет выполнено, если 1 условие неверное, а второе условие вреное
    //} else {
        // действие. будет выполненно только если условие неверно
   // }

   // = - оператор присваивания

   // операторы сравнение:
       // > - больше
       // < - меньше
       // >= - больше или равно
        //<= - меньше или равно
       // == - равно