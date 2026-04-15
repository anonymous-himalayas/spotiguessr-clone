"use client";

import { useState, useEffect } from "react";

export default function SpotifyRain() {
  const [logos, setLogos] = useState<{left: number, duration: number, delay: number, size: number}[]>([]);
  useEffect(() => {
    setLogos(Array.from({length: 20}, (_, i) => ({
    left: (i / 20) * 95 + Math.random() * 4,
    duration: Math.random() * 4 + 3,
    delay: Math.random() * 5,
    size: Math.random() * 60 + 40,})))
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
      {logos.map((logo, index) => (
        <img key={index} src="/spotify-logo.png"
          style={{
            position: "absolute",
            left: `${logo.left}%`,
            width: `${logo.size}px`,
            animation: `fall ${logo.duration}s linear ${logo.delay}s infinite`,
            top: -100,
          }}>
        </img>
      ))}
    </div>
  )
}