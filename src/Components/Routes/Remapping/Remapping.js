import React,{useEffect,useRef,useState} from 'react'
import { introTextAnimation,imageRevealAnimation, financeFormAnimation,exploreMoreAnimation} from './animations'
import styles from './Remapping.module.css'
import interior from './assets/interior.jpg'
import audiSign from './assets/audiSign.jpg'
import 'react-dropdown/style.css';
import remapping from './assets/remapping.jpg'
import { Button } from '@material-ui/core'
import { gsap } from 'gsap/all'
import LoadingPage from '../../LoadingPage/LoadingPage'
import Footer from '../../Footer/Footer'
import emailjs from 'emailjs-com';
import redAudi from './assets/redAudi.jpg'
import blackAudi from './assets/blackAudi.jpg'
import { useHistory } from 'react-router'
import * as Scroll from 'react-scroll';

const RemappingPage = () =>{
    //React Scroll
    let scroll    = Scroll.animateScroll;
    let history = useHistory()
    //USESTATE FOR REMAPPING FORM
    const [emailOK,setEmailOK] = useState(false)
    //LOADING PAGE REF
  
    //FOR THE IMAGE REVEAL ANIMATION
    const container = useRef(null)
    const image = useRef(null)
    const imageReveal = useRef(null)
    //INTRO TEXT REFS AND VARIABLES TO SEPERATE THE H1 TAGS
    const introTextWrapper = useRef(null)
    var introText   = "We offer various Stage 1 and Stage 2 remaps for various cars. "
    var introTextArray = introText.split(/[ ,]+/)
    //FINANCE FORM REFS 
    const financeFormContainer = useRef(null)
    const financeFormImage = useRef(null)
    const financeFormImageAfter = useRef(null)
    const inputWrapper = useRef(null)
    //FOR EXPLORE CONTAINER ANIMATION
    const exploreContainer = useRef(null)
    const exploreHeader = useRef(null)
    const exploreLinks = useRef(null)
    useEffect(()=>{

        gsap.to(container.current,{delay:3,css:{opacity:1}})
        introTextAnimation(introTextWrapper)
        imageRevealAnimation(image,imageReveal)
        financeFormAnimation(financeFormContainer,inputWrapper)
        imageRevealAnimation(financeFormImage,financeFormImageAfter,financeFormContainer)
        exploreMoreAnimation(exploreHeader,exploreLinks,exploreContainer)
    })
    //ONSUBMIT FORM
    const onSumbit = (e) =>{
        e.preventDefault()
        console.log(e.target)

        emailjs.sendForm('service_51ty0ft', 'template_byy43lf', e.target, 'user_RBE4vFmCZAy8E8cqQ1gZ1')
        .then((result) => {
            console.log(result.text);
            setEmailOK(true)
            setTimeout(() => {
                setEmailOK(false)
            }, 5000);
            e.target.reset()
        }, (error) => {
            console.log(error.text);
        });
        
    }
  
    return(
    <>
     <LoadingPage/>
        <div className={styles.container} ref={container}>
             <div className={styles.landingPageWrapper} >
                <div className={styles.headingWrapper}><h1>Remapping</h1></div>
                <div className={styles.imageContainer}>
                    <img src={blackAudi} ref={image}/>
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
            
            <div className={styles.financeFormContainer} ref={financeFormContainer}>
                    <div className={styles.financeFormHeader}>
                        <h1>Let's work together.</h1>
                        <h3> Fill out the remapping form below and a member of our team will be in touch with you.</h3>
                    </div>
                    <div className={styles.financeFormWrapper}>
                            <div className={styles.financeFormImage}>
                                <img src={redAudi} ref={financeFormImage}/>
                                <div className={styles.financeFormImageAfter} ref={financeFormImageAfter}/>
                            </div>
                            <div className={styles.financeForm} ref={inputWrapper}>
                                  <form onSubmit={onSumbit}>
                                  <div className={styles.inputField}>
                                        <h1>Email Address</h1>
                                        <input autoComplete="none" type="email" required="true" name ="EmailAddress" placeholder="Enter Email Address"/>
                                    </div>
                                    <div className={styles.inputField}>
                                        <h1>Phone Number</h1>
                                        <input autoComplete="none" required="true"name ="PhoneNumber" placeholder="Enter Phone Number"/>
                                    </div>
                                    <div className={styles.inputField}>
                                        <h1>Vehicle Registration</h1>
                                        <input  autoComplete="none" required="true" name ="VehicleRegistration" placeholder="Enter Vehicle Registration"/>
                                    </div>

                                    <div className={styles.inputField}>
                                        <h1>Make of Car</h1>
                                        <input autoComplete="none" required="true" name ="MakeOfCar" placeholder="Enter Make Of Car"/>
                                    </div>

                                    <div className={styles.inputField}>
                                        <h1>Model of Car</h1>
                                        <input autoComplete="none" required="true"name ="ModelOfCar" placeholder="Enter Model Of Car"/>
                                    </div>
                                    <div className={styles.inputField}>
                                        <h1>In-House HQ or Mobile Service</h1>
                                        <select name="InboundOrOutbound" required="true" defaultValue="Select Stage Type">
                                            <option value="default" selected>Select In House HQ or Mobile Service</option>
                                            <option value="In House HQ">In House HQ</option>
                                            <option value="Mobile Service">Mobile Service</option>
                                        </select>
                                    </div>
                                    <div className={styles.inputField}>
                                        <h1>Stage Type</h1>
                                        <select name="stageType" required="true">
                                            <option value="defaultValue">Select Stage Type</option>
                                            <option value="Stage 1 + Speed limit remove">Stage 1 + speed limit remove</option>
                                            <option value="Stage 2 + Speed limit remove">Stage 2 + speed limit remove</option>
                                            <option value="Ecomap">Eco Remap etc.</option>
                                        </select>
                                    </div>
                                    <div className={styles.inputField}>
                                        <h1>Date of appointment</h1>
                                        <input autoComplete="none" required="true" name ="Date" type="date" placeholder="Select Date Of Appointment"/>
                                    </div>
                                    <div className={styles.inputField}>
                                        <h1>Time of Appointment</h1>
                                        <input autoComplete="none" required="true" name ="TimeOfAppointment" type="time" placeholder="Select Time Of Appointment"/>
                                    </div>
                                    <div className={styles.inputField}>
                                        <h1>Any additional enquires</h1>
                                        <input autoComplete="none" required="true" name ="Enquires" placeholder="Type any additional enquires here"/>
                                    </div>
                                    
                                   <div className={styles.buttonWrapper}>
                                     <Button type="submit"><h3>Submit </h3></Button>
                                   </div>
                                   <hr></hr>
                                   <div className={styles.success} style={emailOK?{opacity:1}:{opacity:0}}>
                                        <h1>Your message has been sent successfuly!</h1>
                                    </div>

                                  </form>
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
export default RemappingPage