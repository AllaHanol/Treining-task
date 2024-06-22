// Станція з продажу ремонтних дроїдів готова до запуску, залишилося написати програмне забезпечення для відділу продажів. Оголоси функцію makeTransaction(quantity, pricePerDroid, customerCredits), яка складає та повертає повідомлення про купівлю ремонтних дроїдів.

// Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:
// quantity — кількість замовлених дроїдів
// pricePerDroid — ціна одного дроїда
// customerCredits — сума коштів на рахунку клієнта

// Доповни функцію таким чином:
// Оголоси змінну для зберігання загальної суми замовлення (загальна вартість усіх замовлених дроїдів) і задай їй вираз розрахунку цієї суми.
// Додай перевірку, чи зможе клієнт оплатити замовлення:
// якщо сума до сплати перевищує кількість кредитів на рахунку клієнта, функція має повертати рядок "Insufficient funds!"
// в іншому випадку функція має повертати рядок "You ordered <quantity> droids worth <totalPrice> credits!", де <quantity> це кількість замовлених дроїдів, а <totalPrice> це їх загальна вартість.

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

// function makeTransaction(quantity, pricePerDroid, customerCredits) {
//     let totalPrice =(quantity * pricePerDroid);
    // if(customerCredits >= totalPrice){return`"You ordered ${quantity} droids worth ${totalPrice} credits!"`
    // } 
    // else {return`"Insufficient funds!"`
    // }
//     return customerCredits >= totalPrice ? `"You ordered ${quantity} droids worth ${totalPrice} credits!"`:`"Insufficient funds!"`;
// }
// console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
// console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
// console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

// Оголоси функцію formatMessage(message, maxLength), яка приймає рядок (параметр message) та перевіряє його довжину відповідно до заданої максимальної довжини (параметр maxLength).

// Доповни код функції таким чином, що:
// Якщо довжина рядка дорівнює або менша за maxLength, то функція повертає початковий рядок без змін.
// Якщо довжина перевищує maxLength, то функція обрізає рядок до maxLength символів, додає трикрапку "..." в кінці та повертає обрізану версію
// function formatMessage(message, maxLength) {
//     message = message.length <= maxLength ? message : maxLength.slice.
// }

// console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
// console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
// console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
// console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"

// const hours = 14;
// const minutes = 26;
// let timeString;
// if(minutes===0){
//     timeString=`${hours} г.`
// } else {`'${hours} г. ${minutes} хв.'`}

// console.log(timeString);
// const dog = {
//     name: "Mango",
//     age: 3,
//     isGoodBoy: true,
//   };
  
//   const json = JSON.stringify(dog);
//   console.log(json); // '{"name":"Mango","age":3,"isGoodBoy":true}'
  

//  const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const list = document.querySelector(".list");

// const markup = technologies
//   .map((technology) => `<li class="list-item">${technology}</li>`)
//   .join("");

// // Check the console, you'll see a single string with HTML tags
// console.log(markup);

// // Adding all the markup in one operation
// list.innerHTML = markup;
// const list = document.querySelector(".list");

// const newTechnologies = ["React", "TypeScript", "Node.js"];
// const markup = newTechnologies
//   .map((technology) => `<li class="list-item new">${technology}</li>`)
//   .join("");

// list.insertAdjacentHTML("beforeend", markup);
// list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");

// console.log(localStorage);

// const date = new Date();

// console.log(date);
// "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

// const date = new Date();

// console.log(date);
// "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

// - Використовуй prompt та повертай значення звідти.
// - Створи функцію, яка буде набувати значення з prompt і всередині якої буде проміс.
// Якщо значення не є числом, відхиляй проміс та логіруй "error".
// Якщо значення парне, вирішуй проміс та повертай "even" через 1 секунду.
// Якщо значення не парне, вирішуй проміс та повертай "odd" через 2 секунди.
// const data = Number(prompt(`введіть число:`));
// checkNumber(data).then(console.log)
// .catch(console.log);

