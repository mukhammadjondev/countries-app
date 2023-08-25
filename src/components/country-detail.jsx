import { useEffect } from "react"
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

  const getCountryDetail = async () => {
    dispatch(getCountryStart())
    try {
      const response = await CountryService.getCountryDetail(countName.name.toLowerCase())
      dispatch(getCountryDetailSuccess(response))
    } catch (error) {
      dispatch(getCountryFailure(error))
    }
  }

  useEffect(() => {
    getCountryDetail()
  }, [])

  console.log(countryDetail)

  // const {name, flags, population, region, subregion, currencies, languages} = countryDetail[0]

  return isLoading ? (
    <Loader />
  ) : ( countryDetail !== null && <>
    <div className="container main-container">
      <a className="btn btn-back" onClick={() => navigate('/')}>
          <i className="fa-solid fa-arrow-left"></i>Back
      </a>
      <div className="wrapper">
        <img className="country-flags__img" src={countryDetail[0]?.flags?.png} width="560" height="401" alt="country flags" />
        <div className="text-info__wrapper">
            <h2 className="country-name__title">{countryDetail[0]?.name?.common}</h2>
            <div className="card-infolist__wrapper">
              <ul className="card-infolist">
                <li className="infolist-item">
                  <span><b>Native Name: </b>{countryDetail[0]?.name?.common}</span>
                </li>
                <li className="infolist-item">
                  <span><b>Population: </b>{countryDetail[0]?.population}</span>
                </li>
                <li className="infolist-item">
                  <span><b>Region: </b>{countryDetail[0]?.region}</span>
                </li>
                <li className="infolist-item">
                  <span><b>Sub Region: </b>{countryDetail[0]?.subregion}</span>
                </li>
                <li className="infolist-item">
                  <span><b>Capital: </b>{countryDetail[0]?.capital[0]}</span>
                </li>
              </ul>
              <ul className="card-infolist">
                <li className="infolist-item">
                  <span><b>Top Level Domain: </b>{}</span>
                </li>
                <li className="infolist-item">
                  <span><b>Currencies: </b>{}</span>
                </li>
                <li className="infolist-item">
                  <span><b>Languages: </b></span>
                </li>
              </ul>
            </div>
          <div className="border-wrapper"></div>
        </div>
      </div>
    </div>
  </>
)}

export default CountryDetail