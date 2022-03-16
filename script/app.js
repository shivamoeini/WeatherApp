const cityForm = document.querySelector('form')
const card = document.querySelector('.card')
const details = document.querySelector(".details")
const updateUi = () => {

}
const updateCity = async(city) => {
    const cityDets = await getCity(city)
    const weather = await getWaether(cityDets.key)
    return { cityDets, weather }
}
cityForm.addEventListener('submit', e => {
    e.preventDefault();
    const city = cityForm.city.value.trim();
    cityForm.reset();

    updateCity(city)
        .then(data => console.log(data))
        .catch(err => console.log(err))
})