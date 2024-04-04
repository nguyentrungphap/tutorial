import { Button } from "@mui/material";
import React from "react";

function HeroSection() {
  return (
    <div className="hero-container flex flex-col items-center justify-center h-screen bg-gray-800 relative">
      <video
        src="/videos/video-1.mp4"
        autoPlay
        loop
        muted
        className="object-cover w-full h-full absolute top-0 left-0 z-0"
      />
      <h1 className="text-white text-6xl md:text-7xl lg:text-8xl mb-8 z-10">
        ADVENTURE AWAITS
      </h1>
      <p className="text-white text-xl md:text-2xl lg:text-3xl mb-12 z-10">
        What are you waiting for?
      </p>
      <div className="hero-btns z-10">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={() => console.log("hey")}
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
