import styles from '../NavBar/NavBar.module.css'
import { Link } from 'react-router-dom';
import Social from './Social';

function NavBar() {
    return (
        <header className={styles.header}>
            <span className={styles.logo}>PAOLO BILLORDO</span>
            <nav className={styles.nav}>
                <Link to='/'>Inicio</Link>
                <Link to='/projects'>Proyectos</Link>
                <Link to='/aboutme'>Sobre Mi</Link>
            </nav>
            <Social/>

        </header>
    )
}

export default NavBar;