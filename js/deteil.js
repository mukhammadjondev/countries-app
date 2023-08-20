const body = document.querySelector('body')
const modeBtn = document.getElementById('mode-btn')
const img = document.querySelector('.country-flags__img')
const countryNameEl = document.querySelector('.country-name__title')
const nativeName = document.querySelector('.native-name')
const population = document.querySelector('.population')
const region = document.querySelector('.region')
const subRegion = document.querySelector('.sub-region')
const capital = document.querySelector('.capital')
const topLevel = document.querySelector('.top-level')
const currencies = document.querySelector('.currencies')
const languages = document.querySelector('.languages')


const countryName = localStorage.getItem('search').toLocaleLowerCase()

const url = `https://restcountries.com/v3.1/name/${countryName}`
const urlAllCountry = 'https://restcountries.com/v3.1/all'

async function sendRequest(url) {
    const req = await fetch(url)
    const data = await req.json()
    showData(data)
}
sendRequest(url)



function showData(data) {
    const dataInfo = data[0]

    img.setAttribute('src', `${dataInfo.flags.png}`)
    countryNameEl.textContent = `${dataInfo.name.common}`
    const objKeyName = Object.values(dataInfo.name.nativeName)[0]
    nativeName.textContent = `${objKeyName.common}`
    population.textContent = `${dataInfo.population}`
    region.textContent = `${dataInfo.region}`
    subRegion.textContent = `${dataInfo.subregion}`
    capital.textContent = `${dataInfo.capital[0]}`
    const objKey = Object.values(dataInfo.currencies)
    topLevel.textContent = objKey[0].symbol
    currencies.textContent = objKey[0].name
    languages.textContent = Object.values(dataInfo.languages)[0]

    if(dataInfo.borders) {
        const borderWrapper = document.querySelector('.border-wrapper')

        const borderTitle = document.createElement('span')
        borderTitle.classList.add('border-title')
        borderTitle.textContent = 'Border Countries:'
        borderWrapper.appendChild(borderTitle)
        dataInfo.borders.forEach((country) => {
            const countryName = document.createElement('span')
            countryName.classList.add('country-name__btn')
            countryName.innerHTML = `<a class="btn country-btn">${country}</a>`
            borderWrapper.appendChild(countryName)

            async function sendRequest2(url) {
                const req =  await fetch(url)
                const data = await req.json()
                countryData(data)
                console.log(data)
            }
            sendRequest2(urlAllCountry)
            function countryData(data) {
                data.forEach((country) => {
                    countryAll.push(country)
                })
            }
            const countryAll = []

            countryName.addEventListener('click', () => {
                // document.querySelector('.loader').classList.remove('hidden')
                countryAll.forEach(coun => {
                    // console.log('load')
                    // await coun
                    // console.log('read')
                    // document.querySelector('.loader').classList.add('hidden')
                    console.log(country)

                    if (country == coun.cca3) {
                        localStorage.setItem('search', coun.name.common)
                        console.log(coun.name.common)
                    }
                    document.querySelector('.country-btn').setAttribute('href', 'deteil.html')
                })
            })
        });
    }
}


if (localStorage.getItem('mode') == 'dark') {
    body.classList.add('dark')
    modeBtn.innerHTML = `
        <i class="fa-regular fa-sun"></i>
        <span>Light Mode</span>
    `
}

modeBtn.addEventListener('click', ()=> {
    body.classList.toggle('dark')
    localStorage.setItem('mode', body.classList)
    if(localStorage.getItem('mode')) {
        modeBtn.innerHTML = `
            <i class="fa-regular fa-sun"></i>
            <span>Light Mode</span>
        `
    } else {
        modeBtn.innerHTML = `
            <i class="fa-regular fa-moon"></i>
            <span>Dark Mode</span>
        `
    }
})