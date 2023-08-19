const body = document.querySelector('body')
const countriesCont = document.querySelector('.countries-contianer')
const modeBtn = document.getElementById('mode-btn')
const form = document.querySelector('form')
const search = document.getElementById('search')
const select = document.querySelector('select')

const api = 'https://restcountries.com/v3.1/all'

async function sendRequest(url) {
    document.querySelector('.loader').classList.remove('hidden')
    const req = await fetch(url)
    const data = await req.json()
    // localStorage.setItem('data', JSON.stringify(data))
    // console.log(localStorage.getItem(JSON.parse(data)))
    showData(data)
    document.querySelector('.loader').classList.add('hidden')
}
sendRequest(api)

function showData(data) {
    data.forEach((country) => {
        const {name, flags, population, region, capital} = country
        const card = document.createElement('div')
        card.classList.add('card')
        card.setAttribute('id', `${name.common}`)
        card.setAttribute('data-set', `${region}`)
        card.innerHTML = `
            <a href="deteil.html">
                <img class="card-img" src="${flags.png}" width="264" height="170" alt="country flags">
                <div class="card-info">
                    <h3 class="country-name">${name.common}</h3>
                    <ul class="card-infolist">
                        <li class="infolist-item">
                            <span><b>Population:</b></span>
                            <span>${population}</span>
                        </li>
                        <li class="infolist-item">
                            <span><b>Region:</b></span>
                            <span>${region}</span>
                        </li>
                        <li class="infolist-item">
                            <span><b>Capital:</b></span>
                            <span>${capital ? capital[0] : 'NO CAPITAL'}</span>
                        </li>
                    </ul>
                </div>
            </a>
        `
        countriesCont.appendChild(card)

        card.addEventListener('click', ()=> {
            const id = card.getAttribute('id')
            localStorage.setItem('search', id)
        })
    });
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

form.addEventListener('input', (e)=> {
    e.preventDefault
    const container = countriesCont.childNodes
    container.forEach((card) => {
        if (card.getAttribute('id').toLowerCase().includes(search.value.toLowerCase())){
            card.style.display = 'block'
        } else (
            card.style.display = 'none'
        )
    })
})

select.addEventListener('change', (e)=> {
    e.preventDefault
    const container = countriesCont.childNodes
    container.forEach((card) => {
        if (card.getAttribute('data-set').toLowerCase().includes(select.value)){
            card.style.display = 'block'
        } else if(select.value == 'all') {
            card.style.display = 'block'
        } else (
            card.style.display = 'none'
        )
    })
})