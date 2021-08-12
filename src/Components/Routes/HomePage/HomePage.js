import styles from './HomePage.module.css'
import videoBackground from './assets/videoBackground.mp4'
import { gsap } from "gsap";
import {useEffect,useRef,useState} from 'react'
import LoadingPage from '../../LoadingPage/LoadingPage'
import { onLoadAnimation, serviceAnimation,carSlideShow, vehicleOnHoverEffect, companyOnScrollAnimation, exploreMoreAnimation } from './animation/animation';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import gtr from './assets/gtr.mp4'
import {Button} from '@material-ui/core'
import Footer from '../../Footer/Footer';
import { useHistory,Redirect } from 'react-router-dom';
import * as Scroll from 'react-scroll';

const HomePage = () =>{
     //React Scroll
    let scroll    = Scroll.animateScroll;
    let history = useHistory()

    const container = useRef(null)
    const introText = useRef(null)
    const video = useRef(null)
    
    const information1 = useRef(null)
    const img1 = useRef(null)
    const heading1 = useRef(null)
    const description1 = useRef(null)

    const information2 = useRef(null)
    const img2 = useRef(null)
    const heading2 = useRef(null)
    const description2 = useRef(null)

    const information3 = useRef(null)
    const img3 = useRef(null)
    const heading3 = useRef(null)
    const description3 = useRef(null)

    const companyContainer = useRef(null)
    const companyInfo = useRef(null)
    const audiInfo = useRef(null)
    const bmwInfo = useRef(null)
    const vwInfo = useRef(null)

    const exploreContainer = useRef(null)
    const exploreHeader = useRef(null)
    const exploreLinks = useRef(null)


    useEffect(()=>{
        scroll.scrollToTop()
        onLoadAnimation(container,introText,video)
        serviceAnimation(img1,heading1,description1,information1)
        serviceAnimation(img2,heading2,description2,information2)
        companyOnScrollAnimation(companyInfo,audiInfo,bmwInfo,vwInfo)
        exploreMoreAnimation(exploreHeader,exploreLinks,exploreContainer)
      
     
      
  

    })
    


    return(
    <>
      <LoadingPage/>
        <div className={styles.container} ref={container}>
            <div className={styles.videoBackgroundWrapper}>
            <div className={styles.introText} >
                    <div className={styles.introTextWrapper} ref={introText}>
                        <h1 > ARV Tuning</h1>
                        <h1 >Create the car of your dreams</h1>
                    </div>
                </div>
                <video src={videoBackground} muted={true} loop={true} autoPlay={true} ref={video}/>
                <div className={styles.overlay}></div>
            </div>
            

            <div className={styles.informationWrapper}>
                <div className={styles.information} ref={information1}>
                    <div className={styles.imageContainer} ref={img1}/>
                    <div className={styles.imgText} >
                        <h1 ref={heading1}>Diagnostics</h1>
                        <p ref={description1}>
                        At ARV Tuning, we offer a multitude of services. 
                        <br/>
                        One of these include affordable, high vehicle diagnostics primarily for VAGCOM vehicles.
                        <br/>
                        After having extensive experience in diagnosing and fixing a variety of issues, we can certainly diagnose any issue you have, no matter the complexity.
                        </p>
                    </div>
                </div>

                <div className={styles.information} ref={information2} id="information2" >
                    <div className={styles.videoContainer} ref={img2}>
                      <video src={gtr} muted={true} autoPlay={true} loop={true}/>
                    </div>
                    <div className={styles.imgText} >
                    <h1 ref={heading2}  >Remapping </h1>
                    <p ref={description2} >
                    Want your ECU tuned so you can squeeze all the extra power you can out of it?
                    <br/>
                    Desire some knarly anti-lag to keep your turbo spooling at all RPM's? Those Pops And Bangs are a serious head turner!
                    <br/>
                    At ARV Tuning we do it all. We offer various remaps at affordable prices and of-course at the highest standard ;)
                    <br/>
                    Click <a href="/remapping">here</a> to find out more.
                    </p>
                    </div>
                </div>

            </div>

       
          

         

    
            <div className={styles.redirect}>
                <div className={styles.redirectHeading}>
                    <a href="/services"><h1>Explore Our Services</h1></a>
                    <ArrowForwardIcon style={{color:'#6c6c6c'}}/>
                </div> 
            </div>

            <div className={styles.companyContainer} ref={companyContainer}>
                <div className={styles.companyWrapper}>
                    <div ref={companyInfo} className={styles.companyInfo}>
                        <h1>Our Company</h1>
                        <h2>At ARV Tuning, we deliver and we deliver fast. Your priorities are our no.1 concern</h2>
                    </div>
                    <div className={styles.vehicleWrapper} >
                        <div className={styles.vehicle} ref={audiInfo}>
                            <h2>Audi</h2>
                            <div className={styles.vehicleDescription}>
                             <p>Who doesn't love a reliable german car? At ARV TUNING, we have an extensive background and large portfolio of customers, who have come to us for and had thier car worked on.</p>
                            </div>
                        </div>
                        
                        <div className={styles.vehicle} ref={bmwInfo}>
                            <h2>BMW</h2>
                            <div className={styles.vehicleDescription}>
                                <p>BMW's have always been a favourite. We offer various remaps for BMW's including Stage 1 and Stage 2 remaps aswell as the infamous pops and bangs which have always been a favorite</p>
                            </div>
                        </div>

                        <div className={styles.vehicle} ref={vwInfo}>
                            <h2>VW</h2>
                            <div className={styles.vehicleDescription}>
                                <p>Ah, Volkswagen a german make known for its reliablity and ease of repair. But don't be mistaken, VW has thier own fleet of sports cars including the infamous GOLF R and GOLF GTI, both of which we have worked on in the past and created custom Stage 1 and 2 remaps.</p>
                            </div>
                        </div>

                    </div>
                </div>
                    <div className={styles.redirect}>
                        <div className={styles.redirectHeading}>
                            <h1 style={{color:'white'}}>Explore Our Work.</h1>
                            <ArrowForwardIcon style={{color:'white'}}/>
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
export default HomePage