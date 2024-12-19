import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"
import { GlobalStyles } from "../components/GlobalStyles/GlobalStyles"
import Home from "../pages/Home/Home"
import Login from "../pages/Login/Login"
import About from "../pages/About/About"
import PrivateRouter from "./PrivateRouter"
import Details from "../pages/Details/Details"



const AppRouter = () => {
  return (
    <BrowserRouter>
       <GlobalStyles/>
    <Navbar/>
             <Routes>
                     <Route path="/" element={<Home/>}  />
                     <Route path="login" element={<Login/>}  />
                   

<Route path="about" element={<PrivateRouter/>}>
     <Route path="" element={<About/>}  />
</Route>
<Route path="details" element={<PrivateRouter/>}>
     <Route path="" element={<Details/>}  />
</Route>

                  

            </Routes>
    </BrowserRouter>
  )
}

export default AppRouter