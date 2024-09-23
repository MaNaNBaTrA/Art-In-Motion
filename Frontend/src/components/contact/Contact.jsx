import React,{useEffect,useRef} from "react";
import gsap from "gsap";

const Contact = () => {

    const ContactRef = useRef(null)

    useEffect(() => {
        gsap.set(ContactRef.current, { x:1000, opacity: 0 });

        gsap.to(ContactRef.current,{
            x:0,
            opacity:1,
            delay:2.2,
            duration:1,
            ease: "power2.out",
        });
    }, []);

    const email = import.meta.env.VITE_EMAIL;

    return (
        <>
            <div ref={ContactRef} className="bg-PCBG2 md:row-span-12 md:mb-4 sm:order-2 sm:mb-0 md:-order-none md:col-span-4 rounded-xl  md:mr-0 flex sm:row-start-7 sm:row-end-11 sm:col-span-6 sm:mr-3">
                <div className="w-full m-4 flex justify-between flex-col">
                    <div className="flex justify-between items-center text-wrap">
                        <div>Have some questions?</div>
                        <div className="cursor-pointer">
                            <a href={`mailto:${email}`} target="_blank">
                                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none">
                                    <g id="Arrow / Arrow_Up_Right_LG">
                                        <path id="Vector" d="M18.3646 5.63623H11.2939M18.3646 5.63623L18.3643 12.7073M18.3646 5.63623L5.63672 18.3642" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="text-4xl cursor-pointer"><a href={`mailto:${email}`} target="_blank">Contact me</a></div>
                </div>
            </div>
        </>
    )
}
export default Contact;