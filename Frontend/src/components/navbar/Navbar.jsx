import React, { useEffect, useRef } from "react";
import { gsap } from 'gsap';

const Navbar = () => {

    const LOGO = import.meta.env.VITE_LOGO_IMAGE_PATH;

    const LogoRef = useRef(null);
    const ProjectRef = useRef(null);
    const AboutRef = useRef(null);
    const ContactRef = useRef(null);
    const NavRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        // Set initial states for the elements
        gsap.set(LogoRef.current, { y: -100, opacity: 0 });
        gsap.set(ProjectRef.current, { y: -100, opacity: 0 });
        gsap.set(AboutRef.current, { y: -100, opacity: 0 });
        gsap.set(ContactRef.current, { y: -100, opacity: 0 });
        gsap.set(NavRef.current, { x: -1000, opacity: 0 })

        tl.to(NavRef.current, { x: 0, opacity: 1, duration: 1,ease: "power2.out", })
            .to(LogoRef.current, { y: 0, opacity: 1, duration: 1 ,ease: "power2.out",})
            .to(ProjectRef.current, { y: 0, opacity: 1, duration: 0.5 ,ease: "power2.out",})
            .to(AboutRef.current, { y: 0, opacity: 1, duration: 0.5 ,ease: "power2.out",})
            .to(ContactRef.current, { y: 0, opacity: 1, duration: 0.5,ease: "power2.out", });
    }, []);

    return (
        <>
            <div ref={NavRef} className="bg-PCBG md:row-span-5 col-span-12 md:mx-3 sm:mr-0 mx-3 mt-3 rounded-xl  sm:row-span-1 sm:col-span-full items-center justify-center flex row-span-1 ">
                <div className="w-full flex items-center justify-between ">
                    <div className="h-52 w-52" ><img className="cursor-pointer" src={LOGO} alt="LOGO IMG" ref={LogoRef} /></div>
                    <div className=" flex m-6 items-center gap-16 text-lg">
                        <div className="cursor-pointer" ref={ProjectRef}>Projects</div>
                        <div className="cursor-pointer" ref={AboutRef}>About</div>
                        <div className="cursor-pointer" ref={ContactRef}>Contact</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar;      