'use strict';

// >>>>>>>>> GLOBAL VARIABLES / WINDOW INTO DOM
// LOCATIONS: Tokyo, Dubai, Paris, Lima;
let sectionElem = document.getElementById('Seattle-profile');
// let sectionElem2 = document.getElementById('Tokyo-profile');
// let sectionElem3 = document.getElementById('Dubai-profile');
// let sectionElem4 = document.getElementById('Paris-profile');
// let sectionElem5 = document.getElementById('Lima-profile');


let cookiesPerHourSeattle = [];
let cookiesPerHourTokyo = [];
let cookiesPerHourDubai = [];
let cookiesPerHourParis = [];
let cookiesPerHourLima = [];
// let dailyTotal = cookiesPerHour.reduce();

function randomCustomerNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let seattleCount = {
  name: 'Seattle',
  customerNumber: 0,
  cookieNumber: 0,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  getCookieNumber: function(){
    for(let i = 0; i < 14; i++){
      this.cookieNumber = Math.round(randomCustomerNumber(23,65) * 6.3);
      cookiesPerHourSeattle.push(this.cookieNumber);
    }
  },
  render: function(){
    let articleElem = document.createElement('article');
    sectionElem.appendChild(articleElem);

    let h3Elem = document.createElement('h3');
    h3Elem.textContent = this.name;
    articleElem.appendChild(h3Elem);

    let pElem2 = document.createElement('p');
    pElem2.textContent = `The ${this.name} shop sold the following cookies per hour:`;
    articleElem.appendChild(pElem2);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);
    for(let i = 0; i < this.hours.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent =  `${this.hours[i]}: ${cookiesPerHourSeattle[i]} cookies `;
      ulElem.appendChild(liElem);
    }
  }
};
let tokyoCount = {
  name: 'Tokyo',
  customerNumber: 0,
  cookieNumber: 0,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  getCookieNumber: function(){
    for(let i = 0; i < 14; i++){
      this.cookieNumber = Math.round(randomCustomerNumber(3,24) * 1.2);
      cookiesPerHourTokyo.push(this.cookieNumber);
    }
  },
  render: function(){
    let articleElem = document.createElement('article');
    sectionElem.appendChild(articleElem);

    let h3Elem = document.createElement('h3');
    h3Elem.textContent = this.name;
    articleElem.appendChild(h3Elem);

    let pElem2 = document.createElement('p');
    pElem2.textContent = `The ${this.name} shop sold the following cookies per hour:`;
    articleElem.appendChild(pElem2);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);
    for(let i = 0; i < this.hours.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent =  `${this.hours[i]}: ${cookiesPerHourTokyo[i]} cookies `;
      ulElem.appendChild(liElem);
    }
  }
};
let dubaiCount = {
  name: 'Dubai',
  customerNumber: 0,
  cookieNumber: 0,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  getCookieNumber: function(){
    for(let i = 0; i < 14; i++){
      this.cookieNumber = Math.round(randomCustomerNumber(11,38) * 3.7);
      cookiesPerHourDubai.push(this.cookieNumber);
    }
  },
  render: function(){
    let articleElem = document.createElement('article');
    sectionElem.appendChild(articleElem);

    let h3Elem = document.createElement('h3');
    h3Elem.textContent = this.name;
    articleElem.appendChild(h3Elem);

    let pElem2 = document.createElement('p');
    pElem2.textContent = `The ${this.name} shop sold the following cookies per hour:`;
    articleElem.appendChild(pElem2);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);
    for(let i = 0; i < this.hours.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent =  `${this.hours[i]}: ${cookiesPerHourDubai[i]} cookies `;
      ulElem.appendChild(liElem);
    }
  }
};

let parisCount = {
  name: 'Paris',
  customerNumber: 0,
  cookieNumber: 0,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  getCookieNumber: function(){
    for(let i = 0; i < 14; i++){
      this.cookieNumber = Math.round(randomCustomerNumber(23,65) * 6.3);
      cookiesPerHourParis.push(this.cookieNumber);
    }
  },
  render: function(){
    let articleElem = document.createElement('article');
    sectionElem.appendChild(articleElem);

    let h3Elem = document.createElement('h3');
    h3Elem.textContent = this.name;
    articleElem.appendChild(h3Elem);

    let pElem2 = document.createElement('p');
    pElem2.textContent = `The ${this.name} shop sold the following cookies per hour:`;
    articleElem.appendChild(pElem2);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);
    for(let i = 0; i < this.hours.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent =  `${this.hours[i]}: ${cookiesPerHourParis[i]} cookies `;
      ulElem.appendChild(liElem);
    }
  }
};
let limaCount = {
  name: 'Lima',
  customerNumber: 0,
  cookieNumber: 0,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  getCookieNumber: function(){
    for(let i = 0; i < 14; i++){
      this.cookieNumber = Math.round(randomCustomerNumber(23,65) * 6.3);
      cookiesPerHourLima.push(this.cookieNumber);
    }
  },
  render: function(){
    let articleElem = document.createElement('article');
    sectionElem.appendChild(articleElem);

    let h3Elem = document.createElement('h3');
    h3Elem.textContent = this.name;
    articleElem.appendChild(h3Elem);

    let pElem2 = document.createElement('p');
    pElem2.textContent = `The ${this.name} shop sold the following cookies per hour:`;
    articleElem.appendChild(pElem2);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);
    for(let i = 0; i < this.hours.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent =  `${this.hours[i]}: ${cookiesPerHourLima[i]} cookies `;
      ulElem.appendChild(liElem);
    }
  }
};

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
