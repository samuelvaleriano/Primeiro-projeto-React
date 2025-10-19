import "./styles.css";
import BtgGlobal from "../botãoGlobal";

export default function Informacao() {
    return (
        <>
        < div className="tituloInfo">
                <span className="spanLojas">Informações</span>
            </div>  
            <section className="cardinformacao">
                <div className="informePai1">
                    <div >
                        <img className="imgInfo" src="../src/informacao/imagensInform/imagen1.png" alt="" />
                    </div>
                    <div className="textoInformacao">
                        <strong>Lorem ipsum dolor sit amet</strong>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae feugiat odio. Pellentesque finibus sem eros, nec vestibulum orci pellentesque a. Duis id scelerisque diam. Vestibulum et convallis arcu. </p>
                        <BtgGlobal nome="Saiba mais" />
                    </div>
                </div>
                <div className="informePai2">
                    <div >
                        <img className="imgInfo" src="../src/informacao/imagensInform/imagen2.png" alt="" />
                    </div>
                    <div className="textoInformacao">
                        <strong>Duis luctus, tortor et posuere aliquam</strong>
                        <p>Suspendisse sit amet ligula eu est porta pharetra sit amet a ligula. Pellentesque sit amet viverra diam, id convallis tellus. Aliquam orci eros, mattis gravida porttitor vehicula, volutpat vitae augue.  </p>
                        <BtgGlobal nome="Saiba mais" />
                    </div>
                </div>
            </section>

        </>
    )
}