// function checkNumber(data){
// return new Promise ((resolve, reject)=>{
//     if (!data ){
// reject ('error')
//     } else if(data%2 === 0){
//        setTimeout(() => {resolve(`even`),1000})  
//     } else {
//         ssetTimeout(() => {resolve(`odd`),2000})
//     }
// })
// }
// Створи перелік справ.
// Є інпут, який вводиться назва завдання.
// Після натискання на кнопку "Додати" завдання додається до списку #list.
// Поруч із кожним завданням знаходиться кнопка "Видалити", щоб можна було
// Забрати завдання зі списку.
// Список із завданнями має бути доступним після перезавантаження сторінки.

const refs = {
    taskForm: document.querySelector('.task-form'),
    listOfTasks: document.querySelector('.list-tasks'),
  };
  const STORAGE_KEY = 'data';
  let tasks = loadFromLocalStorage(STORAGE_KEY);
  renderTaskList(tasks);
  refs.taskForm.addEventListener('submit', onSubmitForm);
  refs.listOfTasks.addEventListener('click', onClickBtnRemove);
  function onSubmitForm(e) {
    e.preventDefault();
    const userInput = refs.taskForm.userTask.value.trim();
    tasks.push(userInput);
    renderTaskList(tasks);
    saveToLS(tasks);
  }

  function renderTaskList(tasks) {
    const markup = tasks
      .map(
        (task, index) =>
          `<li class="list-item">${task}<button type="button" data-id="${index}">X</button></li>`
      )
      .join('');
    refs.listOfTasks.innerHTML = markup;
  }
  function onClickBtnRemove(e) {
    if (e.target.nodeName !== 'BUTTON') {
      return;
    }
    const index = Number(e.target.dataset.id);
    tasks = tasks.filter((task, idx) => {
      return index !== idx;
    });
    renderTaskList(tasks);
    saveToLS(tasks);
  }
  function saveToLS(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }
  function loadFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
  }

  !==================
  // Задача про обробку даних користувача:
// Уявіть, що у вас є веб - форма, де користувачі можуть вводити свої дані, такі як ім'я, адреса електронної пошти та вік.
// Ваша задача - збирати ці дані, використовуючи асинхронну функцію, яка повертає проміс, який містить об'єкт з даними користувача.
// Потім зберіть ці об'єкти користувачів у масив та відобразіть їх на сторінці.

let users = []; // Функція для отримання даних користувача 
async function getUserData(event) { event.preventDefault(); // Запобігає перезавантаженню сторінки // Отримуємо дані з форми 
const name = document.getElementById('name').value; 
const email = document.getElementById('email').value; 
const age = document.getElementById('age').value; // Створюємо об'єкт користувача 
const user = { name, email, age }; // Повертаємо проміс, який містить об'єкт з даними користувача 
return new Promise((resolve) => { resolve(user); }); }
/ Обробник події для форми document.getElementById('userForm').addEventListener('submit', async (event) => { const user = await getUserData(event); // Додаємо користувача до масиву 
users.push(user); // Оновлюємо відображення даних користувачів на сторінці 
displayUsers(); }); // Функція для відображення даних користувачів 
function displayUsers() { const userList = document.getElementById('userList'); 
userList.innerHTML = ''; // Очищаємо попередній список // Створюємо елементи списку для кожного користувача 
users.forEach((user, index) => { const li = document.createElement('li'); 
li.textContent = `Ім'я: ${user.name}, Електронна пошта: ${user.email}, Вік: ${user.age}`; 
userList.appendChild(li); }); }


const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const delay = parseInt(form.elements.delay.value);
  const state = form.elements.state.value;
  createPromise(delay, state)
    .then((delay) => {
      iziToast.success({
        color: 'green',
				icon: 'ico-success',
        position: 'topRight',
        title: 'Success',
        titleColor: '#fff',
        titleSize: '16',
        titleLineHeight: '24',
        message: '`✅ Fulfilled promise in ${delay}ms`',
        messageColor: '#fff',
        messageSize: '16',
        messageLineHeight: '24',
        progressBarColor: '#326101',                   
        backgroundColor: '#59A10D',
      });
    })
    .catch((delay) => {
      iziToast.error ({
        color: 'red',
				icon: 'ico-error',
        position: 'topRight',
        title: 'Error',
        titleColor: '#fff',
        titleSize: '16',
        titleLineHeight: '24',
        message: '`❌ Rejected promise in ${delay}ms`',
        messageColor: '#fff',
        messageSize: '16',
        messageLineHeight: '24',
        progressBarColor: '#B51B1B',                   
        backgroundColor: '#EF4040',
      });
    });
});
function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}

