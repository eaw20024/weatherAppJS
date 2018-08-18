class Weather {
    constructor(zipCode) {
        this.apiKey = '6cf6f102be39a3a0d5f3af2b86d56f2e';
        this.zipCode = zipCode;
    }

    // Fetch Weather from API
    async getWeather() {

        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${this.zipCode}&appid=${this.apiKey}`);

        const responseData = await response.json();

        return responseData;
    }

    // Change Weather Location 
    changeLocation(zipCode) {
        this.zipCode = zipCode;
    }
}