const options = { year: 'numeric' }

let upload = document.querySelector('#currentDate');
let copyright = document.querySelector('#currentYear');

let current_year = new Date().toLocaleDateString('en-us', options);
let mod_date = document.lastModified;

upload.innerHTML = `{mod_date}`;
copyright.innerHTML = `{current_year}`