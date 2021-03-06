import React,{useEffect,useRef} from 'react'
import styles from './Services.module.css'
import finance from './assets/finance.jpg'
import remapping from './assets/remapping.jpeg'
import tuning from './assets/tuning.jpg'
import garage from './assets/garage.jpg'
import LoadingPage from '../../LoadingPage/LoadingPage'
import {imageRevealAnimation,introTextAnimation, onHoverImageOverlay, onHoverImageOverlayLeave,exploreMoreAnimation, servicesFadeIn} from './animations'
import Footer from '../../Footer/Footer'
import { Button } from '@material-ui/core'
import gsap from 'gsap/gsap-core'
import mobileRemapping from './assets/mobileRemapping.jpg'
import { useHistory } from 'react-router'
import * as Scroll from 'react-scroll';
import dodge from './assets/dodge.jpg'
import { Helmet } from 'react-helmet'

const Services = () =>{
    //History instance
    let history = useHistory()
    let scroll    = Scroll.animateScroll;
     // FOR THE CONTAINER AND IMAGE ANIMATION
     const container = useRef(null)
     const image = useRef(null)
     const imageReveal = useRef(null)

      //INTRO TEXT REFS AND VARIABLES TO SEPERATE THE H1 TAGS
        const introTextWrapper = useRef(null)
        var introText   = "Remapping Financing "
        var introTextArray = introText.split(/[ ,]+/)

         //FOR WORK IMAGE CONTAINER ANIMATION 
        const workImageContainer1 = useRef(null)

        //FOR SERVICE IMAGE CONTAINER ANIMATION 
        const serviceimage1 = useRef(null)
        const serviceimage2 = useRef(null)
        const serviceimage3 = useRef(null)
        const serviceimage4 = useRef(null)
        const imageOverlay = useRef(null)

        //SERVICE REFS
        const allServicesContainer = useRef(null)
        const service1 = useRef(null)
        const service2 = useRef(null)
        const service3 = useRef(null)
        //FOR EXPLORE CONTAINER ANIMATION
        const exploreContainer = useRef(null)
        const exploreHeader = useRef(null)
        const exploreLinks = useRef(null)
     

     useEffect(()=>{
        gsap.to(container.current,{delay:3,css:{opacity:1}})
        imageRevealAnimation(image,imageReveal)
        introTextAnimation(introTextWrapper)
        exploreMoreAnimation(exploreHeader,exploreLinks,exploreContainer)
        servicesFadeIn(allServicesContainer,service1,service2,service3)

   
    })

    return(
    <>
     <LoadingPage/>
        <Helmet>
                <meta charSet="utf-8" />
                <title>ARV TUNING | Services</title>
                <meta name="description" content="At ARV TUNING we offer various services for various cars. |Financing|Remapping|" />
        </Helmet>
        <div className={styles.container} ref={container}>
           <div className={styles.landingPageWrapper} >
                <div className={styles.headingWrapper}><h1>Our Services</h1></div>
                <div className={styles.imageContainer}>
                    <img src={garage} ref={image}/>
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

            <div className={styles.allServicesContainer} ref={allServicesContainer}>
                <div className={styles.emptyDiv}></div>
                <div className={styles.allServicesWrapper}>
                    <a href="/finance">
                        <div className={styles.services}  ref={service1}>
                            <div className={styles.servicesImageContainer} >
                              <img src={finance}  ref={ serviceimage1}/>
                              <div className={styles.imageOverlay} ref={imageOverlay} onMouseEnter={()=>{onHoverImageOverlay(serviceimage1)}} onMouseLeave={()=>{onHoverImageOverlayLeave(serviceimage1)}}>
                                    <div className={styles.serviceText}>
                                      <h1>Finance your remap</h1>
                                      <h3>Learn more about our financing plans for your remaps</h3>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </a>
                    <a href="/remapping">
                        <div className={styles.services} ref={service2}>
                            <div className={styles.servicesImageContainer} >
                              <img src={remapping}  ref={ serviceimage3}/>
                              <div className={styles.imageOverlay} onMouseEnter={()=>{onHoverImageOverlay(serviceimage3)}} onMouseLeave={()=>{onHoverImageOverlayLeave(serviceimage3)}}>
                                    <div className={styles.serviceText}>
                                      <h1>Remapping</h1>
                                      <h3>Check out our remapping services</h3>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </a>


                    <a href="/finance-a-car">
                        <div className={styles.services} ref={service3}>
                            <div className={styles.servicesImageContainer} >
                              <img src={dodge}  ref={ serviceimage3}/>
                              <div className={styles.imageOverlay} onMouseEnter={()=>{onHoverImageOverlay(serviceimage4)}} onMouseLeave={()=>{onHoverImageOverlayLeave(serviceimage4)}}>
                                    <div className={styles.serviceText}>
                                      <h1>Finance A Car</h1>
                                      <h3>Finance one of our cars today!</h3>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </a>

                </div>
            </div>

            <div className={styles.exploreContainer} ref={exploreContainer}>
                <div className={styles.leftGrid}>
                    <h1 ref={exploreHeader}>Explore.</h1>
                </div>
                <div className={styles.rightGrid}>
                    <div className={styles.rightGridWrapper} ref={exploreLinks}>
                    <div className={styles.link}>
                          <a href="/work">  <Button ><h2>Our Work</h2></Button></a>
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
export default Services