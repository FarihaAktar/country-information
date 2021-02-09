fetch("https://restcountries.eu/rest/v2/all")
.then(res => res.json())
.then(data => displayCountries(data))

const displayCountries = countries =>{
    // console.log(countries)
    const countryList = document.getElementById("country-lists");
    countries.forEach( country => {
        // console.log(country.name);
        const newDiv = document.createElement('div');
        newDiv.className = 'country-info';
        const countryInfo = `
            <img class="img" src="${country.flag}">
            <h1>${country.name}</h1>
            <h4>${country.capital}</h4>
            <button onclick="countryDetails('${country.name}')">More Info</button>
        `
        newDiv.innerHTML = countryInfo;
        countryList.appendChild(newDiv);
    });
}

const countryDetails = name =>{
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => renderCountryInfo(data[0]))
} 
const renderCountryInfo = country =>{
    const countryDiv = document.getElementById("country-details");
    countryDiv.innerHTML = `
    <img class="img-tag" src="${country.flag}">
    <h3><span class="info">Region: </span>${country.region}</h3>
    <h3><span class="info">Population: </span>${country.population}</h3>
    <h3><span class="info">Currency: </span>${country.currencies[0].name}</h3>
    `
}
