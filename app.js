// Init Weather Object

const weather = new Weather(20002);

// Init UI
const ui = new UI();

// Get Weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location Event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const zipCode = document.getElementById('zipCode').value;
    weather.changeLocation(zipCode);
    // Get and display Weather 
    getWeather();

    // Close Modal 
    $('#locModal').modal('hide')
});

function getWeather(){
weather.getWeather() 
    .then(results => {
        ui.paint(results);
    })
    .catch(err => console.log(err));
}