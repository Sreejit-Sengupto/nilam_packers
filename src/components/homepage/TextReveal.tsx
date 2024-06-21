"use client";
import React from "react";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

const TextReveal = () => {
  const words = [
    {
      text: "Start",
      className: 'text-lg lg:text-xl'
    },
    {
      text: "your",
      className: 'text-xl'
    },
    {
      text: "packaging",
      className: 'text-lg lg:text-xl'
    },
    {
      text: "journey",
      className: 'text-lg lg:text-xl'
    },
    {
      text: "with",
      className: 'text-lg lg:text-xl'
    },
    {
      text: "Nilam",
      className: "text-blue-500 dark:text-blue-500 text-lg lg:text-xl",
    },
    {
      text: "Packers.",
      className: "text-blue-500 dark:text-blue-500 text-lg lg:text-xl",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      <TypewriterEffectSmooth words={words}  />
    </div>
  );
};

export default TextReveal;
