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

                card1.setAttribute('class', 'cities')
                h3.textContent = citys[i].name;
                q.textContent = citys[i].motto;
                containI.setAttribute('class', 'containI');
                containP.setAttribute('class', 'containP');
                p1.textContent = 'Year Founded: ' + citys[i].yearFounded;
                p2.textContent = 'Population: ' + citys[i].currentPopulation;
                p3.textContent = 'Annual Rainfall: ' + citys[i].averageRainfall;
                img.setAttribute('src', 'images/' + citys[i].photo);
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
            if (citys[i].name === "Fish Haven") {
                let card1 = document.createElement("section");
                let h3 = document.createElement("h3");
                let q = document.createElement('q');
                let i2 = document.createElement('div');
                let containP = document.createElement('div');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
                let hr = document.createElement("hr");
                let img2 = document.createElement("img");

                card1.setAttribute('class', 'cities')
                h3.textContent = citys[i].name;
                q.textContent = citys[i].motto;
                i2.setAttribute('class', 'i2');
                containP.setAttribute('class', 'containP');
                p1.textContent = 'Year Founded: ' + citys[i].yearFounded;
                p2.textContent = 'Population: ' + citys[i].currentPopulation;
                p3.textContent = 'Annual Rainfall: ' + citys[i].averageRainfall;
                img2.setAttribute('src', 'images/' + citys[i].photo);
                img2.setAttribute('alt', citys[i].photo);

                card1.appendChild(h3);
                card1.appendChild(hr);
                card1.appendChild(q);
                containP.appendChild(p1);
                containP.appendChild(p2);
                containP.appendChild(p3);
                i2.appendChild(containP);
                i2.appendChild(img2);
                card1.appendChild(i2);
                document.querySelector('div.cards').appendChild(card1);

            }
            if (citys[i].name === "Preston") {
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

                card1.setAttribute('class', 'cities')
                h3.textContent = citys[i].name;
                q.textContent = citys[i].motto;
                containI.setAttribute('class', 'containI');
                containP.setAttribute('class', 'containP');
                p1.textContent = 'Year Founded: ' + citys[i].yearFounded;
                p2.textContent = 'Population: ' + citys[i].currentPopulation;
                p3.textContent = 'Annual Rainfall: ' + citys[i].averageRainfall;
                img.setAttribute('src', 'images/' + citys[i].photo);
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