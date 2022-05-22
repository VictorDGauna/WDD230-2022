//const apiURL = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=dce9526fd98f1b67e5a066b73747e133';

fetch('http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=dce9526fd98f1b67e5a066b73747e133')
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('desc').textContent = jsObject.list[0].weather[0].description;
        document.getElementById('High').textContent = jsObject.list[0].main.temp_kf;
        document.getElementById('wind').textContent = jsObject.list[0].wind.deg;
        document.getElementById('hum').textContent = jsObject.list[0].main.humidity + '°F';
        document.getElementById('speed').textContent = jsObject.list[0].wind.speed + '°F';
        document.getElementById('high1').textContent = jsObject.list[1].main.temp + '°F';
        document.getElementById('high2').textContent = jsObject.list[9].main.temp + '°F';
        document.getElementById('high3').textContent = jsObject.list[17].main.temp + '°F';
        document.getElementById('high4').textContent = jsObject.list[25].main.temp + '°F';
        document.getElementById('high5').textContent = jsObject.list[33].main.temp + '°F';



        const imagesrc1 = 'https://openweathermap.org/img/w/' + jsObject.list[1].weather[0].icon + '.png'; // note the concatenation
        const imagesrc2 = 'https://openweathermap.org/img/w/' + jsObject.list[9].weather[0].icon + '.png'; // note the concatenation
        const imagesrc3 = 'https://openweathermap.org/img/w/' + jsObject.list[17].weather[0].icon + '.png'; // note the concatenation
        const imagesrc4 = 'https://openweathermap.org/img/w/' + jsObject.list[25].weather[0].icon + '.png'; // note the concatenation
        const imagesrc5 = 'https://openweathermap.org/img/w/' + jsObject.list[33].weather[0].icon + '.png'; // note the concatenation
        const desc = jsObject.list[0].weather[0].description; // note how we reference the weather array
        //document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
        document.getElementById('icon1').setAttribute('src', imagesrc1); // focus on the setAttribute() method
        document.getElementById('icon2').setAttribute('src', imagesrc2); // focus on the setAttribute() method
        document.getElementById('icon3').setAttribute('src', imagesrc3); // focus on the setAttribute() method
        document.getElementById('icon4').setAttribute('src', imagesrc4); // focus on the setAttribute() method
        document.getElementById('icon5').setAttribute('src', imagesrc5); // focus on the setAttribute() method
        document.getElementById('icon').setAttribute('alt', desc);

    });