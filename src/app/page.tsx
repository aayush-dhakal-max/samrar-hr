import Image from "next/image";
import { ConstructionAnimation } from "@/components/construction-animation";

export default function UnderConstruction() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-white pb-32">
      <div className="w-full max-w-4xl space-y-2 md:space-y-4 text-center">
        <Image
          src="/image.png"
          alt="Samrat Human Resources Logo"
          width={1000}
          height={1000}
          className="mx-auto w-44 h-44 sm:w-48 sm:h-48 md:w-72 md:h-72 "
          priority
        />
        <ConstructionAnimation />
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#05406e] lg:text-6xl font-bold tracking-tight">
            Website Under Construction
          </h1>
        </div>
        {/* <div className="mt-12 flex justify-center space-x-4">
          <a
            href="mailto:info@samrathr.com"
            className="bg-[#f15c26] hover:bg-[#e54d17] text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 ease-in-out"
          >
            Contact Us
          </a>
          <a
            href="tel:+1234567890"
            className="bg-[#05406e] text-white hover:bg-[#133147] font-bold py-2 px-4 rounded-full transition-colors duration-300 ease-in-out"
          >
            Call Now
          </a>
        </div> */}
      </div>
    </div>
  );
}
