import { Header } from "./components/Header"
import { Footer } from "./components/Footer.jsx"
import { MainPage } from "./components/MainPage"
import { Form } from "./components/Form"
import './App.css'





export const App = () => {
  return (
    <>
     <Header/>
     <MainPage/>
      <h4>Hemos buscado por todo Chile las empanadas favoritas de la gente, aquellas que sólo aparecen en Fiestas Patrias o en la playa. Pero ahora las tenemos para ti en delivery o local para todo Santiago. ¡Ven a conocernos!</h4>
      <h2>¡Reserva tu mesa!</h2>
     <Form/>
      <Footer/>
    </>
   
  )
}
export default App
