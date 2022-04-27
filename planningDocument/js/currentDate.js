const options = { year: 'numeric' };

let modified = document.querySelector('#currentDate');
let copyright = document.querySelector('#currentYear');

let current_year = new Date().toLocaleDateString('en-US', options);
let mod_date = document.lastModified;

modified.innerHTML = ` ${mod_date}`;
copyright.innerHTML = `${current_year}`;