"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import { TextGenerateEffect } from "../ui/text-generate-effect";
// import { HoverCard } from "./HoverCard";
import { HoverEffect } from "../ui/card-hover-effect";

export function HeroScroll() {
  const words = `We are proud to be one of the best and leading stand-alone Corrugated Box Manufacturers in Varanasi, India. Providing the widest range of Corrugated Boxes for several Industries.`;

  const features = [
    {
      title: "Quality",
      description:
        "We maintain our quality at peak, no compromise in quality at all.",
      link: "/",
    },
    {
      title: "Reliability",
      description:
        "NILAM Packaging is the other name of reliability. You can completely rely on us.",
      link: "/",
    },
    {
      title: "Durability",
      description:
        "Our Products are highly durable, one of the USP which makes us different from others.",
      link: "/",
    },
  ];

  return (
    <div className="flex flex-col overflow-hidden bg-background">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-text">
              Manufacture A Variety Of Export Quality Corrugated Boxes
              <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                One of the Leading{" "}
                <span className="text-primary">
                  Corrugated Box Manufacturers
                </span>
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/boxes.webp`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>

      <TextGenerateEffect
        words={words}
        className="w-[80%] mx-auto text-center text-base font-normal lg:mt-[-8rem] mb-8"
      />

      <div className="bg-secondary p-5 text-gray-400 w-[60%] mx-auto flex flex-col justify-center items-center rounded-3xl">
        <p className="text-lg">
          We are Established in 2018, One Stop Solution for Corrugated Packaging
          Boxes and now proudly became one of the Best Corrugated Box
          Manufacturers and Suppliers in Mumbai, India. Based in Bhiwandi,
          Maharashtra, India. Primarily serving Mumbai, Navi Mumbai, Thane
          Areas. We specialized in manufacturing 3 Ply, 5 Ply, 7 Ply & 9 Ply
          Corrugated Boxes with premium export quality at an affordable price.
        </p>
        <p className="ml-auto">~CEO</p>
      </div>

      <div className="max-w-5xl mx-auto px-8">
        {/* <HoverCard /> */}
        <HoverEffect items={features} />
      </div>
    </div>
  );
}
