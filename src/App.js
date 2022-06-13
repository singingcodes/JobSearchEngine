import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Homepage from "./components/HomePage"
import Company from "./components/Company"

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/company" element={<Company />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
