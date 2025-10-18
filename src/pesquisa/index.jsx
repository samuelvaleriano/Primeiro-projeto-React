import BtgGlobal from "../botãoGlobal"
import "./styles.css"
function Pesquisa() {
  return (
    <>
    <section>
        <div><h2>Nosso objetivo e servir você!</h2></div>
        <div>
            <input type="text" placeholder="Encontre um restaurante perto de você" />
            <BtgGlobal nome="Encontrar"/>
        </div>
    </section>
    
    </>
  )
}
export default Pesquisa