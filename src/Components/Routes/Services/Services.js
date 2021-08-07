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
        var introText   = "Remapping Financing Tuning "
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
         scroll.scrollToTop()
        gsap.to(container.current,{delay:3,css:{opacity:1}})
        imageRevealAnimation(image,imageReveal)
        introTextAnimation(introTextWrapper)
        exploreMoreAnimation(exploreHeader,exploreLinks,exploreContainer)
        servicesFadeIn(allServicesContainer,service1,service2,service3)

   
    })

    return(
    <>
     <LoadingPage/>
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
                <div></div>
                <div className={styles.allServicesWrapper}>
                    <a href="/finance">
                        <div className={styles.services}  ref={service1}>
                            <div className={styles.servicesImageContainer} >
                              <img src={finance}  ref={ serviceimage1}/>
                              <div className={styles.imageOverlay} ref={imageOverlay} onMouseEnter={()=>{onHoverImageOverlay(serviceimage1)}} onMouseLeave={()=>{onHoverImageOverlayLeave(serviceimage1)}}>
                                    <div className={styles.serviceText}>
                                      <h1>Finance</h1>
                                      <h3>Learn more about our finance plans</h3>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </a>
                        <div className={styles.services} ref={service2}onClick={()=>{history.push('/remapping')}}>
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

                        <div className={styles.services} ref={service3} onClick={()=>{history.push('/mobileRemapping')}}>
                            <div className={styles.servicesImageContainer} >
                              <img src={mobileRemapping}  ref={ serviceimage4}/>
                              <div className={styles.imageOverlay} onMouseEnter={()=>{onHoverImageOverlay(serviceimage4)}} onMouseLeave={()=>{onHoverImageOverlayLeave(serviceimage4)}}>
                                    <div className={styles.serviceText}>
                                      <h1>Mobile Remapping</h1>
                                      <h3>Check out our mobile remapping services</h3>
                                    </div>
                                </div>
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