import { NavLink } from "react-router-dom"

function PageNotFound() {
  return (
    <div className="page-not-found">
      <h2>Page Not Found</h2>
      <NavLink className="btn btn-back" to={'/'}>
          <i className="fa-solid fa-arrow-left"></i>Home
      </NavLink>
    </div>
  )
}

export default PageNotFound