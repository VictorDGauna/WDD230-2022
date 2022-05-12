let date = new Date();
let currentYear = date.getFullYear();
document.querySelector('#currentYear').textContent = currentYear;

let lastModified = document.lastModified;
document.getElementById('currentDate').textContent = lastModified;