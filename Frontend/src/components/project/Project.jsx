import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";

const Project = () => {

    const projects = [
        {
            id: 1,
            name: "Booking Web",
            image: "/Images/Booking.png",
        },
        {
            id: 2,
            name: "Task List",
            image: "/Images/TaskList.png",
        },
        {
            id: 3,
            name: "Sleek Portfolio",
            image: "/Images/Portfolio.png",
        },
        {
            id: 4,
            name: "Knowledge Hub",
            image: "/Images/Education.png",
        }
    ]

    const ProjectRef = useRef(null)

    const [expandedImage, setExpandedImage] = useState(projects[0].image);

    useEffect(() => {
        gsap.set(ProjectRef.current, { x: 1000, opacity: 0 });

        gsap.to(ProjectRef.current, {
            x: 0,
            opacity: 1,
            delay: 3,
            duration: 1,
            ease: "power2.out",
        });
    }, []);

    const Expand = (image) => {
        setExpandedImage(expandedImage === image ? null : image);
    };

    return (
        <div ref={ProjectRef} className="bg-PCBG md:row-span-26 md:mr-3 md:ml-0 md:col-span-3 sm:row-span-12 rounded-xl  flex sm:ml-3 sm:col-span-12">
            <div className="flex flex-col w-full h-full">
                <div className="flex items items-center">
                    <img src="/Images/P1.png" alt="Project Img" className="w-20 m-4" />
                    <div className="text-3xl">Projects</div>
                </div>
                {projects.map((item) => (
                    <div className="flex gap-2 flex-col p-4">
                        <div className="flex justify-between items-center cursor-pointer" key={item.id} onClick={() => Expand(item.image)}>
                            <span className="text-xl">{item.name}</span>
                            <span >
                                <svg width="26px" height="26px" viewBox="0 0 24 24" fill="none">
                                    <g id="Arrow / Arrow_Up_Right_LG">
                                        <path id="Vector" d="M18.3646 5.63623H11.2939M18.3646 5.63623L18.3643 12.7073M18.3646 5.63623L5.63672 18.3642" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                </svg>
                            </span>
                        </div>
                        {expandedImage === item.image && <img src={item.image} alt={`${item.name} Image`} className="rounded-xl w-full transition-transform duration-100000 " />}
                        <span className="block border-b-2 border-b-PCBG2"></span>
                    </div>
                ))}
            </div>

        </div>
    )
}
export default Project;