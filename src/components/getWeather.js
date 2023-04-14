import { func } from "prop-types";


const key = '109440449518b43abeb4e646cc838d3f';
let data = '';

fetch(`https://api.openweathermap.org/data/2.5/weather?lat=55.7558&lon=37.6173&appid=${key}`)
.then(function(response) {
    return response.json()
}).then(function(data){
    data = data;
})
console.log(data);
export default data;


