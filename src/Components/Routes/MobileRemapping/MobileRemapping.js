import React,{useEffect,useRef,useState} from 'react'
import { introTextAnimation,imageRevealAnimation, financeFormAnimation,exploreMoreAnimation} from './animations'
import styles from './Finance.module.css'
import orangeAudi from './assets/orangeAudi.jpg'
import finance from './assets/finance.jpg'
import audi from './assets/audi.jpg'
import { Button } from '@material-ui/core'
import { gsap } from 'gsap/all'
import LoadingPage from '../../LoadingPage/LoadingPage'
import Footer from '../../Footer/Footer'
import emailjs from 'emailjs-com';

const FinancePage = () =>{
    //USESTATE FOR FINANCE FORM
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [emailAddress,setEmailAddress] = useState('')
    const [homeAddress,setHomeAddress] = useState('')
    const [DOB,setDOB] = useState('')
    const [vehicleRegistration,setVehicleRegistration] = useState('')
    const [phoneNumber,setPhoneNumber] = useState('')
    const [emailOK,setEmailOK] = useState(false)
    //FOR THE IMAGE REVEAL ANIMATION
    const container = useRef(null)
    const image = useRef(null)
    const imageReveal = useRef(null)
    //INTRO TEXT REFS AND VARIABLES TO SEPERATE THE H1 TAGS
    const introTextWrapper = useRef(null)
    var introText   = "Want to finance a car? You've come to the right place "
    var introTextArray = introText.split(/[ ,]+/)
    //FINANCE FORM REFS 
    const financeFormContainer = useRef(null)
    const financeFormImage = useRef(null)
    const inputWrapper = useRef(null)
    //FOR EXPLORE CONTAINER ANIMATION
    const exploreContainer = useRef(null)
    const exploreHeader = useRef(null)
    const exploreLinks = useRef(null)
    useEffect(()=>{
        gsap.to(container.current,{delay:3,css:{opacity:1}})
        introTextAnimation(introTextWrapper)
        imageRevealAnimation(image,imageReveal)
        financeFormAnimation(financeFormContainer)
        exploreMoreAnimation(exploreHeader,exploreLinks,exploreContainer)
    })
    //ONSUBMIT FORM
    const onSumbit = (e) =>{
        e.preventDefault()

        emailjs.sendForm('service_51ty0ft', 'template_livslam', e.target, 'user_RBE4vFmCZAy8E8cqQ1gZ1')
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
                <div className={styles.headingWrapper}><h1>Finance a Car.</h1></div>
                <div className={styles.imageContainer}>
                    <img src={audi} ref={image}/>
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
                        <h3> Fill out the finance form below and a member of our team will be in touch with you shortly</h3>
                    </div>
                    <div className={styles.financeFormWrapper}>
                            <div className={styles.financeFormImage}>
                                <img src={orangeAudi} ref={financeFormImage}/>
                            </div>
                            <div className={styles.financeForm} ref={inputWrapper}>
                                  <form onSubmit={onSumbit}>
                                    <div className={styles.inputField}>
                                        <h1>First Name</h1>
                                        <input  autoComplete="none" required="true" name ="FirstName"/>
                                    </div>

                                    <div className={styles.inputField}>
                                        <h1>Last Name</h1>
                                        <input autoComplete="none" required="true" name ="LastName"/>
                                    </div>

                                    <div className={styles.inputField}>
                                        <h1>Email Address</h1>
                                        <input autoComplete="none" required="true"name ="EmailAddress" />
                                    </div>
                                    <div className={styles.inputField}>
                                        <h1>Home Address</h1>
                                        <input autoComplete="none" required="true" name ="HomeAddress"/>
                                    </div>

                                    <div className={styles.inputField}>
                                        <h1>Date of Birth</h1>
                                        <input autoComplete="none" type="date" required="true" name ="DOB"/>
                                    </div>
                                    <div className={styles.inputField}>
                                        <h1>Vehicle Registration</h1>
                                        <input autoComplete="none" required="true"name ="VehicleRegistration" />
                                    </div>
                                    <div className={styles.inputField}>
                                        <h1>Phone Number</h1>
                                        <input autoComplete="none" required="true" name ="PhoneNumber"/>
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
                            <Button><h2>Our Services</h2></Button>
                        </div>

                        <div className={styles.link}>
                            <Button><h2>Our Work</h2></Button>
                        </div>
                        <div className={styles.link}>
                            <Button><h2>Contact Us</h2></Button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    </>
    )
}
export default FinancePage