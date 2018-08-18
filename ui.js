class UI {
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.iconPic = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather){
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].description
        // Convert Kelvin to Fahrenheit & Kelvin to Celsius 
        this.string.textContent = Math.floor(weather.main.temp * 9/5 -459.67) + ' F' + ' (' + Math.floor(weather.main.temp -273.15) + ' C )';
        // Getting the weather Icon
        this.iconId = weather.weather[0].icon;
        this.icon = 'http://openweathermap.org/img/w/' + this.iconId + '.png';
        this.iconPic.setAttribute('src', this.icon)
        this.humidity.textContent = 'Humidity: ' + weather.main.humidity + '%';
        this.wind.textContent = 'Wind Speed: ' + weather.wind.speed + ' MPH';
    }
}