// -створити форму з інпутами для name та age.
// При відправці форми записати об'єкт в localstorage

let form1Wrapper = document.createElement('div');
form1Wrapper.style.cssText = 'border:1px solid black';
let form1 = document.createElement('form');
form1.action = '#';
form1.name = 'user';
let nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.name = 'userName';
nameInput.placeholder = 'Name'
let ageInput = document.createElement('input');
ageInput.type = 'number';
ageInput.name = 'userAge';
ageInput.placeholder = 'Age'
let submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.innerText = 'Відправити';

let saveToLocalStorage = () => {
    let userID = new Date();
    let userName = document.user.userName.value;
    let userAge = document.user.userAge.value;
    let user = { name: userName, age: userAge };
    localStorage.setItem(`user${userID}`, JSON.stringify(user));
};
submitButton.onclick = saveToLocalStorage;

form1.append(nameInput, ageInput, submitButton);
form1Wrapper.appendChild(form1);
document.body.appendChild(form1Wrapper);
// --------------------------------------------------------------------------------------------


// -створити форму з інпутами для model,type та volume автівки.
// при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let form2Wrapper = document.createElement('div');
form2Wrapper.style.cssText = 'border:1px solid black; margin-top:10px';
let form2 = document.createElement('form');
form2.action = '#';
form2.name = 'car';
let modelInput = document.createElement('input');
modelInput.type = 'text';
modelInput.name = 'carModel';
modelInput.placeholder = 'Car';
let typeInput = document.createElement('input');
typeInput.type = 'text';
typeInput.name = 'carType';
typeInput.placeholder = 'Type';
let volumeInput = document.createElement('input');
volumeInput.type = 'number';
volumeInput.name = 'volume';
volumeInput.placeholder = 'Volume';
let submitButton2 = document.createElement('button');
submitButton2.type = 'submit';
submitButton2.innerText = 'Відправити';

let saveObjectToLocalStorage = () => {
    let carsFromLocal = localStorage.getItem('cars');
    let car = {
        model: modelInput.value,
        type: typeInput.value,
        volume: volumeInput.value,
    };
    if (carsFromLocal) {
        let parseCarsFromLocal = JSON.parse(carsFromLocal);
        parseCarsFromLocal.push(car);
        localStorage.setItem('cars', JSON.stringify(parseCarsFromLocal))

    } else {
        let cars = [];
        cars.push(car)
        localStorage.setItem('cars', JSON.stringify(cars))
    };
};

submitButton2.onclick = saveObjectToLocalStorage;

form2.append(modelInput, typeInput, volumeInput, submitButton2);
form2Wrapper.appendChild(form2);
document.body.appendChild(form2Wrapper);
// -------------------------------------------------------------------------------------