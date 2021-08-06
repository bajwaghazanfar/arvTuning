import styles from './Hamburger.module.css'
import { useEffect, useRef } from 'react'
import gsap from 'gsap/gsap-core'
import { useHistory } from 'react-router-dom'

const HamburgerMenu = ({isOpen,setOpen}) =>{
    //UseHistory
    let history = useHistory()
    //Refs for Hamburger animation
    const container = useRef(null)
    const li1 = useRef(null)
    const li2 = useRef(null)
    const li3 = useRef(null)
    const li4 = useRef(null)

    useEffect(()=>{
        if(isOpen === true){
        gsap.to(container.current,{
            zIndex:'10',
            opacity:1,
            duration:.5,
            ease:'power3.easeInOut'
        })
    }
    else{
        gsap.to([container.current],{
            zIndex:'-5',
            opacity:0,
            duration:.5,
            ease:'power3.easeInOut'
          
        })}
    })
    const redirect = (path) =>{
        history.push(path)
        setOpen(false)
    }
    return(
        <div className={styles.container} ref={container}>
            <div className={styles.wrapper}>
                <div className={styles.links}>
                        <ul>
                            <li ref={li1} onClick={()=>{redirect('/work')}}><h3>- Work</h3></li>
                            <li ref={li2} onClick={()=>{redirect('/services')}}><h3>- Services</h3></li>
                            <li ref={li3} onClick={()=>{redirect('/contactUs')}}><h3>- Contact</h3></li>
                            <li ref={li4} onClick={()=>{redirect('/finance')}}><h3>- Finance</h3></li>
                        </ul>
                    </div>
            </div>
            
        </div>
    )
}
export default HamburgerMenu