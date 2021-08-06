import { gsap } from "gsap/all";
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)


export const exploreMoreAnimation = (exploreHeader,exploreLinks,exploreContainer) =>{
    gsap.to([
        exploreHeader.current,
        exploreLinks.current.children[0],
        exploreLinks.current.children[1],
        exploreLinks.current.children[2],
        exploreLinks.current.children[3],
    ],{
     //   scrollTrigger:{
       // trigger:exploreContainer.current,
        //start: 'top center',
        //end: ' bottom',
        //},    
        top:'0px',
        opacity:1,
        duration:.5,
        ease:'power3.easeInOut',
        stagger:{
            amount:1
        }
    })
}