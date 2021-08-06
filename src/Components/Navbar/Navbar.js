import { useState } from 'react'
import styles from './Navbar.module.css'
import {Button }from '@material-ui/core'
import logo from './assets/logo.png'
import HamburgerMenu from './Hamburger/Hamburger'
import Hamburger from 'hamburger-react'
const Navbar = () =>{
    const [isOpen, setOpen] = useState(false)
    console.log(isOpen)

    return(
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <img src={logo}/>
                <div className={styles.hamburgerMenu}>
                 <Hamburger toggled={isOpen} toggle={setOpen}/>
                </div>
                <div className={styles.links}>
                    <ul>
                        <li><h3>Work</h3></li>
                        <li><h3>Services</h3></li>
                        <li><h3>Contact</h3></li>
                        <li><h3>Finance</h3></li>
                    </ul>
                </div>
            </div>
            <HamburgerMenu isOpen={isOpen} setOpen={setOpen}/>
        </div>
    )
}
export default Navbar