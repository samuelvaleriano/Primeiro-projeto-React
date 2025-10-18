import "./styles.css"
function Cards() {
  return (
    <>
      <section className="cards">
        <div className="divpai1">
          <div className="divinput">
            <h3>Comidas</h3>
            <input className="inputcard1" type="text" placeholder="Ver opções" />
          </div>
          <div>
            <img className="imgcard" src="../src/cards/imagens/hamburgue.png" alt="hamburgue" />
          </div>
        </div>
        <div className="divpai2">
          <div className="divinput"> 
            <h3>Comidas</h3>
            <input className="inputcard2" type="text" placeholder="Ver opções" />
          </div>
          <div>
            <img className="imgcard" src="../src/cards/imagens/bebida.png" alt="hamburgue" /> 
          </div>
        </div>
      </section>
    </>
  )
}
export default Cards