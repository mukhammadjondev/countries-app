import { useNavigate } from "react-router-dom"

const CountryCard = ({country}) => {
  const {name, flags, population, region, capital} = country
  const navigate = useNavigate()

  return (
    <div className="card" data-set={region} key={name?.common} onClick={() => navigate(`/country-detail/${name.common}`)}>
      <img className="card-img" src={flags?.png} width="264" height="170" alt="country flags" />
      <div className="card-info">
        <h3 className="country-name">{name?.common}</h3>
        <ul className="card-infolist">
          <li className="infolist-item">
            <span><b>Population:</b> {population}</span>
          </li>
          <li className="infolist-item">
            <span><b>Region:</b> {region}</span>
          </li>
          <li className="infolist-item">
            <span><b>Capital:</b> {capital ? capital[0] : 'NO CAPITAL'}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CountryCard