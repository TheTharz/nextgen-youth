"use client";

import { useEffect, useState, useRef } from "react";

function AnimatedNumber({ value }: { value: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    const numericPart = parseInt(value.replace(/[^0-9]/g, "")) || 0;
    const suffix = value.replace(/[0-9]/g, "");

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTimestamp: number | null = null;
        const duration = 2000;

        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * numericPart));

            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                setCount(numericPart);
            }
        };

        window.requestAnimationFrame(step);
    }, [isVisible, numericPart]);

    return (
        <span ref={ref}>
            {isVisible ? count : 0}{suffix}
        </span>
    );
}

export default function StatsSection({ dict }: { dict: any }) {
    const stats = [
        { label: dict.home.stats.meetings, value: "3" },
        { label: dict.home.stats.projects, value: "1" },
        { label: dict.home.stats.members, value: "25+" },
    ];

    return (
        <section className="relative z-20 -mt-8 sm:-mt-16 mx-4 sm:mx-6 lg:mx-8 max-w-7xl xl:mx-auto mb-16">
            <div className="bg-white/80 backdrop-blur-xl border border-white shadow-xl rounded-3xl p-6 sm:p-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:divide-x divide-y sm:divide-y-0 divide-gray-200">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center justify-center py-4 sm:py-0">
                            <span className="text-4xl md:text-5xl font-extrabold mb-2 text-[#00003c] drop-shadow-sm">
                                <AnimatedNumber value={stat.value} />
                            </span>
                            <span className="text-gray-600 text-lg font-medium tracking-wide">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
