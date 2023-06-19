/* Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). 
Добавить созданные параграфы в div с классом numbers.*/
const numbersContainer = document.querySelector(".numbers")
    for(let i = 100; i >= 50; i-=10 );
    const paragraph = document.createElement("p");
numbersContainer.appendChild(paragraph);


/*Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container. 
Строки взять произвольные.*/
const strings = ['Hello', 'Study', 'Germany', 'Test', 'Home work'];
const stringsContainer = document.querySelector('.strings_container');
    for (let i = 0; i < strings.length; i++) {
    const paragraph = document.createElement('p');
    paragraph.textContent = strings[i];
stringsContainer.appendChild(paragraph);
}


/*Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age (данные взять произвольные) - 
и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. 
Добавить все карточки в div с классом users_container.*/
const users = [
    { first_name: 'Kamilla', last_name: 'Ovsjannikova', age: 26 },
    { first_name: 'Ivan', last_name: 'Petrov', age: 18 },
    { first_name: 'Katya', last_name: 'Ivanova', age: 33 },
    { first_name: 'Lana', last_name: 'Kosmos', age: 12 }
  ];
const usersContainer = document.querySelector('.users_container');
    for (let i = 0; i < users.length; i++) {
         if (users[i].age >= 18) {
        const card = document.createElement('div');
    card.classList.add('card');
    const cardContent = `<h3>${users[i].first_name} ${users[i].last_name}</h3> <p>Age: ${users[i].age}</p>`;
    card.innerHTML = cardContent;
    usersContainer.appendChild(card);
    }
    }
