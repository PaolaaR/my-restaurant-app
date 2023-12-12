import { Routes, Route } from "react-router-dom"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer.jsx"
import { Booking } from "./components/Booking.jsx"
import { ContactForm } from "./components/ContactForm"
import { Home } from "./components/Home.jsx"
import { Menu } from "./components/Menu.jsx"





export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/my-restaurant-app/reserva" element={<Booking />} />
        <Route path="/my-restaurant-app/contacto" element={<ContactForm />} />
        <Route path="/my-restaurant-app/Menu" element={<Menu />} />
        <Route path="/*" element={<Home />} />
      </Routes>
      <Footer />
    </>

  )
}
export default App
