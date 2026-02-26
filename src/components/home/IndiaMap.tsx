"use client";

import { motion } from "framer-motion";
import IndiaMapData from "@svg-maps/india";

// Coordinates roughly based on viewBox "0 0 612 696"
// These might need tweaking depending on the exact SVG projection.
const cityMarkers = [
    { name: "Delhi", cx: 215, cy: 155 },
    { name: "Mumbai", cx: 135, cy: 405 },
    { name: "Pune", cx: 155, cy: 430 },
    { name: "Bangalore", cx: 220, cy: 545 },
    { name: "Hyderabad", cx: 250, cy: 450 },
];

export default function IndiaMap() {
    const map = IndiaMapData;

    return (
        <div className="relative w-full h-full flex items-center justify-center p-8 overflow-hidden group">
            {/* Soft background glow */}
            <div className="absolute inset-0 bg-brand-blue/30 backdrop-blur-3xl rounded-[3rem] -z-10" />

            <svg
                viewBox={map.viewBox}
                className="w-full h-full max-h-[550px] object-contain drop-shadow-2xl"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Map Paths */}
                <g className="india-map-paths">
                    {map.locations.map((location: any) => (
                        <motion.path
                            key={location.id}
                            id={location.id}
                            name={location.name}
                            d={location.path}
                            initial={{ fill: "#1e293b", stroke: "#334155" }}
                            whileHover={{ fill: "#334155", stroke: "#E6B836" }}
                            transition={{ duration: 0.3 }}
                            className="outline-none cursor-pointer vector-path"
                            strokeWidth="1"
                        />
                    ))}
                </g>

                {/* City Markers */}
                {cityMarkers.map((city, idx) => (
                    <g key={city.name}>
                        {/* Pulse Effect */}
                        <motion.circle
                            cx={city.cx}
                            cy={city.cy}
                            r="15"
                            fill="#E6B836"
                            initial={{ opacity: 0.5, scale: 0.5 }}
                            animate={{ opacity: 0, scale: 2.5 }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: idx * 0.4,
                                ease: "easeOut"
                            }}
                        />
                        {/* Inner Dot */}
                        <circle
                            cx={city.cx}
                            cy={city.cy}
                            r="6"
                            fill="#E6B836"
                            className="drop-shadow-[0_0_8px_rgba(230,184,54,0.8)]"
                        />
                    </g>
                ))}
            </svg>

            {/* Interactive map label */}
            <div className="absolute bottom-8 right-8 text-right">
                <p className="text-white/40 text-xs tracking-[0.2em] font-bold uppercase leading-tight">
                    Interactive<br />Presence Map
                </p>
            </div>
        </div>
    );
}
