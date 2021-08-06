import { gsap } from "gsap/all";

export const entryAnimation = (bg1,bg2,img) =>{
    gsap.to([bg1.current,bg2.current],{
        top:'0px',
        skewY:'0px',
        duration:1,
        stagger:{
            amount:.2
        }
    })

    gsap.to(img.current,{
        left:'0px',
        opacity:1,
        delay:1.5
    })  
    gsap.to(img.current,{
        left:'-20px',
        opacity:0,
        delay:4
    })  
}
export const leaveAnimation = (bg1,bg2) =>{
    gsap.to([bg2.current,bg1.current],{
        top:'-1500px',
        duration:2,
        delay:4,
        skewY:'3px',
        stagger:{
            amount:.2
        }
    })

}