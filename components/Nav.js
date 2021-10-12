import Link from 'next/link';
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href='/'>PAGE 1</Link>
                </li>
                <li>
                    <Link href='/page2'>PAGE 2</Link>
                </li>
                <li>
                    <Link href='/about'>ABOUT</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
