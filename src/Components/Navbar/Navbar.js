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
               <a href="/"><img src={logo}/></a>
                <div className={styles.hamburgerMenu}>
                 <Hamburger toggled={isOpen} toggle={setOpen} size={22}/>
                </div>
                <div className={styles.links}>
                    <ul>
                        <a href="/work"><li><h3>Work</h3></li></a>
                        <a href="/services"><li><h3>Services</h3></li></a>
                        <a href="/contactUs"><li><h3>Contact Us</h3></li></a>
                    </ul>
                </div>
            </div>
            <HamburgerMenu isOpen={isOpen} setOpen={setOpen}/>
        </div>
    )
}
export default Navbar