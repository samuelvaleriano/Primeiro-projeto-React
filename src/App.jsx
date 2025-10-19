import { Component } from "react"
import Cards from "./cards"
import Header from "./header"
import Pesquisa from "./pesquisa"
import ApresentacaoLojas from "./apresentacaoLojas"

function App() {

  return (
    <>
        <Header />
        <Pesquisa />
        <Cards />
        <ApresentacaoLojas />
    </>
  )
}

export default App
