import { gsap } from "gsap/all";
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)


export const onLoadAnimation = (container,introText,video) =>{
    gsap.to(container.current,{
        opacity:1,
        delay:4.5,
        duration:.5
    })

    gsap.to([introText.current.children[0],introText.current.children[1]],{
        opacity:1,
        top:'0px',
        duration:.5,
        delay:5,
        stagger:{
            amount:1
        }
    })
}

export const serviceAnimation = (img,heading,description,information) =>{
    gsap.to([img.current,heading.current,description.current],{
        scrollTrigger:{
            trigger:information.current,
            start: 'top center',
            end: ' bottom',
        },

        opacity:1,
        left:'0px',
        duration:.5,
        ease:'power3.easeInOut',
        stagger:{
            amount:2
        },

    })
}
export const vehicleOnHoverEffect = (image,container) =>{
    gsap.to(container.current,{
        duration:0,
        background:`url(${image}) center center`
    })
    gsap.from(container.current,{
        duration:.4,
        skewY:1,
        transformOrigin:"right top"
    })

    
}
export const vehicleOnHoverEffectLeave = (container) =>{
    gsap.to(container.current,{
        duration:.4,
        background:`#F4F6F7 `,
        skewY:0
    })
}

export const companyOnScrollAnimation = (companyInfo,audi,bmw,vw) =>{
    console.log(companyInfo)
    gsap.to([companyInfo.current,
        audi.current,
        bmw.current,
        vw.current
        ],{
            scrollTrigger:{
           trigger:companyInfo.current,
            start: 'top center',
            end: ' bottom',
        },    
        left:'0px',
        opacity:1,
        duration:.5,
        ease:'power3.easeInOut',
        stagger:{
            amount:1
        }
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