'use client';
import { useState, useEffect } from 'react';

export default function Meeter() {
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const radius = 85;
    const circumference = 2 * Math.PI * radius;
    const fillPercentage = ((100 - scrollPercentage) / 100) * circumference;

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = window.scrollY;
            const percent = Math.min(Math.round((scrolled / windowHeight) * 100), 100);
            setScrollPercentage(percent);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="w-full h-full flex justify-center items-center bg-[#161616]">
            <div className="relative p-8">
                <svg width="250" height="250" viewBox="0 0 300 300" className="transform -rotate-90">
                    <defs>
                        <linearGradient id="glowGradient" x1="20%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{ stopColor: '#DF52A9', stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: '#DF52A9', stopOpacity: 0.5 }} />
                        </linearGradient>
                        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
                            <feGaussianBlur stdDeviation="12" result="coloredBlur2"/>
                            <feMerge>
                                <feMergeNode in="coloredBlur2"/>
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                    </defs>
                    
                    <circle 
                        cx="150" 
                        cy="150" 
                        r={radius}
                        fill="none"
                        stroke="#333333"
                        strokeWidth="14"
                    />
                    
                    <circle 
                        cx="150" 
                        cy="150" 
                        r={radius}
                        fill="none"
                        stroke="url(#glowGradient)"
                        strokeWidth="18"
                        strokeDasharray={circumference}
                        strokeDashoffset={fillPercentage}
                        strokeLinecap="round"
                        filter="url(#glow)"
                        className="transition-all duration-1000 ease-out"
                    />
                </svg>
                
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="fonc text-4xl font-bold text-white">
                        {scrollPercentage}%
                    </span>
                    <p  ></p>
                </div>
            </div>
        </div>
    );
}