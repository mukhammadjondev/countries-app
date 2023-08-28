import { Outlet } from "react-router-dom"
import { Navbar } from "../components"

function RootLayout() {
  return <>
    <header>
      <Navbar />
    </header>
    <main><Outlet /></main>
  </>
}

export default RootLayout