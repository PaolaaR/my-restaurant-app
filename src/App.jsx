import { Header } from "./components/Header"
import { Footer } from "./components/Footer.jsx"
import { MainPage } from "./components/MainPage"
import { Form } from "./components/Form"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"


export const App = () => {
  return (
    <>
     <Header/>
     <MainPage/>
     <Form/>
      <Footer/>
      <Routes>
        <Route path="/my-restaurant-app/" element={<MainPage/>}/>
        <Route path="my-restaurant-app/form" element={<Form/>}/>
      </Routes>
    </>
   
  )
}
export default App
