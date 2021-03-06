import { gsap } from "gsap/all";
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const imageRevealAnimation = (image,imageReveal,container) =>{
    if(container != null){
        gsap.to(imageReveal.current,{
            scrollTrigger:{
                trigger:container.current,
                start: 'top center',
                end: ' bottom',
            },
            width:'0%',
            duration:1.5,
            delay:.5,
            transition:'power2.easeInOut'
        })
        gsap.to(image.current,{
            scrollTrigger:{
                trigger:container.current,
                start: 'top center',
                end: ' bottom',
            },
            scale:1,
            delay:.8,
            duration:1.5,
            ease:'power3.easeInOut'
        })
    }else{
        gsap.to(imageReveal.current,{
            width:'0%',
            duration:2,
            delay:5,
            transition:'power2.easeInOut'
        })
        gsap.to(image.current,{
            scale:1,
            delay:5.2,
            duration:1.5,
            ease:'power3.easeInOut'
        })
    }
}

export const introTextAnimation = (introTextWrapper) =>{

    const element1 = introTextWrapper.current.children[0].children[0]
    const element2 = introTextWrapper.current.children[0].children[1]
    const element3 = introTextWrapper.current.children[0].children[2]
    const element4 = introTextWrapper.current.children[0].children[3]
    const element5 = introTextWrapper.current.children[0].children[4]
    const element6 = introTextWrapper.current.children[0].children[5]
    const element7 = introTextWrapper.current.children[0].children[6]
    const element8 = introTextWrapper.current.children[0].children[7]
   
 
    gsap.to([
        element1,
        element2,
        element3,
        element4,
        element5,
        element6,
        element7,
        element8,
     ],{
        scrollTrigger:{
             trigger:introTextWrapper.current,
              start: 'top center',
              end: ' bottom',
          },    
        top:'0px',
        opacity:1,
        ease:'power3.easeInOut',
        stagger:{
            amount:2
        }
    })   
 }
 export const financeFormAnimation = (financeFormContainer,inputWrapper) =>{
    gsap.to(inputWrapper.current,{
        scrollTrigger:{
            trigger:financeFormContainer.current,
            start: 'top center',
            end: ' bottom',
        },
        left:'0px',
        opacity:1,
        duration:.5,
        ease:"power3.easeInOut",

    })
}
export const exploreMoreAnimation = (exploreHeader,exploreLinks,exploreContainer) =>{
    gsap.to([
        exploreHeader.current,
        exploreLinks.current.children[0],
        exploreLinks.current.children[1],
        exploreLinks.current.children[2],
        exploreLinks.current.children[3],
    ],{
        scrollTrigger:{
            trigger:exploreContainer.current,
            start: 'top center',
            end: ' bottom',
        }, 
        top:'0px',
        opacity:1,
        duration:.5,
        ease:'power3.easeInOut',
        stagger:{
            amount:1
        }
    })
}