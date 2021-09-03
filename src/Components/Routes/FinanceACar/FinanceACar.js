import React,{useEffect,useRef,useState} from 'react'
import { introTextAnimation,imageRevealAnimation, financeFormAnimation,exploreMoreAnimation} from './animations'
import styles from './FinanceACar.module.css'
import finance from './assets/finance.jpg'
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
import { Helmet } from 'react-helmet';


const FinanceACarPage = () =>{
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
    var introText   = "We offer various finance plans for various cars!"
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

        emailjs.sendForm('service_eg35c8q', 'template_y9m2jg9', e.target, 'user_s8506rcfJ1NXwiPZmILT8')
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
            <Helmet>
                <meta charSet="utf-8" />
                <title>ARV TUNING|Finance A Car</title>
                <meta name="description" content="Financing a car is easy with ARV TUNING. We offer various finance plans for various cars." />
            </Helmet>
        <div className={styles.container} ref={container}>
             <div className={styles.landingPageWrapper} >
                <div className={styles.headingWrapper}><h1>Finance A Car</h1></div>
                <div className={styles.imageContainer}>
                    <img src={finance} ref={image}/>
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
                        <h3> Fill out the Finance Form below and a member of our team will be in touch with you.</h3>
                    </div>
                    <div className={styles.financeFormWrapper}>
                            <div className={styles.financeFormImage}>
                                <img src={redAudi} ref={financeFormImage}/>
                                <div className={styles.financeFormImageAfter} ref={financeFormImageAfter}/>
                            </div>
                            <div className={styles.financeForm} ref={inputWrapper}>
                                  <form onSubmit={onSumbit} autoComplete="true">
                        <div className={styles.formDetails}>
                            <h4> Personal Details</h4>
                            <div className ={styles.inputFieldWrapper}>
                                  <div className={styles.inputField}>
                                        <h1>Full Name</h1>
                                        <input autoComplete="none"  required="true" name ="FullName" placeholder="Enter Full Name"/>
                                    </div>
                                    <div className={styles.inputField}>
                                        <h1>Email Address</h1>
                                        <input autoComplete="none" type="email"required="true"name ="EmailAddress" placeholder="Enter Email Address"/>
                                    </div>
                                    <div className={styles.inputField}>
                                        <h1>Phone Number</h1>
                                        <input  autoComplete="none" required="true" name ="PhoneNumber" placeholder="Enter Phone Number"/>
                                    </div>

                                    <div className={styles.inputField}>
                                        <h1>Date Of Birth</h1>
                                        <input autoComplete="none" required="true" name ="DOB" type="date" placeholder="Select Date Of Birth"/>
                                    </div>

                                    <div className={styles.inputField}>
                                        <h1>Address</h1>
                                        <input autoComplete="none" required="true"name ="Address" placeholder="Enter Address"/>
                                    </div>
                                    
                                    <div className={styles.inputField}>
                                        <h1>City</h1>
                                        <input autoComplete="none" required="true"name ="City" placeholder="Enter City"/>
                                    </div>
                                    
                                    <div className={styles.inputField}>
                                        <h1>Postcode</h1>
                                        <input autoComplete="none" required="true"name ="Postcode" placeholder="Enter Postcode"/>
                                    </div>
                                    <div className={styles.inputField}>
                                        <h1>Martial Status</h1>
                                        <select name="MartialStatus" required="true">
                                        <option value="defaultValue">Select Martial Status</option>
                                            <option value="Married">Married</option>
                                            <option value="Single">Single</option>
                                            <option value="Divorced">Divorced</option>
                                            <option value="Widowed">Widowed</option>
                                            <option value="Seperated">Seperated</option>
                                            <option value="Cohabiting">Cohabiting</option>
                                        </select>
                                    </div>
                                    <div className={styles.inputField}>
                                        <h1>Gender</h1>
                                        <select name="Gender" required="true">
                                            <option value="defaultValue">Select Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div className={styles.inputField}>
                                        <h1>Term Lived at Current Address</h1>
                                        <select name="TermAtCurrentAddress" required="true">
                                            <option value="defaultValue">Term Lived At Current Address</option>
                                            <option value="Less than a year">Less than  a year</option>
                                            <option value="1-2 years">1-2 years</option>
                                            <option value="3-5 years">3-4 years</option>
                                            <option value="5-10 years">5-10 years</option>
                                            <option value="More than 10 years">More than 10 years</option>
                                        </select>
                                    </div>

                                    <div className={styles.inputField}>
                                        <h1>Status at Current Address</h1>
                                        <select name="StatusAtCurrentAddress" required="true">
                                            <option value="defaultValue">Status at Current Address</option>
                                            <option value="Home Owner">Home Owner</option>
                                            <option value="Tenant">Tenant</option>
                                            <option value="Furnished Tenant">Furnished Tenant</option>
                                            <option value="Unfurnished Tenant">Unfurnished Tenant</option>
                                            <option value="Living with parents">Living with parents</option>
                                            <option value="Living with partner">Living with partner</option>
                                        </select>
                                    </div>
                                </div>
                            </div>


                            <div className={styles.formDetails}>
                            <h4> Occupation</h4>
                            <div className ={styles.inputFieldWrapper}>
                                  <div className={styles.inputField}>
                                        <h1>Occupation</h1>
                                        <input autoComplete="none"  required="true" name ="Occupation" placeholder="Occupation"/>
                                    </div>
                                    <div className={styles.inputField}>
                                        <h1>Employer</h1>
                                        <input autoComplete="none" required="true"name ="Employer" placeholder="Employer"/>
                                    </div>
                                    <div className={styles.inputField}>
                                        <h1>Years at Employment</h1>
                                        <input  autoComplete="none" required="true" name ="YearsAtEmployment" placeholder="Years At Employment"/>
                                    </div>

                                    <div className={styles.inputField}>
                                        <h1>Annual Salary</h1>
                                        <input autoComplete="none" required="true" name ="AnnualSalary" placeholder="Annual Salary"/>
                                    </div>

                                    <div className={styles.inputField}>
                                        <h1>Employers Address</h1>
                                        <input autoComplete="none" required="true" name ="EmployersAddress" placeholder="Employers Address"/>
                                    </div>

                                    <div className={styles.inputField}>
                                        <h1>Post Code</h1>
                                        <input autoComplete="none" required="true"name ="PostCode" placeholder="Enter Post Code"/>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.formDetails}>
                            <h4> Car Details</h4>
                            <div className ={styles.inputFieldWrapper}>
                                  <div className={styles.inputField}>
                                        <h1>Car Registration </h1>
                                        <input autoComplete="none"  required="true" name ="CarRegistration" placeholder="Enter Car Registration"/>
                                    </div>
                                    <div className={styles.inputField}>
                                        <h1>Car Mileage</h1>
                                        <input autoComplete="none" required="true"name ="CarMileage" placeholder="Enter Mileage"/>
                                    </div>
                                    <div className={styles.inputField}>
                                        <h1>Sale Price</h1>
                                        <input  autoComplete="none" required="true" name ="SalePrice" placeholder="Enter Sale Price"/>
                                    </div>

                                    <div className={styles.inputField}>
                                        <h1>Deposit</h1>
                                        <input autoComplete="none" required="true" name ="Deposit" placeholder="Enter Deposit"/>
                                    </div>

                                    <div className={styles.inputField}>
                                        <h1>Amount to Borrow</h1>
                                        <input autoComplete="none" required="true"name ="AmountToBorrow" placeholder="Enter Amount to borrow"/>
                                    </div>

                                    <div className={styles.inputField}>
                                        <h1>Finance Package</h1>
                                        <select name="FinancePackage" required="true" defaultValue="FinancePackage">
                                            <option value="default" selected>Select Finance Package</option>
                                            <option value="Hire Purchase">Hire Purchase (HP)</option>
                                            <option value="Personal Contract Purchase">Personal Contract Purchase (PCP)</option>
                                            <option value="Lease Purchase">Lease Purchase</option>
                                        </select>
                                    </div>
                                </div>
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
export default FinanceACarPage