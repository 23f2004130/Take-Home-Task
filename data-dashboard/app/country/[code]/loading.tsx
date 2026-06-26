'use client'

import PixelSnow from "@/app/components/PixelSnow";
import "./loading.css";

export default function Loading() {
  return (
    <>
    <div className="loading-container">
      <div className="loading-card">
        <div className="spaceship-wrapper">
          <img 
            src="/spaceship (1).png" 
            alt="Spaceship Transit" 
            className="w-48 h-48 object-contain"
          />
          <div className="thruster-glow" />
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-bold text-white tracking-wide">
            Jumping to Destination
          </h2>
          <p className="text-sm text-gray-400 font-medium">
            Acquiring coordinates & translating sector data...
          </p>
        </div>

        <div className="progress-bar-container">
          <div className="progress-bar-fill" />
        </div>
      </div>
    </div>
    
    <PixelSnow />
    </>
  );
}