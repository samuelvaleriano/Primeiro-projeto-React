import { Component } from "react"
import Cards from "./cards"
import Header from "./header"
import Pesquisa from "./pesquisa"
import ComponentLoja from "./componentLoja"

function App() {

  return (
    <>
        <Header />
        <Pesquisa />
        <Cards />
        <div className="lojasProximas">
          <ComponentLoja nome="Uny Bambu" descrisao="Frutos do Mar" color="#482121"/>
          <ComponentLoja />
          <ComponentLoja />
          <ComponentLoja />
          <ComponentLoja />
          <ComponentLoja />
          <ComponentLoja />
          <ComponentLoja />
          <ComponentLoja />
          <ComponentLoja />
        </div>
    </>
  )
}

export default App
