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
            <div ref={AboutRef} className="bg-PCBG overflow-hidden md:row-span-12 md:mb-4 md:col-span-5 ml-3 rounded-xl sm:col-span-7 flex flex-col sm:row-start-7 sm:order-1 sm:row-end-11 order-4 md:-order-none sm:mb-0 ">
                <div className="flex  flex-col justify-between h-full">
                    <div className="w-[5.5vw] self-end mr-2">
                        <img src="/Video/GEAR.gif" alt="" />
                    </div>
                </div>
                <div className="w-full flex ">
                    <div className="m-3 self-end text-pretty text-[0.9vw]">I'm a creative web developer with a knack for crafting seamless user experiences. Specializing in modern web technologies, I turn ideas into functional, dynamic digital solutions that stand out. Whether it's building with the MERN stack or optimizing design with Tailwind, I focus on delivering high-performance, responsive interfaces that engage users.
                    </div>
                </div>
            </div>
        </>
    )
}
export default About;