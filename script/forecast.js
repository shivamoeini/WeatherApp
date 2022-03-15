const key = 'GRAfjaxo5XhXwOvK3ZlIvgah48g4PqQ1';

//get weather information
const getWaether = async(id) => {
        const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
        const query = `${id}?apikey=${key}`
        const response = await fetch(base + query)
        const data = await response.json()
        return data[0];
    }
    //get city informition
const getCity = async(city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${key}&q=${city}`
    const response = await fetch(base + query)
    const data = await response.json();

    return data[0];
};
getCity('manchester')
    .then(data => {
        return getWaether(data.Key)
    }).then(data => {
        console.log(data);
    })
    .catch(err => console.log(err))
    // getWaether("329260")