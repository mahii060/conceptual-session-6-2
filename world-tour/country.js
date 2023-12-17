const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => showCountries(data.slice(0, 5)))
}
const showCountries = (countries) => {
    // console.log(countries.slice(0, 5))
    countries.forEach((country) => {
        // console.log(country.cca2)
        const countries = document.getElementById('container');
        const countryDiv = document.createElement('div');
        countryDiv.innerHTML = `
        <div class="card w-full h-96 bg-base-100 shadow-2xl">
            <figure class="px-10 pt-10">
                <img src="${country.flags.png}" alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">${country.name.common}</h2>
                <p class ="text-lg font-semibold">Capital: ${country.capital ? country.capital[0] : 'No capital'}</p>
                <div class="card-actions">
                <!-- Button trigger modal -->
                <button class="btn btn-outline btn-warning")">Details</button>
                </div>
            </div>
        </div>
        `
        countries.appendChild(countryDiv)
    })
}

loadCountries()
const showAllCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => showCountries(data.slice(5, 201)))
}