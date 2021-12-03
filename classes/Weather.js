class Weather {
    constructor(city){
        this.city = city
        this.key = '9521375636ffb7a426265026b4ac913c';
    }
    //
   async getWeather(){
        const response = await fetch((`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`))
       const responseData = await response.json()
       //tagastab responseData - saab kasutusele votta
       return responseData
    }

}