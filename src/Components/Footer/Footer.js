import styles from './Footer.module.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Button } from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
const Footer = () =>{

    return(
        <div className={styles.container}>
            <div className={styles.leftGrid}>
                <div className={styles.socials}>
                    <a href="https://www.facebook.com/ARV-Tuning-114814396888123/?hc_ref=ARTFmGZzBnXEELGK-CHXJ72vGyWnhLbjMLl_zJzYREA5stB0-MjuhF5NhdgLvJhKogA&__tn__=%3C-R"> <Button><FacebookIcon  style={{color:'white'}}/></Button></a>
                    <a href="https://www.instagram.com/arv_tuning_official/?hl=en"><Button><InstagramIcon style={{color:'white'}}/></Button></a>
                </div>
                <p>© Copyright 2021 ARV TUNING. All Rights</p>
            </div>
            <div className={styles.rightGrid}>
               <div className={styles.contact}> <MailOutlineIcon/><h2>arvtuningofficial@gmail.com</h2></div>
               <div className={styles.contact}> <PhoneIcon/><h2>07904 924733</h2></div>
            </div>
        </div>
    )
}
export default Footer