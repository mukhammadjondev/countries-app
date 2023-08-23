import { Route, Routes } from 'react-router-dom'
import { Navbar, Main, CountryDetail } from './components'

const App = () => {
  return <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/country-detail/:name' element={<CountryDetail />} />
    </Routes>
  </>
}

export default App