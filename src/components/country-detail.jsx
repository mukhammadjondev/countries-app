import { useCallback, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import CountryService from "../service/country"
import { getCountryDetailSuccess, getCountryFailure, getCountryStart } from "../slice/country"
import Loader from "../ui/loader"

const CountryDetail = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const countName = useParams()
  const { countryDetail, isLoading } = useSelector(state => state.country)

  const getCountryDetail = useCallback(async () => {
    dispatch(getCountryStart())
    try {
      const response = await CountryService.getCountryDetail(countName.name.toLowerCase())
      dispatch(getCountryDetailSuccess(response))
    } catch (error) {
      dispatch(getCountryFailure(error))
    }
  }, [dispatch])

  useEffect(() => {
    getCountryDetail()
  }, [getCountryDetail])

  if (!countryDetail?.[0]) {
    return null
  }

  const {name, flags, population, region, capital, subregion, currencies, languages, borders} = countryDetail[0]
  const currencyName = Object.values(currencies).map(currency => currency.name)
  const currencySymbol = Object.values(currencies).map(currency => currency.symbol)

  return isLoading ? (
    <Loader />
  ):(<div className="container main-container">
      <a className="btn btn-back" onClick={() => navigate('/')}>
          <i className="fa-solid fa-arrow-left"></i>Back
      </a>
      <div className="wrapper">
        <img className="country-flags__img" src={flags?.png} width="560" height="400" alt="country flags" />
        <div className="text-info__wrapper">
          <h2>{name?.common}</h2>
          <div className="card-infolist__wrapper">
            <ul className="card-infolist">
              <li>
                <span><b>Native Name: </b>{name?.common}</span>
              </li>
              <li>
                <span><b>Population: </b>{population}</span>
              </li>
              <li>
                <span><b>Region: </b>{region}</span>
              </li>
              <li>
                <span><b>Sub Region: </b>{subregion}</span>
              </li>
              <li>
                <span><b>Capital: </b>{capital?.[0]}</span>
              </li>
            </ul>
            <ul className="card-infolist">
              <li>
                <span><b>Top Level Domain: </b>{currencySymbol}</span>
              </li>
              <li>
                <span><b>Currencies: </b>{currencyName}</span>
              </li>
              <li>
                <span><b>Languages: </b>{Object.values(languages).join(', ')}</span>
              </li>
            </ul>
          </div>
          {borders.length > 0 && <div>
            <span className="border-title">Border Countries:</span>
            {borders.map(border => (
              <span key={border} className="btn country-btn">{border}</span>
            ))}
          </div>}
        </div>
      </div>
    </div>
  )
}

export default CountryDetail