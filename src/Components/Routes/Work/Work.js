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
import { Helmet } from 'react-helmet'

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
            <Helmet>
                <meta charSet="utf-8" />
                <title>ARV TUNING|WORK</title>
                <meta name="description" content="At ARV TUNING we have an extensive background on a wide variety of performance cars. Ranging from Golf R's to BMW's" />
            </Helmet>
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
                                    At ARV Tuning, we have tuned various BMW's and created custom Stage 1 and Stage 2 remaps for these cars. With our remaps, you can be sure that your pops and bangs will be heard and that you can squeeze every ounce of power out of your engine!
                                    <br/>
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
                                Audi cars, infamous for thier four wheel drive quattro systems. At ARV Tuning we have created custom Stage 1 and Stage 2 remaps for these robust german cars. With our remaps they'll be launching off the line quicker than ever!
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
                                  At ARV Tuning we have created  Stage 1 and Stage 2 remaps for the infamous Golf R's, GTI's and GTD's. With our Stage 1 and Stage 2 remaps, you can be sure that you'll give all cars on the road a run for thier money!
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
                          <a href="/services">  <Button ><h2>Our Services</h2></Button></a>
                        </div>

                        <div className={styles.link}>
                          <a href="/finance">  <Button ><h2>Financing</h2></Button></a>
                        </div>

                        <div className={styles.link}>
                          <a href="/contactUs">  <Button ><h2>Contact Us</h2></Button></a>
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