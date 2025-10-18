import BtgGlobal from "../botãoGlobal"
import "./styles.css"

function Header(){
    return(
        <>
        <nav className="navegador">
            <span className="spanLogo">UnyFood</span>
            <ul className="lista">
                <li>Categorias</li>
                <li>Restaurantes</li>
                <li>Informações</li>
                <li>Cadastre-se</li>
                <li><BtgGlobal nome="Entrar"/></li>
            </ul>
        </nav>
        
        </>
    )
}
export default Header
