import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);


const Title = () => {

    const TextRef = useRef(null);
    const TitleRef = useRef(null)

    const tl = gsap.timeline();

    useEffect(() => {

        gsap.set(TitleRef.current, { x: -1000, opacity: 0 });

        tl.to(TitleRef.current,{
            x:0,
            opacity:1,
            delay:1,
            duration:1,
            ease: "power2.out",
        })
            .to(TextRef.current, {
                duration: 2,
                text: "Where Creativity Meets Code.",
                repeat: -1,
                yoyo:true,
                ease: "power2.out",
            });
    }, []);

    return (
        <>
            <div ref={TitleRef} className="bg-PCBG md:row-span-19  sm:row-span-5 md:mr-0 md:col-span-6 md:mx-3 rounded-xl  flex sm:col-span-8 col-span-12 row-span-4 sm:ml-3 sm:mr-0 mx-3 px-6 py-2">
                <div className="flex w-full h-full flex-col justify-between gap-[2vw]">
                    <div className=" inline-block  w-[80%] h-[20%]  mb-[2vw] mt-[2vw]">
                        <div className="text-[4vw]" ref={TextRef}></div>
                    </div>
                    <div className="flex w-full">
                        <div className="text-[2.2vw] text-wrap">Web Innovator Shaping Digital Experiences with Cutting-Edge Technology</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Title;