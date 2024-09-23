import React,{useRef,useEffect} from "react";
import gsap from "gsap";

const Project = () => {

    const ProjectRef = useRef(null)

    useEffect(() => {
        gsap.set(ProjectRef.current, { x:1000, opacity: 0 });

        gsap.to(ProjectRef.current,{
            x:0,
            opacity:1,
            delay:3,
            duration:1,
            ease: "power2.out",
        });
    }, []);

    return (
        <>
            <div  ref={ProjectRef} className="bg-PCBG md:row-span-26 md:mr-3 md:ml-0 md:col-span-3 sm:row-span-12 rounded-xl items-center justify-center flex sm:ml-3 sm:col-span-12">
            </div>

        </>
    )
}
export default Project;