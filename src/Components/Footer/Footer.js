import styles from './Footer.module.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Button } from '@material-ui/core';
const Footer = () =>{

    return(
        <div className={styles.container}>
            <div className={styles.leftGrid}>
                <div className={styles.socials}>
                    <Button><FacebookIcon  style={{color:'white'}}/></Button>
                    <Button><InstagramIcon style={{color:'white'}}/></Button>
                </div>
                <p>© Copyright 2021 ARV TUNING. All Rights</p>
            </div>
            <div className={styles.rightGrid}>
                <h2>Email:Ammar@gmail.com</h2>
                <h2>07348764334</h2>
            </div>
        </div>
    )
}
export default Footer