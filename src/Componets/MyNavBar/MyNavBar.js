import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from './styles.module.sass'
import logo from './logo.jpg'
function MyNavBar() {
    return (
        <nav className={styles.nav}>
            <img
                src={logo}
                className={styles.img}
                alt="Street-X"
            />
            <a className={styles.a}>Street-X</a>
        </nav>
        // <Navbar expand="lg" className={styles}>
        //
        //         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        //
        // </Navbar>
    );
}

export default MyNavBar;