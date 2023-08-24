import { useDispatch, useSelector } from "react-redux"
import { changeModeDark, changeModeLight } from "../slice/mode"

const Navbar = () => {
  const body = document.querySelector('body')
  const dispatch = useDispatch()
  const { icon, mode } = useSelector(state => state.mode)

  if (localStorage.getItem('mode') == 'dark') {
    body.classList.add('dark')
    dispatch(changeModeDark())
  }

  const changeColor = () => {
    body.classList.toggle('dark')
    localStorage.setItem('mode', body.classList)

    if(localStorage.getItem('mode')) {
      dispatch(changeModeDark())
    } else {
      dispatch(changeModeLight())
    }
  }

  return <header>
    <div className="container header-container">
      <h1>Where in the world?</h1>
      <button className="btn" onClick={changeColor}>
        <i className={`fa-regular ${icon}`}></i>
        <span>{mode} Mode</span>
      </button>
    </div>
  </header>
}

export default Navbar