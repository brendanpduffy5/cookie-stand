'use strict';

// >>>>>>>>> GLOBAL VARIABLES / WINDOW INTO DOM
// LOCATIONS: Seattle,Tokyo, Dubai, Paris, Lima;
let sectionElem = document.getElementById('Seattle-profile');
// let sectionElem2 = document.getElementById('Tokyo-profile');
// let sectionElem3 = document.getElementById('Dubai-profile');
// let sectionElem4 = document.getElementById('Paris-profile');
// let sectionElem5 = document.getElementById('Lima-profile');


let cookiesPerHour = [];
// let cookiesPerHourTokyo = [];
// let cookiesPerHourDubai = [];
// let cookiesPerHourParis = [];
// let cookiesPerHourLima = [];

let allCookieStores = [];

function randomCustomerNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// >>>>>>> CONSTRUCTOR

function CookieStore(name, customerNumber, cookieNumber, hours, total){

  this.name = name;
  this.customerNumber = customerNumber;
  this.cookieNumber = cookieNumber;
  this.hours = hours;
  this.cookiesPerHour = cookiesPerHour;
  this.total = total;

  allCookieStores.push(this);
}

let seattleCount = new CookieStore('Seattle', 0, 0, ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'], 0, 0);
let tokyoCount = new CookieStore('Tokyo', 0, 0, ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'], 0);
let dubaiCount = new CookieStore('Dubai', 0, 0, ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'], 0);
let parisCount = new CookieStore('Paris', 0, 0, ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'], 0);
let limaCount = new CookieStore('Lima', 0, 0, ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'], 0);

CookieStore.prototype.getCookieNumber = function(){
  for(let i = 0; i < 14; i++){
    this.cookieNumber = Math.floor(randomCustomerNumber(23,65) * 6.3);
    cookiesPerHour.push(this.cookieNumber);
  }
},

CookieStore.prototype.calculateTotal = function(){
  for(let i = 0; i < this.cookiesPerHour.length, i++;){
    this.total += this.cookiesPerHour[i];
    console.log(this.total);
  }
},
// let seattleCount = {
//   name: 'Seattle',
//   customerNumber: 0,
//   cookieNumber: 0,
//   hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   getCookieNumber: function(){
//     for(let i = 0; i < 14; i++){
//       this.cookieNumber = Math.round(randomCustomerNumber(23,65) * 6.3);
//       cookiesPerHourSeattle.push(this.cookieNumber);
//     }
//   },
//   calculateTotal: function(){
//     for(let j = 0; j < cookiesPerHourSeattle.length, j++;){
//       this.total += this.cookiesPerHourSeattle[j];
//     }
//   },

CookieStore.prototype.render = function(){
  let articleElem = document.createElement('article');
  sectionElem.appendChild(articleElem);

  // let h3Elem = document.createElement('h3');
  // h3Elem.textContent = this.name;
  // articleElem.appendChild(h3Elem);

  // let pElem2 = document.createElement('p');
  // pElem2.textContent = `The ${this.name} shop sold the following cookies per hour:`;
  // articleElem.appendChild(pElem2);

  // BORROWED THIS BELOW TO TEST TABLE

  // let ulElem = document.createElement('ul');
  // articleElem.appendChild(ulElem);
  // for(let i = 0; i < this.hours.length; i++){
  //   let liElem = document.createElement('li');
  //   liElem.textContent = `${this.hours[i]}: ${cookiesPerHour[i]} cookies `;
  //   ulElem.appendChild(liElem);
  // }
  // let liElem2 = document.createElement('li');
  // ulElem.appendChild(liElem2);
  // liElem2.textContent = `Total: ${this.total}`;

  //>>>>>>> RENDER W TABLE

  let tableElem = document.createElement('table');
  articleElem.appendChild(tableElem);

  let row1= document.createElement('tr');
  tableElem.appendChild(row1);
  let th1Elem = document.createElement('th');
  row1.appendChild(th1Elem);
  th1Elem.textContent = "_____";
  let th2Elem = document.createElement('th');
  row1.appendChild(th2Elem);
  th2Elem.textContent = '6:00 am';
  let th3Elem = document.createElement('th');
  row1.appendChild(th3Elem);
  th3Elem.textContent = '7:00 am';
  let th4Elem = document.createElement('th');
  row1.appendChild(th4Elem);
  th4Elem.textContent = '8:00 am';
  let th5Elem = document.createElement('th');
  row1.appendChild(th5Elem);
  th5Elem.textContent = '9:00 am';
  let th6Elem = document.createElement('th');
  row1.appendChild(th6Elem);
  th6Elem.textContent = '10:00 am';
  let th7Elem = document.createElement('th');
  row1.appendChild(th7Elem);
  th7Elem.textContent = '11:00 am';
  let th8Elem = document.createElement('th');
  row1.appendChild(th8Elem);
  th8Elem.textContent = '12:00 pm';
  let th9Elem = document.createElement('th');
  row1.appendChild(th9Elem);
  th9Elem.textContent = '1:00 pm';
  let th10Elem = document.createElement('th');
  row1.appendChild(th10Elem);
  th10Elem.textContent = '2:00 pm';
  let th11Elem = document.createElement('th');
  row1.appendChild(th11Elem);
  th11Elem.textContent = '3:00 pm';
  let th12Elem = document.createElement('th');
  row1.appendChild(th12Elem);
  th12Elem.textContent = '4:00 pm';
  let th13Elem = document.createElement('th');
  row1.appendChild(th13Elem);
  th13Elem.textContent = '5:00 pm';
  let th14Elem = document.createElement('th');
  row1.appendChild(th14Elem);
  th14Elem.textContent = '6:00 pm';
  let th15Elem = document.createElement('th');
  row1.appendChild(th15Elem);
  th15Elem.textContent = '7:00 pm';
  let th16Elem = document.createElement('th');
  row1.appendChild(th16Elem);
  th16Elem.textContent = 'Daily Location Total';


  let row2= document.createElement('tfoot');
  tableElem.appendChild(row2);

  let td1Elem = document.createElement('td');
  row2.appendChild(td1Elem);
  td1Elem.textContent = this.name;

  // let td2Elem = document.createElement('td');
  // row2.appendChild(td2Elem);
  // td2Elem.textContent = '6:00 am';

  // let td2Elem = document.createElement('td');
  // row2.appendChild(td2Elem);
  // for(let i = 0; i < this.hours.length; i++){
  //   let td2Elem = document.createElement('td');
  //   td2Elem.textContent = ` ${cookiesPerHour[i]} `;
  //   td2Elem.appendChild(td1Elem);
  // }

  let tfootElem = document.createElement('td');
  row2.appendChild(tfootElem);
  for(let i = 0; i < this.hours.length; i++){
    let tdElem = document.createElement('td');
    tdElem.textContent = ` ${cookiesPerHour[i]} `;
    tfootElem.appendChild(tdElem);
  }
  let tfootElem2 = document.createElement('td');
  tfootElem.appendChild(tfootElem2);
  tfootElem2.textContent = ` ${this.total} `;

};




// let tokyoCount = {
//   name: 'Tokyo',
//   customerNumber: 0,
//   cookieNumber: 0,
//   hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   getCookieNumber: function(){
//     for(let i = 0; i < 14; i++){
//       this.cookieNumber = Math.round(randomCustomerNumber(3,24) * 1.2);
//       cookiesPerHourTokyo.push(this.cookieNumber);
//     }
//   },
//   render: function(){
//     let articleElem = document.createElement('article');
//     sectionElem.appendChild(articleElem);

//     let h3Elem = document.createElement('h3');
//     h3Elem.textContent = this.name;
//     articleElem.appendChild(h3Elem);

//     let pElem2 = document.createElement('p');
//     pElem2.textContent = `The ${this.name} shop sold the following cookies per hour:`;
//     articleElem.appendChild(pElem2);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);
//     for(let i = 0; i < this.hours.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent =  `${this.hours[i]}: ${cookiesPerHourTokyo[i]} cookies `;
//       ulElem.appendChild(liElem);
//     }
//   }
// };
// let dubaiCount = {
//   name: 'Dubai',
//   customerNumber: 0,
//   cookieNumber: 0,
//   hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   getCookieNumber: function(){
//     for(let i = 0; i < 14; i++){
//       this.cookieNumber = Math.round(randomCustomerNumber(11,38) * 3.7);
//       cookiesPerHourDubai.push(this.cookieNumber);
//     }
//   },
//   render: function(){
//     let articleElem = document.createElement('article');
//     sectionElem.appendChild(articleElem);

//     let h3Elem = document.createElement('h3');
//     h3Elem.textContent = this.name;
//     articleElem.appendChild(h3Elem);

//     let pElem2 = document.createElement('p');
//     pElem2.textContent = `The ${this.name} shop sold the following cookies per hour:`;
//     articleElem.appendChild(pElem2);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);
//     for(let i = 0; i < this.hours.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent =  `${this.hours[i]}: ${cookiesPerHourDubai[i]} cookies `;
//       ulElem.appendChild(liElem);
//     }
//   }
// };

// let parisCount = {
//   name: 'Paris',
//   customerNumber: 0,
//   cookieNumber: 0,
//   hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   getCookieNumber: function(){
//     for(let i = 0; i < 14; i++){
//       this.cookieNumber = Math.round(randomCustomerNumber(23,65) * 6.3);
//       cookiesPerHourParis.push(this.cookieNumber);
//     }
//   },
//   render: function(){
//     let articleElem = document.createElement('article');
//     sectionElem.appendChild(articleElem);

//     let h3Elem = document.createElement('h3');
//     h3Elem.textContent = this.name;
//     articleElem.appendChild(h3Elem);

//     let pElem2 = document.createElement('p');
//     pElem2.textContent = `The ${this.name} shop sold the following cookies per hour:`;
//     articleElem.appendChild(pElem2);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);
//     for(let i = 0; i < this.hours.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent =  `${this.hours[i]}: ${cookiesPerHourParis[i]} cookies `;
//       ulElem.appendChild(liElem);
//     }
//   }
// };
// let limaCount = {
//   name: 'Lima',
//   customerNumber: 0,
//   cookieNumber: 0,
//   hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   getCookieNumber: function(){
//     for(let i = 0; i < 14; i++){
//       this.cookieNumber = Math.round(randomCustomerNumber(23,65) * 6.3);
//       cookiesPerHourLima.push(this.cookieNumber);
//     }
//   },
//   render: function(){
//     let articleElem = document.createElement('article');
//     sectionElem.appendChild(articleElem);

//     let h3Elem = document.createElement('h3');
//     h3Elem.textContent = this.name;
//     articleElem.appendChild(h3Elem);

//     let pElem2 = document.createElement('p');
//     pElem2.textContent = `The ${this.name} shop sold the following cookies per hour:`;
//     articleElem.appendChild(pElem2);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);
//     for(let i = 0; i < this.hours.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent =  `${this.hours[i]}: ${cookiesPerHourLima[i]} cookies `;
//       ulElem.appendChild(liElem);
//     }
//   }
// };

seattleCount.getCookieNumber();
seattleCount.render();

tokyoCount.getCookieNumber();
tokyoCount.render();

dubaiCount.getCookieNumber();
dubaiCount.render();

parisCount.getCookieNumber();
parisCount.render();

limaCount.getCookieNumber();
limaCount.render();

// CookieStore.getCookieNumber();
// CookieStore.render();
