const request = require('request')
const url = 'http://api.weatherstack.com/current?access_key=ddf09d9b3f531626c07f3877892a20e7&query=chandigarh&units=f'
// request(url,(err,response)=>{
//     if(err) throw err;
//      const weatherJson = JSON.parse(response.body)
//     console.log(weatherJson.current)
// })
request({ url: url, json: true},(err,response)=>{
    if(err) throw err;
    
    const currentWeather = response.body.current

})
