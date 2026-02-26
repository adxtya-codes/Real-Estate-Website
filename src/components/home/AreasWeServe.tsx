"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import IndiaMap from "./IndiaMap";

const locations = [
    { name: "Delhi NCR", top: "28%", left: "40%", projects: "120+" },
    { name: "Mumbai", top: "58%", left: "20%", projects: "85+" },
    { name: "Bangalore", top: "82%", left: "44%", projects: "95+" },
    { name: "Hyderabad", top: "68%", left: "48%", projects: "70+" },
    { name: "Pune", top: "62%", left: "23%", projects: "50+" },
];

export default function AreasWeServe() {
    return (
        <section className="py-24 px-6 bg-brand-blue relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-8 order-2 lg:order-1">
                    <div className="space-y-4">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-brand-gold font-bold uppercase tracking-[0.2em] text-sm"
                        >
                            Our Footprint
                        </motion.span>
                        <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white leading-tight">
                            Premium Presence <br /> Across <span className="text-brand-gold">Major Cities</span>
                        </h2>
                        <p className="text-white/60 leading-relaxed max-w-lg">
                            We focus on high-growth corridors and luxury precincts across India's top Tier-1 cities, ensuring our clients get access to the most exclusive developments.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        {locations.map((loc, i) => (
                            <motion.div
                                key={loc.name}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-4 group cursor-pointer"
                            >
                                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-brand-gold group-hover:text-brand-blue transition-all">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">{loc.name}</h4>
                                    <p className="text-brand-gold text-sm font-medium">{loc.projects} Projects</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Interactive Map Area (India Map) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="w-full lg:w-1/2 aspect-square relative bg-white/5 rounded-[3rem] border border-white/10 overflow-hidden flex items-center justify-center order-1 lg:order-2"
                >
                    <IndiaMap />
                </motion.div>
            </div>
        </section>
    );
}
