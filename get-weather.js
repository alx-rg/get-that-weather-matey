// Functions 
async function getWeather(path) {
  // Replace this with your own API key!
  // const apiKey = '467355df4c808dd6134a3b64e9ace282'
  // const apiKey = apikey
  // const units = 'imperial'     
  // const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
  try {
    const res = await fetch(path)
    const data = await res.json()
    console.log(data)
    return {
      city: data.name,
      temp: data.main.temp,
      description: data.weather[0].description,
      feels_like: data.main.feels_like,
      country: data.sys.country
    }
  } catch(error) {
    console.log(error.message)
  }
}

async function getWeatherByZip(apiKey, zip, units) {
  const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&${units}`
  return getWeather(path)
}

async function getWeatherByCity(apiKey, city, units) {
  const path = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&${units}`
  return getWeather(path)
}

async function getWeatherByGeo(apiKey, lat, lon, units) {
  const path = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&${units}`
  return getWeather(path)
}

export default getWeatherByCity
