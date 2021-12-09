// є масив -
let users = [
    { name: 'vasya', age: 31, status: false },
    { name: 'petya', age: 30, status: true },
    { name: 'kolya', age: 29, status: true },
    { name: 'olya', age: 28, status: false },
    { name: 'max', age: 30, status: true },
    { name: 'anya', age: 31, status: false },
    { name: 'oleg', age: 28, status: false },
    { name: 'andrey', age: 29, status: true },
    { name: 'masha', age: 30, status: true },
    { name: 'olya', age: 31, status: false },
    { name: 'max', age: 31, status: true }
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє 
// до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

let header = document.createElement('header');
header.style.cssText = 'background-color:rgb(34, 31, 31); height:70px; margin-bottom:10px; display:flex; justify-content:flex-end;padding-right:20px';
let anchor = document.createElement('a');
anchor.href = 'favorites.html';
anchor.style.cssText = 'text-decoration:none'
let favoritsIcon = document.createElement('div');
favoritsIcon.style.cssText = 'background: url(./images/favoritIcon.jpg) no-repeat center;background-size:contain; width:70px; height:70px; display:flex;align-items: center;justify-content:center;'
let counter = document.createElement('p');
counter.style.cssText = 'margin:0; text-align:center;color:black;font-size:40px;'
let usersWrapper = document.createElement('div');
usersWrapper.style.cssText = 'border:1px solid black;display:flex;flex-wrap:wrap; gap:10px;padding:10px; max-width:1000px; justify-content: space-around; margin: 0 auto';
let counterValue = 0;
counter.innerText = counterValue;

favoritsIcon.appendChild(counter)
anchor.appendChild(favoritsIcon)
header.appendChild(anchor)

let userID = 1;

for (user of users) {
    let userDiv = document.createElement('div');
    userDiv.id = userID
    userDiv.style.cssText = 'display:flex; text-align:center; width:200px; padding:10px; row-gap:15px; flex-direction:column; border: 2px solid black';
    let title = document.createElement('h2');
    title.innerText = user.name;
    let subTitle = document.createElement('p');
    subTitle.innerText = user.age;
    let subscribe = document.createElement('p');
    subscribe.innerText = user.status;
    let userButton = document.createElement('button');
    userButton.innerText = 'Додати до обраних';
    user.favorite = false;
    user.id = userID;
    userID++

    userButton.onclick = addToFavorits

    userDiv.append(title, subTitle, subscribe, userButton);
    usersWrapper.appendChild(userDiv);
};

function addToFavorits() {
    this.classList.toggle('active');
    let id = this.parentElement.id;
    for (user of users) {
        if (user.id == id) {
            user.favorite = !user.favorite
        };
    };
    let favoritsUsers = users.filter(user => user.favorite === true);
    localStorage.setItem('favoritsUsers', JSON.stringify(favoritsUsers));
    counter.innerText = favoritsUsers.length
}

document.body.append(header, usersWrapper);
// -------------------------------------------------------------------------------------------------