"use client";

import React, { useState } from 'react'
import { Search as SearchIcon, SlidersHorizontal, X } from 'lucide-react'

const search = () => {
    const [query, setQuery] = useState("");
    const [region, setRegion] = useState("All");
    const [subregion, setSubRegion] = useState("All");
    const [showFilter, setShowFilter] = useState(false);

    // Temporary states, They store data before clicking on apply
    const [tempRegion, setTempRegion] = useState(region);
    const [tempSubRegion, setTempSubRegion] = useState(subregion);

    const handleOpenFilters = () => {
        setTempRegion(region);
        setTempSubRegion(subregion);
        setShowFilter(true);
    };

    const handleApply = () => {
        setRegion(tempRegion);
        setSubRegion(tempSubRegion);
        setShowFilter(false);
    };

    const handleClear = () => {
        setTempRegion("All");
        setTempSubRegion("All");
    };

    // Regions 
    const regions = ['Africa','Americas','Asia','Europe','Oceania']
    const subRegions = ["Northern","Southern","Eastern","Western"]

    return (
        <div className="relative w-full max-w-4xl mx-auto">
            <div className="relative w-full flex items-center">
                {/* Search Input */}
                <SearchIcon
                    size={18}
                    className="absolute left-4 text-white/70 z-10 pointer-events-none"
                />
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search countries..."
                    className="w-full text-white rounded-xl border border-border/50 bg-card/30 backdrop-blur-md py-3 pl-11 pr-12 shadow-sm outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-primary/20 placeholder-white/50"
                />
                {/* Filter Icon Button Inside Search Input */}
                <button
                    className="absolute right-3 p-1.5 text-white/70 hover:text-white hover:bg-white/10 z-10 rounded-lg transition"
                    onClick={showFilter ? () => setShowFilter(false) : handleOpenFilters}
                >
                    <SlidersHorizontal size={18} />
                </button>
            </div>

            {/* Floating popover */}
            {showFilter && (
                <div className="absolute right-0 mt-2 w-80 bg-card/95 backdrop-blur-md border border-border/50 rounded-2xl shadow-xl z-50 p-6 flex flex-col gap-5 text-foreground animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="flex justify-between items-center pb-2 border-b border-border/30">
                        <span className="font-bold text-foreground text-lg">Refine Results</span>
                        <button onClick={() => setShowFilter(false)} className="text-muted-foreground hover:text-foreground transition">
                            <X size={18} />
                        </button>
                    </div>

                    {/* Region */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-semibold text-muted-foreground">Region</label>
                        <select
                            value={tempRegion}
                            onChange={(e) => {
                                setTempRegion(e.target.value);
                                setTempSubRegion("All"); // Reset subregion when region changes
                            }}
                            className="w-full rounded-xl border border-border/50 bg-card/60 px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary/50 focus:bg-card transition"
                        >
                            <option value="All" className="bg-card text-foreground">All Regions</option>
                            {regions.map((region) => (
                                <option key={region} value={region} className="bg-card text-foreground">{region}</option>
                            ))}
                        </select>
                    </div>

                    {/* Subregion */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-semibold text-muted-foreground">Subregion</label>
                        <select
                            value={tempSubRegion}
                            onChange={(e) => setTempSubRegion(e.target.value)}
                            className="w-full rounded-xl border border-border/50 bg-card/60 px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary/50 focus:bg-card transition disabled:opacity-50"
                            disabled={tempRegion === "All"}
                        >
                            <option className="bg-card text-foreground">All</option>
                            {subRegions.map((subRegion) => (
                                <option key={subRegion} value={subRegion} className="bg-card text-foreground">{subRegion}</option>
                            ))}
                        </select>
                    </div>

                    {/* Footer Actions */}
                    <div className="flex gap-3 pt-3 border-t border-border/30 text-sm">
                        <button
                            onClick={handleClear}
                            className="flex-1 py-2.5 font-bold text-muted-foreground hover:bg-muted/30 rounded-xl transition"
                        >
                            CLEAR
                        </button>
                        <button
                            onClick={handleApply}
                            className="flex-1 py-2.5 font-bold bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl transition shadow-sm"
                        >
                            APPLY
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default search;