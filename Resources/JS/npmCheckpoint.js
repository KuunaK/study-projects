const dayjs = require('dayjs')
import ApiKey from './myConfig.js'


/*
!!!IMPORTANT!!!
Must create a config.js file as follows:

const Keys = {
    myKey: 'Put_API_Key_Here'
}

export default Keys;

once that is created, run 'npm install' to install dependencies
run 'npm run build' to bundle the js into a bundle for

You have to get your own API key from geoapify.com
*/

// Get Elements on DOM
const newLocation = document.getElementById('location');
const newTime = document.getElementById('time');
const newDate = document.getElementById('date');
const selectCountryBtn = document.getElementById('select-country-btn');
const selectCountryContent = document.getElementById('select-country-content');
const selectCountryApply = document.getElementById('select-country-apply');

// Event Listeners
selectCountryBtn.addEventListener('click', showContent);
selectCountryApply.addEventListener('click', changeCountry);

function showContent(){
    selectCountryContent.classList.remove('opacity-0', 'pointer-events-none');
    selectCountryContent.classList.add('opacity-1', 'pointer-events-auto');
};

function changeCountry(){
    selectCountryContent.classList.remove('opacity-1', 'pointer-events-auto');
    selectCountryContent.classList.add('opacity-0', 'pointer-events-none');
}

// Create current date dunamically
setInterval(() => {
    const currentDate = dayjs();
    const time = currentDate.format('hh:mm:ss');
    const date = currentDate.format('D MMM, YYYY');
    const dayOfWeek = currentDate.day();
    const daysOfWeekAbbreviated = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];
    const dateFull = `${daysOfWeekAbbreviated[dayOfWeek]}, ${date}`;


// Update elements on DOM constaly

    newTime.innerText = time;
    newDate.innerText = dateFull;
}, 1000);

fetch(`https://api.geoapify.com/v1/ipinfo?apiKey=${ApiKey.myKey}`)
.then(resp => resp.json())
.then((userLocationData) => {
    // Get City and Country
    const country = userLocationData.country.name;
    const city = userLocationData.city['name']
    // Set location
    const location = `${country} / ${city}`
    // Update DOM with location
    newLocation.innerText = location
});