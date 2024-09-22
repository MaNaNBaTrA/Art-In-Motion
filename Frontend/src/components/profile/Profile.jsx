import React from "react";

const Profile = () => {

    const Skill = import.meta.env.VITE_SKILL_VIDEO_PATH;

    return (
        <>
            <div className="bg-PCBG md:col-span-3 rounded-xl sm:ml-0  flex sm:col-span-5 md:mr-0 sm:mr-3 col-span-12 sm:row-span-5 md:row-span-8 mx-3 row-span-4">
                {/* <div className="w-full h-full object-fill rounded-xl overflow-hidden flex"><img src={Profile} alt=""  /></div> */}
                <div className="ml-4 w-full h-full">
                    <div className=" flex items-center justify-between">
                        <div className="text-3xl font-medium mt-4">Skills</div>
                        <img src={Skill} alt="" className="w-28 mr-[20%]" />
                    </div>
                    <div className="ml-4">
                        <ul className="text-xl font-medium list-disc">
                            <li>MERN</li>
                            <li>HTML/CSS</li>
                            <li>JavaScript</li>
                            <li>Tailwind</li>
                            <li>Git</li>
                            <li>Postman</li>
                            <li>APIs</li>
                            <li>Teamwork</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Profile;