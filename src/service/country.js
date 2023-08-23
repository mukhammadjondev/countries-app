import axios from './api'

const CountryService = {
  async getAllCountry() {
    const {data} = await axios.get('/all')
    return data
  },
  async getCountryDetail(country) {
    const {data} = await axios.get(`/name/${country}`)
    return data
  }
}

export default CountryService