import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Homepage from "./components/HomePage"
import Company from "./components/Company"
import JumbotronPage from "./components/JumbotronPage"
import Category from "./components/Category"
import Details from "./components/Details"
import Footer from "./components/Footer"
import { useState } from "react"

const App = () => {
  const [search, setSearch] = useState("")
  const setSearchData = (e) => {
    setSearch(e.target.value)
  }

  return (
    <BrowserRouter>
      <NavBar />
      <JumbotronPage />
      <Routes>
        <Route
          path="/"
          element={<Homepage search={search} setSearchData={setSearchData} />}
        />
        <Route
          path="/company"
          element={<Company search={search} setSearchData={setSearchData} />}
        />
        <Route
          path="/category"
          element={<Category search={search} setSearchData={setSearchData} />}
        />
        <Route path="/:details" element={<Details />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
