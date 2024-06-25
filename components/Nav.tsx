import { Bars3Icon } from "@heroicons/react/20/solid"
import React from "react";
import { Link } from "react-scroll";

interface Props {
    openNav: () => void;
}

const Nav = ({openNav}:Props) => {
    return (
        <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md">
            <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
                <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
                    RYAN
                    <span className="text-purple-500"> JAIN</span>
                </h1>
                <Link to="home" smooth={true} duration={500} className="nav-link cursor-pointer">HOME</Link>
                <Link to="about" smooth={true} duration={500} className="nav-link cursor-pointer">ABOUT</Link>
                <Link to="experience" smooth={true} duration={500} className="nav-link cursor-pointer">EXPERIENCE</Link>
                <Link to="projects" smooth={true} duration={500} className="nav-link cursor-pointer">PROJECTS</Link>
                <Link to="contact" smooth={true} duration={500} className="nav-link cursor-pointer">CONTACT</Link>
                <div onClick={openNav}>
                    <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-purple-500"/>
                </div>
            </div>
        </div>
    )
};

export default Nav;