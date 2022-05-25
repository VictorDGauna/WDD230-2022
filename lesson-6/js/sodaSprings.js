//const apiURL = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=dce9526fd98f1b67e5a066b73747e133';

fetch('http://api.openweathermap.org/data/2.5/forecast?lat=42.6544&lon=-111.6047&units=imperial&appid=dce9526fd98f1b67e5a066b73747e133')
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('desc').textContent = jsObject.list[0].weather[0].description;
        document.getElementById('High').textContent = jsObject.list[0].main.temp;
        document.getElementById('wind').textContent = jsObject.list[0].wind.deg;
        document.getElementById('hum').textContent = jsObject.list[0].main.humidity;
        document.getElementById('speed').textContent = jsObject.list[0].wind.speed;
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
        document.getElementById('icon1').setAttribute('alt', desc);

    });

const url = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject);
        const citys = jsonObject['towns'];
        for (let i = 0; i < citys.length; i++) {
            if (citys[i].name === "Soda Springs") {
                let card1 = document.createElement("section");
                let h3 = document.createElement("h3");
                let q = document.createElement('q');
                let containI = document.createElement('div');
                let containP = document.createElement('div');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
                let hr = document.createElement("hr");
                let img = document.createElement("img");

                card1.setAttribute('class', 'cities-sodaS')
                h3.textContent = citys[i].name;
                q.textContent = citys[i].motto;
                containI.setAttribute('class', 'containI');
                containP.setAttribute('class', 'containP');
                p1.textContent = 'Year Founded: ' + citys[i].yearFounded;
                p2.textContent = 'Population: ' + citys[i].currentPopulation;
                p3.textContent = 'Annual Rainfall: ' + citys[i].averageRainfall;
                img.setAttribute('src', 'images/sodaSprings2.jpg');
                img.setAttribute('alt', citys[i].photo);

                card1.appendChild(h3);
                card1.appendChild(hr);
                card1.appendChild(q);
                containP.appendChild(p1);
                containP.appendChild(p2);
                containP.appendChild(p3);
                containI.appendChild(containP);
                containI.appendChild(img);
                card1.appendChild(containI);
                document.querySelector('div.cards').appendChild(card1);
            }



        }


    })