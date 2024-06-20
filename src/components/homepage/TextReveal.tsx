"use client";
import React from "react";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

const TextReveal = () => {
  const words = [
    {
      text: "Start",
    },
    {
      text: "your",
    },
    {
      text: "packaging",
    },
    {
      text: "journey",
    },
    {
      text: "with",
    },
    {
      text: "Nilam",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Packers.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      <TypewriterEffectSmooth words={words} className="text-xl"/>
    </div>
  );
};

export default TextReveal;
