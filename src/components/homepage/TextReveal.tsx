"use client";
import React from "react";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

const TextReveal = () => {
  const words = [
    {
      text: "Start",
      className: 'text-lg lg:text-4xl'
    },
    {
      text: "your",
      className: 'text-lg lg:text-4xl'
    },
    {
      text: "packaging",
      className: 'text-lg lg:text-4xl'
    },
    {
      text: "journey",
      className: 'text-lg lg:text-4xl'
    },
    {
      text: "with",
      className: 'text-lg lg:text-4xl'
    },
    {
      text: "Nilam",
      className: "text-blue-500 dark:text-blue-500 text-lg lg:text-4xl",
    },
    {
      text: "Packers.",
      className: "text-blue-500 dark:text-blue-500 text-lg lg:text-4xl",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      <TypewriterEffectSmooth words={words} className="text-xl"/>
    </div>
  );
};

export default TextReveal;
