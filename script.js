var dayName =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var day = dayName[new Date().getDay()];
console.log(day)

var world = document.querySelector(".form-control")
var dt;
async function get(e){
    e.preventDefault()
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=5eb2ab010a9943dba5a85725221301&q=${world.value}&days=1&aqi=no`)
    const data= await response.json()
    console.log(data)




   


        document.querySelector(".row").innerHTML += `
   
      <div class="col-3 bordurstyl">
      <h1>day:${day}</h1>
      <h1>country:${data.location.country}</h1>
      <h1>city:${data.location.name}</h1>
      <h1>${data.current.temp_c}</h1>
      <h1>${data.current.temp_f}</h1>
      <h1>${data.location.localtime}</h1>
      <h1>${data.forecast.forecastday[0].hour[0].dewpoint_c} ~ ${data.forecast.forecastday[0].hour[23].dewpoint_c}</h1>
      <img src="https://${data.current.condition.icon}">
      </div>` 
    

    

}
document.getElementsByTagName("form")[0].addEventListener("submit", get)


