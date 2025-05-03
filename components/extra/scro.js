"use client";
import { useEffect, useRef, useState } from 'react';
import TiltedLines from './tiltedlines';

const SlidingComponent = () => {
    const componentRef = useRef(null);
    const [position, setPosition] = useState(0);
    const [borderRadius, setBorderRadius] = useState(0);
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        let rafId;
        
        const handleScroll = () => {
            rafId = requestAnimationFrame(() => {
                if (!componentRef.current) return;
                
                const rect = componentRef.current.getBoundingClientRect();
                const viewportHeight = window.innerHeight;
                const elementVisible = rect.top < viewportHeight && rect.bottom > 0;
                
                if (elementVisible) {
                    const progress = Math.max(0, Math.min(1, 1 - (rect.bottom / viewportHeight)));
                    const maxMove = componentRef.current.offsetWidth - 170;
                    const newPosition = progress * maxMove;
                    const newBorderRadius = progress * 85; // Set border radius from 0 to 85
                    const newRotation = Math.min(1080, progress * 1080);
                    setPosition(newPosition);
                    setBorderRadius(newBorderRadius);
                    setRotation(newRotation);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial position

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <div ref={componentRef} className="h-[175px] w-[90%] flex items-center relative">
            <TiltedLines height={175} showIcons={false} />
            <div 
                className="absolute z-10 h-[170px] w-[170px] bg-[#16161699] border-[#e7e7e7] border flex items-center justify-center"
                style={{ 
                    transform: `translateX(${position}px) rotate(${rotation*0.2}deg)`,
                    borderRadius: `${borderRadius*1.4}px`,
                    transition: 'none'
                }}
            >
                <img className="" src="/mrsvg.svg" alt="" />
            </div>
        </div>
    );
};

export default SlidingComponent;