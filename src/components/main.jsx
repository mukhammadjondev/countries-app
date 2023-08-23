import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import CountryService from "../service/country"
import { getCountryFailure, getCountryStart, getCountrySuccess } from "../slice/country"
import Loader from "../ui/loader"
import { CountryCard } from "./"
import { options } from "../util/constants"

const Main = () => {
  const {countries, isLoading} = useSelector(state => state.country)
  const dispatch = useDispatch()

  const getCountries = async () => {
    dispatch(getCountryStart())
    try {
      const response = await CountryService.getAllCountry()
      dispatch(getCountrySuccess(response))
    } catch (error) {
      dispatch(getCountryFailure(error))
    }
  }

  useEffect(() => {
    getCountries()
  }, [])

  return <>
    <div className="container main-container">
      <div className="filter">
        <form>
          <input type="search" placeholder="Search for a country…" id="search" required autoComplete="off" />
        </form>
        <select>
          {options.map(item => (
            <option key={item.id} value={`${item.value.toLocaleLowerCase()}`}>{item.value}</option>
            ))}
        </select>
      </div>
      {isLoading && <Loader />}
      <div className="countries-contianer">
        {countries.map(country => (
          <CountryCard country={country} />
        ))}
      </div>
    </div>
  </>
}

export default Main