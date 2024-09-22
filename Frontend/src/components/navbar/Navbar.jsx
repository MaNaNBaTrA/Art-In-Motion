import React from "react";

const Navbar = ()=>{

    const LOGO = import.meta.env.VITE_LOGO_IMAGE_PATH;

    return(
        <>
        <div className="bg-PCBG md:row-span-2 col-span-12 md:mx-3 sm:mr-0 mx-3 mt-3 rounded-xl  sm:row-span-1 sm:col-span-full items-center justify-center flex row-span-1 ">
            <div className="w-full flex items-center justify-between ">
                <div className="h-52 w-52"><img className="cursor-pointer" src={LOGO} alt="" /></div>
                <div className=" flex m-6 items-center gap-16 text-lg">
                    <div className="cursor-pointer">Projects</div>
                    <div className="cursor-pointer">About</div>
                    <div className="cursor-pointer">Contact</div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Navbar;      