const inputEl = document.querySelector('.form');


inputEl.addEventListener('submit', promiseFoo);

function promiseFoo(e) {
  e.preventDefault();

  let delay = e.target.delay.value;
  let status = e.target.state.value

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay)
      }
    }, delay);
  });

  createPromise(delay, state)
  .then((delay) => {
    iziToast.success({
      color: 'green',
      icon: 'ico-success',
      position: 'topRight',
      title: 'Success',
      titleColor: '#fff',
      titleSize: '16',
      titleLineHeight: '24',
      message: `✅ Fulfilled promise in ${delay} ms`,
      messageColor: '#fff',
      messageSize: '16',
      messageLineHeight: '24',
      progressBarColor: '#326101',
      backgroundColor: '#59A10D',
    });
  })
  .catch((delay) => {
    iziToast.error({
      color: 'red',
      icon: 'ico-error',
      position: 'topRight',
      title: 'Error!',
      titleColor: '#fff',
      titleSize: '16',
      titleLineHeight: '24',
      message: `❌ Rejected promise in ${delay} ms`,
      messageColor: '#fff',
      messageSize: '16',
      messageLineHeight: '24',
      progressBarColor: '#B51B1B',
      backgroundColor: '#EF4040',
    });
  })
};

function createPromise (delay, state){
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      if (state === 'fulfilled'){
        resolve(delay);
      } else {
        reject(delay);
      }
     }, delay);
    });
  }

  'use strict';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import '../css/timer.css';
import imageUrl from '../img/izitoast/bi_x-octagon.png'

const refs = {
  datetimePicker: document.querySelector('#datetime-picker'),
  input: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  daysEl: document.querySelector('[data-days]'),
  hoursEl: document.querySelector('[data-hours]'),
  minutesEl: document.querySelector('[data-minutes]'),
  secondsEl: document.querySelector('[data-seconds]'),
};

let initTime = 0;

// refs.startBtn.disabled = true;


// refs.startBtn.addEventListener('click', (e) => {
//     console.log(e.target);
//   const intervalId = setInterval(() => {
//     renderTime(initTime)
//   }, 1000);
  //скидання інтервалу після проходження
//   setTimeout(() => {
//     clearInterval(intervalId);
//   }, initTime - Date.now());
// });



// function convertMs(ms) {
  // Number of milliseconds per unit of time
  // const second = 1000;
  // const minute = second * 60;
  // const hour = minute * 60;
  // const day = hour * 24;

  // Remaining days
  // const days = Math.floor(ms / day);
  // Remaining hours
  // const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  // const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }
// function renderTime(time) {
//   const diff = initTime - Date.now();
//   const obj = convertMs(diff);
//   console.log(obj);
//   refs.daysEl.innerText = String(obj.days).padStart(2, '0');
//   refs.hoursEl.innerText = String(obj.hours).padStart(2, '0');
//   refs.minutesEl.innerText = String(obj.minutes).padStart(2, '0');
//   refs.secondsEl.innerText = String(obj.seconds).padStart(2, '0');
// }
// function validateTime (time){
//     return time <= Date.now()

// }

// const flatpickrOptions = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     initTime = selectedDates[0];

    
//     if (validateTime(initTime)) {
//       refs.startBtn.classList.remove('button-normal');
//       refs.startBtn.disabled = true;
//       refs.input.active = true;
      
//       iziToast.show({
//             position: 'topRight',
//             title: 'Error',
//             titleColor: '#fff',
//             titleSize: '16',
//             titleLineHeight: '24',
//             message: "Please choose a date in the future",
//             messageColor: '#fff',
//             messageSize: '16',
//             messageLineHeight: '24',
//             progressBarColor: '#B51B1B',                   
//             backgroundColor: '#EF4040',
//             iconUrl: imageUrl,
//             imageWidth: 24,
           
//     })
//         return
//     } else {
//         renderTime(initTime);
//         refs.startBtn.disabled = false;
//         refs.startBtn.classList.add('button-normal');
//         refs.input.activ = false;
        
//     }
//   },
// };
flatpickr('#datetime-picker', flatpickrOptions);