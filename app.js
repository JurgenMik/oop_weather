const weather = new Weather('Tallinn')

// get City weather

function getWeather(){
    weather.getWeather()
        .then(data => {

            console.log(data)

        })
        .catch(error =>{

           console.log(error)

        })
}


getWeather()