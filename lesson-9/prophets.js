const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject);
        const prophets = jsonObject['prophets'];
        for (let i = 0; i < prophets.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let imge = document.createElement('img');
            let birthDate = document.createElement('div');
            let birthPlace = document.createElement('div');
            h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
            birthDate.setAttribute('class', 'birth')
            birthDate.textContent = 'Date of Birth: ' + prophets[i].birthdate;
            birthPlace.setAttribute('class', 'birthPlace')
            birthPlace.textContent = 'Place of birth: ' + prophets[i].birthplace;
            imge.setAttribute('src', prophets[i].imageurl);
            imge.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname);

            card.appendChild(h2);
            card.appendChild(birthDate);
            card.appendChild(birthPlace);
            card.appendChild(imge);

            document.querySelector('div.cards').appendChild(card);




        }


    });