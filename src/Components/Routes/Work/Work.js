import { gsap } from 'gsap/all'
import React, { useEffect, useRef } from 'react'
import { exploreMoreAnimation, imageRevealAnimation, introTextAnimation } from './animations'
import leon from './assets/leon.jpg'
import garage from './assets/garage.jpg'
import bmw from './assets/bmw.jpg'
import styles from './Work.module.css'
import golfr from './assets/golfr.jpg'
import audi from './assets/audi.jpg'
import vw from './assets/vw.jpg'
import LoadingPage from '../../LoadingPage/LoadingPage'
import { Button } from '@material-ui/core'
import Footer from '../../Footer/Footer'
import { useHistory } from 'react-router'
import * as Scroll from 'react-scroll';

const Work = () =>{
    //React Scroll
    let scroll    = Scroll.animateScroll;
    //React Router History Instance
    let history = useHistory()
    // FOR THE CONTAINER AND IMAGE ANIMATION
    const container = useRef(null)
    const image = useRef(null)
    const imageReveal = useRef(null)

    //INTRO TEXT REFS AND VARIABLES TO SEPERATE THE H1 TAGS
    const introTextWrapper = useRef(null)
    var introText   = "At ARV Tuning we have extensive experience on a wide variety of cars "
    var introTextArray = introText.split(/[ ,]+/)

    //FOR WORK IMAGE CONTAINER ANIMATION 
    const workImageContainer1 = useRef(null)
    const workImageContainer2 = useRef(null)
    const workImageContainer3 = useRef(null)

    const workimage1 = useRef(null)
    const workimageReveal1 = useRef(null)
    
    const workimage2 = useRef(null)
    const workimageReveal2 = useRef(null)

    const workimage3 = useRef(null)
    const workimageReveal3 = useRef(null)

    //FOR EXPLORE CONTAINER ANIMATION
    
    const exploreContainer = useRef(null)
    const exploreHeader = useRef(null)
    const exploreLinks = useRef(null)

   
 

    useEffect(()=>{
        scroll.scrollToTop()
        gsap.to(container.current,{delay:3,css:{opacity:1}})
        imageRevealAnimation(image,imageReveal)
        introTextAnimation(introTextWrapper)

        imageRevealAnimation(workimage1,workimageReveal1,workImageContainer1)
        imageRevealAnimation(workimage2,workimageReveal2,workImageContainer2)
        imageRevealAnimation(workimage3,workimageReveal3,workImageContainer3)

        exploreMoreAnimation(exploreHeader,exploreLinks,exploreContainer)
  
    

      

    })

   
    return(
    <>
     <LoadingPage/>
        <div className={styles.container} ref={container}>
            <div className={styles.landingPageWrapper} >
                <div className={styles.headingWrapper}><h1>Our Work</h1></div>
                <div className={styles.imageContainer} id="imageContainer">
                    <img src={golfr} ref={image}/>
                    <div className={styles.imageContainerAfter} ref={imageReveal}/>
                </div>
               
            </div>

            <div className={styles.introTextWrapper} ref={introTextWrapper}>
                <div className={styles.introText}>
                    {introTextArray.map(map =>(
                        <h1 >{map} <br/></h1>
                    ))}
                </div>
            </div>
            <div className={styles.allWorkContainer}>
                <div></div>
                <div className={styles.allWorkWrapper}>
                      <div className={styles.work} >
                            <div className={styles.workImageContainer} ref={workImageContainer1}>
                              <img src={bmw}  ref={workimage1}/>
                              <div className={styles.workImageContainerAfter} ref={workimageReveal1}/>
                            </div>
                            <div className={styles.workText} >
                                <h1 >BMW</h1>
                                <p>
                                    At ARV Tuning, we offer a multitude of services. 
                                    <br/>
                                    One of these include affordable, high vehicle diagnostics primarily for VAGCOM vehicles.
                                    <br/>
                                    After having extensive experience in diagnosing and fixing a variety of issues, we can certainly diagnose any issue you have, no matter the complexity.
                                </p>
                            </div>
                           
                        </div>

                        <div className={styles.work} >
                            <div className={styles.workImageContainer} ref={workImageContainer2}>
                                <img src={audi} ref={workimage2}/>
                                <div className={styles.workImageContainerAfter} ref={workimageReveal2}/>
                            </div>
                            <div className={styles.workText} >
                                <h1 >Audi</h1>
                           
                                <p>
                                    At ARV Tuning, we offer a multitude of services. 
                                    <br/>
                                    One of these include affordable, high vehicle diagnostics primarily for VAGCOM vehicles.
                                    <br/>
                                    After having extensive experience in diagnosing and fixing a variety of issues, we can certainly diagnose any issue you have, no matter the complexity.
                                </p>
                            </div>
                           
                        </div>

                        <div className={styles.work} >
                            <div className={styles.workImageContainer} ref={workImageContainer3}>
                              <img src={vw} ref={workimage3}/>
                              <div className={styles.workImageContainerAfter} ref={workimageReveal3}/>
                            </div>
                            <div className={styles.workText} >
                                <h1 >VW </h1>
                                <p>
                                    At ARV Tuning, we offer a multitude of services. 
                                    <br/>
                                    One of these include affordable, high vehicle diagnostics primarily for VAGCOM vehicles.
                                    <br/>
                                    After having extensive experience in diagnosing and fixing a variety of issues, we can certainly diagnose any issue you have, no matter the complexity.
                                </p>
                            </div>
                           
                        </div>
                </div>
            </div>
                <div className={styles.exploreContainer} ref={exploreContainer}>
                    <div className={styles.leftGrid}>
                        <h1 ref={exploreHeader}>Explore.</h1>
                    </div>
                    <div className={styles.rightGrid}>
                        <div className={styles.rightGridWrapper} ref={exploreLinks}>
                            <div className={styles.link}>
                                <Button onClick={()=>{history.push('/services')}}><h2>Our Services</h2></Button>
                            </div>
                            <div className={styles.link}>
                                <Button onClick={()=>{history.push('/finance')}}><h2>Financing</h2></Button>
                            </div>
                            <div className={styles.link}>
                                <Button onClick={()=>{history.push('/contactUs')}}><h2>Contact Us</h2></Button>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    </>
    )
}

export default Work