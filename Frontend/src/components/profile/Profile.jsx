import React,{useEffect,useRef} from "react";
import gsap from "gsap";


const Profile = () => {

    const ProfileRef = useRef(null)

    useEffect(() => {
        gsap.set(ProfileRef.current, { x:1000, opacity: 0 });

        gsap.to(ProfileRef.current,{
            x:0,
            opacity:1,
            delay:2,
            duration:1,
            ease: "power2.out",
        });
    }, []);

    const Skill = import.meta.env.VITE_SKILL_GIF_PATH;
    const Resume = import.meta.env.VITE_RESUME_PATH;

    return (
        <>
            <div ref={ProfileRef} className="bg-PCBG md:col-span-3 rounded-xl sm:ml-0  flex sm:col-span-5 md:mr-0 sm:mr-3 col-span-12 sm:row-span-5 md:row-span-19 mx-3 row-span-4">

                <div className="flex justify-between w-full">
                    <div className=" w-full">
                        <div className="text-4xl font-medium mt-4 ml-5 mb-3">Skills</div>
                        <div className="ml-12">
                            <ul className="text-responsive-increase font-medium list-disc">
                                <li>MERN</li>
                                <li>HTML/CSS</li>
                                <li>JavaScript</li>
                                <li>Tailwind</li>
                                <li>Gsap</li>
                                <li>Git</li>
                                <li>Postman</li>
                                <li>APIs</li>
                                <li>Teamwork</li>
                            </ul>
                        </div>
                        <div className="bg-PCBG2 text-xl font-medium inline-flex  p-3  rounded-xl mt-4 ml-4 ">
                            <a href={Resume} download="Manan-Resume.pdf" className="flex gap-2">
                                <svg className="w-5" viewBox="0 0 512 512"><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
                                </svg>
                                Resume</a>
                        </div>
                    </div>
                    <div className="w-[50%]">
                        <img src={Skill} alt="Skill GIF" className="w-24 mr-[20%]" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Profile;