import React,{useEffect,useRef,useState} from 'react'
import { introTextAnimation,imageRevealAnimation, financeFormAnimation,exploreMoreAnimation} from './animations'
import styles from './ContactUs.module.css'
import orangeAudi from './assets/orangeAudi.jpg'
import question from './assets/question.jpg'
import hello from './assets/hello.jpg'
import { Button } from '@material-ui/core'
import { gsap } from 'gsap/all'
import LoadingPage from '../../LoadingPage/LoadingPage'
import Footer from '../../Footer/Footer'
import emailjs from 'emailjs-com';
import { useHistory } from 'react-router'
import * as Scroll from 'react-scroll';

const ContactUs = () =>{
    //React Scroll
    let scroll    = Scroll.animateScroll;
    //History instance
     let history = useHistory()
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
    var introText   = "Have an enquiry? Contact us! "
    var introTextArray = introText.split(/[ ,]+/)
    //FINANCE FORM REFS 
    const financeFormContainer = useRef(null)
    const financeFormHeader = useRef(null)
    const inputWrapper = useRef(null)
    const financeFormImage = useRef(null)
    const financeFormImageAfter = useRef(null)
    //FOR EXPLORE CONTAINER ANIMATION
    const exploreContainer = useRef(null)
    const exploreHeader = useRef(null)
    const exploreLinks = useRef(null)
    useEffect(()=>{
        scroll.scrollToTop()
        gsap.to(container.current,{delay:3,css:{opacity:1}})
        introTextAnimation(introTextWrapper)
        imageRevealAnimation(image,imageReveal)
        imageRevealAnimation(financeFormImage,financeFormImageAfter,financeFormContainer)
        financeFormAnimation(financeFormContainer,inputWrapper)
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
                <div className={styles.headingWrapper}><h1>Contact Us.</h1></div>
                <div className={styles.imageContainer}>
                    <img src={hello} ref={image}/>
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
                    <div className={styles.financeFormHeader} ref={financeFormHeader}>
                        <h1>Contact Us</h1>
                        <h3> Have a question? Fill out the form below and a member of our team will be in touch with you shortly</h3>
                    </div>
                    <div className={styles.financeFormWrapper}>
                            <div className={styles.financeFormImage}>
                                <img src={question} ref={financeFormImage}/>
                                <div className={styles.financeFormImageAfter} ref={financeFormImageAfter}/>
                            </div>
                            <div className={styles.financeForm} ref={inputWrapper}>
                                  <form onSubmit={onSumbit}>
                                    <div className={styles.inputField}>
                                        <h1>First Name</h1>
                                        <input  autoComplete="none" required="true" name ="FirstName" placeholder="Enter First Name"/>
                                    </div>

                                    <div className={styles.inputField}>
                                        <h1>Last Name</h1>
                                        <input autoComplete="none" required="true" name ="LastName" placeholder="Enter Last Name"/>
                                    </div>

                                    <div className={styles.inputField}>
                                        <h1>Email Address</h1>
                                        <input autoComplete="none" required="true"name ="EmailAddress" placeholder="Enter Email Address" />
                                    </div>
                                    <div className={styles.inputField}>
                                        <h1>Phone</h1>
                                        <input autoComplete="none" required="true" name ="Phone" placeholder="Enter Phone Number"/>
                                    </div>

                                    <div className={styles.inputField}>
                                        <h1>Enquiry</h1>
                                        <input autoComplete="none"required="true" name ="Enquiry" placeholder="Enter your enquiry"/>
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
                          <a href="/remapping">  <Button ><h2>Remapping</h2></Button></a>
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
export default ContactUs