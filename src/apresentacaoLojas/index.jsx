import "./styles.css";
import ComponentLoja from "../componentLoja";
export default function ApresentacaoLojas() {
    return (
        <>
            < div className="tituloLojas">
                <span className="spanLojas">Conheça nossos restaurantes</span>
            </div>  
            <div className="lojasProximas">
                <ComponentLoja nome="UnyDonald’s" descrisao="Fast-food" color="#ED1C16" />
                <ComponentLoja nome="Uny Bambu" descrisao="Frutos do Mar" color="#ED16A4" />
                <ComponentLoja nome="UnyBIB’s" descrisao="Lanches" color="#009432" />
                <ComponentLoja nome="UnyBucks" descrisao="Coffe break" color="#FBC531" />
                <ComponentLoja nome="Unyrafas" descrisao="Fast-food" color="#1E3799" />
                <ComponentLoja nome="Unyway" descrisao="Frutos do Mar" color="#F57D00" />
                <ComponentLoja nome="Unyback" descrisao="Lanches" color="#FBC531" />
                <ComponentLoja nome="Uny Hut" descrisao="Pizzas" color="#18DCFF" />
                <ComponentLoja nome="Uny Robbins" descrisao="Sorvetes" color="#32FF7E" />
                <ComponentLoja nome="Uny Queen" descrisao="Sorvetes" color="#FFB8B8" />
                <ComponentLoja nome="Uny John’s" descrisao="Take-away" color="#BE5F07" />
                <ComponentLoja nome="UnyKFC" descrisao="Frango frito" color="#482121" />
            </div>
            < div className="verMaisLojas">
                <span className="">Ver mais</span>
            </div> 
        </>);
}