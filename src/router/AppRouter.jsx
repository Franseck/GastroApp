import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"
import { GlobalStyles } from "../components/GlobalStyles/GlobalStyles"
import Home from "../pages/Home/Home"
import Login from "../pages/Login/Login"
import About from "../pages/About/About"

const AppRouter = () => {
  return (
    <BrowserRouter>
       <GlobalStyles/>
    <Navbar/>
             <Routes>
                     <Route path="/" element={<Home/>}  />
                     <Route path="login" element={<Login/>}  />
                     <Route path="about" element={<About/>}  />
            </Routes>
    </BrowserRouter>
  )
}

export default AppRouter