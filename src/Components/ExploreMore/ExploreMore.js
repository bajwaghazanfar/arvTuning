import styles from './ExploreMore.module.css'
import { useEffect,useRef } from 'react'
import { exploreMoreAnimation } from './animations'


const ExploreMore = () =>{
    const exploreContainer = useRef(null)
    const exploreHeader = useRef(null)
    const exploreLinks = useRef(null)


    useEffect(()=>{
    
        exploreMoreAnimation(exploreHeader,exploreLinks,exploreContainer)
      
  

    })
    
    return(
        <div className={styles.exploreContainer} ref={exploreContainer}>
                <div className={styles.leftGrid}>
                    <h1 ref={exploreHeader}>Explore.</h1>
                </div>
                <div className={styles.rightGrid}>
                    <div className={styles.rightGridWrapper} ref={exploreLinks}>
                        <div className={styles.link}>
                            <Button><h2>Our Services</h2></Button>
                        </div>

                        <div className={styles.link}>
                            <Button><h2>Our Work</h2></Button>
                        </div>

                        <div className={styles.link}>
                            <Button><h2>Finance Plans</h2></Button>
                        </div>
                        <div className={styles.link}>
                            <Button><h2>Contact Us</h2></Button>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default ExploreMore