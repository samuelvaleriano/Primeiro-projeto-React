import "./styles.css"

function Header(){
    return(
        <>
        <nav className="navegador">
            <span>UnyFood</span>
            <ul className="lista">
                <li>Categorias</li>
                <li>Restaurantes</li>
                <li>Informações</li>
                <li>Cadastre-se</li>
                <li><button className="btgGlobal">Entrar</button></li>
            </ul>
        </nav>
        
        </>
    )
}
export default Header
