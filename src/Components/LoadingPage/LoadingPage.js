import styles from './LoadingPage.module.css'
import logo from './assets/logo.png'
import { useRef,useEffect } from 'react'
import { gsap } from 'gsap/all'
import { entryAnimation, leaveAnimation } from './animations'

const LoadingPage = () =>{
 
    const bg1 = useRef(null)
    const bg2 = useRef(null)
    const img = useRef(null)
    const container = useRef(null)

    useEffect(()=>{
        entryAnimation(bg1,bg2,img)
        leaveAnimation(bg1,bg2)
        gsap.to(container.current,{css:{display:'none'},delay:6})
    })
    return(
    <div ref={container}>

        <div className={styles.bg1} ref={bg1}></div>
            <div className={styles.bg2 } ref={bg2}>
                <div className={styles.imageWrapper}>
                    <img src={logo} ref={img}/>
                </div>
            </div>
    </div>
        
    )
}
export default LoadingPage