class Weather {
    constructor(city){
        this.city = city
        this.key = '9521375636ffb7a426265026b4ac913c';
    }
    //
    async getWeather(){
        const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)
        const responceData = await responce.json()
        return responceData
    }

    changeCity(city){
        this.city = city;
    }
}