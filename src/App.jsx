import { Component } from "react"
import Cards from "./cards"
import Header from "./header"
import Pesquisa from "./pesquisa"
import ApresentacaoLojas from "./apresentacaoLojas"
import Informacao from "./informacao"
import Footer from "./rodape"

function App() {

  return (
    <>
        <Header />
        <Pesquisa />
        <Cards />
        <ApresentacaoLojas />
        <Informacao />
        <Footer />
    </>
  )
}

export default App
