import React from "react";
import { Meteors } from "../ui/meteors";

export function ContactInfo() {
  return (
    <div className="">
      <div className=" w-full relative max-w-md h-[546px]">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div>
            <p className="text-2xl font-semibold mb-3">Contact Details</p>
            <p className="text-lg font-semibold mb-1">Factory Address:</p>
            <p className="text-gray-400 mb-5">
              Factory Address: Gala No. 4 & 5, Building P, Mahavir Complex,
              Dapode Village, Bhiwandi, Thane - 421302.
            </p>

            <p className="text-lg font-semibold mb-1">Office Address:</p>
            <p className="text-gray-400 mb-5">
              1304, Belvedere, Gaon Devi Road, Next to Gama House, Bhandup West,
              Mumbai - 400078.
            </p>

            <p className="text-lg font-semibold mb-1">Call Us:</p>
            <p className="text-gray-400">+91-9773997505</p>
            <p className="text-gray-400 mb-5">+91-9773997505</p>

            <p className="text-lg font-semibold mb-1">Email:</p>
            <p className="text-gray-400">sales@kanipackaging.com</p>
            <p className="text-gray-400">sales@kanipackaging.com</p>
          </div>
          <Meteors number={100} />
        </div>
      </div>
    </div>
  );
}
