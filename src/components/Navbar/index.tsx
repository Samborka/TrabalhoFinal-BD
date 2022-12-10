import styles from "./styles.module.scss";

function Navbar() {
    return (
        <nav className={styles.nav}>
            <a href="/TrabalhoFinal-BD/">Cadastro</a>
            <a href="/TrabalhoFinal-BD/tabelas">Tabelas</a>
        </nav>
    );
}

export default Navbar;
