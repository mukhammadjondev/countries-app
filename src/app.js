import { Main, CountryDetail } from './components'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import RootLayout from './ui/root-layout'
import PageNotFound from './ui/page-not-found'

const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Main />} />
      <Route path='country-detail/:name' element={<CountryDetail />} />

      <Route path='*' element={<PageNotFound />} />
    </Route>
    )
  )

  return <RouterProvider router={routes} />
}

export default App