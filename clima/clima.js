const axios = require('axios');

const getClima = async (lat,lon) => {

	let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=4307b2781021d569eec79f4c7febe679`)

	return resp.data.main.temp;
	
}

module.exports = { getClima }