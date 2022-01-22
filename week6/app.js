const formSearch = document.getElementById('form-search');
const inputCity = document.getElementById('input-city');
const spanCurrentTemp = document.getElementById("span-current-temp");
const spanCurrentWind = document.getElementById("span-current-wind");
const spanCurrentUv = document.getElementById("span-current-uv");
const weatherCards = document.getElementById("weather-cards");

// TODO: BYO api key
const apiKey = "apikey here";


function getCityWeather(city) {
    // FYI
    // const url = "api.openweathermap.org/data/2.5/weather?q=" + city + "&appid={API key}";


    // string literal
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    // promise 
    return fetch(url)
        .then(function(response) {
            console.log(response);
            return response.json();
        });
}

function oneCall(lon, lat) {

    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`

       return fetch(url).then(function (response) {
           return response.json();
       });
}

function kelvinToCelcius(kelvin){
    return kelvin - 273.15;
}

// what would happen when user enter a city?
formSearch.addEventListener('submit', function(event){
    event.preventDefault();
    const city = inputCity.value;
    getCityWeather(city)
        .then(function(data) {
            // show the current weather data 
            console.log('data is', data);
            spanCurrentWind.textContent = data.wind.speed;
            spanCurrentTemp.textContent = kelvinToCelcius(data.main.temp).toFixed(2);

            // call the one api to get the uv index
            return oneCall(data.coord.lon, data.coord.lat)
                


        }).then(function(oneCallData){
            // < 4 green

            // < 4-8 -- yellow

            // > 9 -- red
            const uv = oneCallData.current.uvi;

            spanCurrentUv.textContent = uv

            if(uv < 4){
                spanCurrentUv.setAttribute('class', 'green')
            }
            if(uv>=4 && uv <= 8){
                spanCurrentUv.setAttribute("class", "yellow");
            }
            if (uv > 9 ) {
                spanCurrentUv.setAttribute("class", "red");
            }

            const next5Days = oneCallData.daily.slice(0, 5);

            weatherCards.textContent ="";
            for (let index = 0; index < next5Days.length; index++) {
                const forecast = next5Days[index];
                // use moment to convert unix into human time


                const col = createWeatherCol(forecast.dt, '', forecast.temp.day)
                weatherCards.appendChild(col);
            }


        });


    // show the 5 day forecasts

})

//   <div class="col">
//                     <div class="card">
//                         <div class="card-body">
//                             <h4 class="card-title">20/1/2022</h4>
//                             <i>Icon</i>
//                             <p class="card-text">
//                                 <ul>
//                                   <li>Temp: 30</li>
//                                   <li>Wind: 10</li>
//                                   <li>Humidity: 10</li>
//                                 </ul>
//                             </p>
                        
//                         </div>
//                     </div>
//                 </div>

function createWeatherCol(date, icon, temp, humidity, wind) {

    const col = document.createElement('div')
    col.setAttribute('class', 'col-2');

    const card = document.createElement('div')
    card.setAttribute('class', 'card');
    col.appendChild(card);

    const cardBody = document.createElement('div');
    cardBody.setAttribute("class", "card-body");
    card.appendChild(cardBody)

    const dateHeading = document.createElement("h4");
    dateHeading.setAttribute("class", "card-title");
    cardBody.appendChild(dateHeading);

    dateHeading.textContent = date;

    const iconEl = document.createElement("img");
    iconEl.setAttribute("src", icon);
    cardBody.appendChild(iconEl);



    const p = document.createElement('p');
    const ul = document.createElement('ul');

    const tempLi = document.createElement('li');
    tempLi.textContent = temp;
    // TODO: add moreee here

    ul.appendChild(tempLi)

    p.appendChild(ul);

    return col;

    
}




// store the search history
// display item in a list


