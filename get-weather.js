// Functions 
async function getWeather(apikey, zip, onSuccess, onError) {
  // Replace this with your own API key!
  // const apiKey = '467355df4c808dd6134a3b64e9ace282'
  const apiKey = apikey
  // const units = unit
  const units = 'imperial'     
  const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
  try {
    const res = await fetch(path)
    const data = await res.json()
    return data
  } catch(error) {
    console.log(error.message)
  }
}

export default getWeather

// this export default becomes a module
// if it's a module you need to import your script in the index.html
// <script src="get-weather.js" type="module"></script>
{/* <script type="module">

import getWeather from './get-weather.js'


</script> */}