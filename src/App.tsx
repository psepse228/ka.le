import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home    from "./pages/Home"
import Services from "./pages/Services"
import About   from "./pages/About"
import Booking from "./pages/Booking"

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"         element={<Home />}     />
        <Route path="/services" element={<Services />} />
        <Route path="/about"    element={<About />}    />
        <Route path="/booking"  element={<Booking />}  />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
