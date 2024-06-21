import React from "react";
import TextReveal from "./TextReveal";
import { SparklesCore } from "@/components/ui/sparkles";

const Sparkles = () => {
  return (
    <>
      <h1 className="md:text-7xl text-5xl lg:text-9xl font-bold text-center text-white relative z-20">
        <span className="mr-1 lg:mr-5 text-primary">Nilam</span>
        <span>Packers</span>
        <TextReveal />
      </h1>

      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={1}
          maxSize={2}
          particleDensity={1200}
          className="w-[50%] lg:w-full h-full mx-auto"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </>
  );
};

export default Sparkles;
