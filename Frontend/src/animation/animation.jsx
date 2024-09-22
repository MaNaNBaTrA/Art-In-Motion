import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const TimelineAnimation = () => {
    const LogoRef = useRef(null);
    const ProjectRef = useRef(null);
    const AboutRef = useRef(null);
    const ContactRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1, yoyo: true });

        tl.from(LogoRef.current, { y:-100, duration: 1 }) 
          .from(ProjectRef.current, { y:-100, duration: 1 }) 
          .from(AboutRef.current, { y:-100, duration: 1 }, "<") 
          .from(ContactRef.current, { y:-100, duration: 1 },"<") 
    }, []);
};

export default TimelineAnimation;
