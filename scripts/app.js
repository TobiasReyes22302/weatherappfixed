const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
const updateUI = (data) => {

    console.log(data);
    //destructure properties

const { cityDets, weather } = data;

    details.innerHTML = `
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${Weather.weatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temprature.Metric.Value}</span>
        <span>&deg;C</span>
        </div>
    `;

    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', inconSrc);

    


    let timeSrc = weather.IsDayTime ? 'img/day.svg': 'img/night.svg';
    time.setAttribute('src', timeSrc);
    //if(weather.IsDayTime){
      //  timeSrc = 'img/day.svg';
   // } else {
     //   timeSrc = 'img/night.svg';
   // }
    time.setAttribute('src', timeSrc);

if(card.classList.contains('d-none')){
card.classList.remove('d-none');
}

};

const updateCity = async (city) => {

    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);

    return {
        cityDets, weather
    };
};

cityForm.addEventListener('submit', e => {
    //prevent default action
    e.preventDefault();

    //get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //update the ui with new city
    updateCity(city)
    .then(data => console.log(data))
    .catch(err => console.log(err));

});