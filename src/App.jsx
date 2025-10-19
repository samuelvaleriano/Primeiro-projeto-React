import { Component } from "react"
import Cards from "./cards"
import Header from "./header"
import Pesquisa from "./pesquisa"
import ApresentacaoLojas from "./apresentacaoLojas"
import Informacao from "./informacao"

function App() {

  return (
    <>
        <Header />
        <Pesquisa />
        <Cards />
        <ApresentacaoLojas />
        <Informacao />
    </>
  )
}

export default App
