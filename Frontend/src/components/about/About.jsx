import React,{useEffect,useRef} from "react";
import gsap from "gsap";

const About = () => {

    const AboutRef = useRef(null)

    useEffect(() => {
        gsap.set(AboutRef.current, { x:-1000, opacity: 0 });

        gsap.to(AboutRef.current,{
            x:0,
            opacity:1,
            delay:1.2,
            duration:1,
            ease: "power2.out",
        });
    }, []);

    return (
        <>
            <div ref={AboutRef} className="bg-PCBG overflow-hidden md:row-span-12 md:mb-4 md:col-span-5 ml-3 rounded-xl sm:col-span-7 flex flex-col sm:row-start-7 sm:order-1 sm:row-end-11 order-4 md:-order-none sm:mb-0 pl-3">
                <div className="flex  flex-col">
                    <div className="w-full flex justify-between items-center">
                        <div className="text-4xl">Get to Know Me</div>
                        <img src="/Video/GEAR.gif" alt="" className="w-[5.5vw] self-end mr-2"/>
                    </div>
                </div>
                <div className="w-full flex">
                    <div className=" self-end text-pretty text-[0.9vw] mr-2">I'm a creative web developer crafting seamless user experiences through modern web technologies. Specializing in transforming ideas into dynamic digital solutions that stand out, I build with the MERN stack, optimize designs with Tailwind, and integrate smooth animations using GSAP. My focus is always on delivering high-performance, responsive interfaces that engage users effortlessly.
                    </div>
                </div>
            </div>
        </>
    )
}
export default About;