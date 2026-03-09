import React from "react";
import Button from "@/components/atoms/Button/Button";

interface HeroProps {
  h: string;
  mobileImage: string;
  tabletImage: string;
  desktopImage: string;
  h1?: string;
  h2?: string;
  p: string;
  showButton?: boolean;
}

function HeroSection({
  h,
  mobileImage,
  tabletImage,
  desktopImage,
  h1,
  h2,
  p,
  showButton,
}: HeroProps) {
  return (
    <div className="w-screen flex justify-center">
      <div
        className={`${h} relative flex flex-col items-center md:items-start justify-center overflow-hidden 
        w-81.75 md:w-172.25 lg:mx-20 lg:w-full rounded-[10px] text-[#FEFCF7] px-6 md:pl-14.5 lg:pl-21.25`}
      >

        <picture className="absolute inset-0 -z-10">
          <source media="(min-width:1024px)" srcSet={desktopImage} />
          <source media="(min-width:768px)" srcSet={tabletImage} />
          <img
            src={mobileImage}
            alt="hero"
            className="w-full h-full object-cover"
          />
        </picture>

        <div className="flex flex-col items-center md:items-start ">
          {h1 && (
          <h1 className="lg:w-82.25 font-[fraunces] font-black text-[40px]/[40px] text-center md:text-start mb-6 lg:mb-8">
            {h1}
          </h1>
        )}

        {h2 && (
          <h2 className="font-[fraunces] font-black text-[28px] text-center md:text-start mb-6">
            {h2}
          </h2>
        )}

        <p className="md:w-99.5 opacity-80 font-[barlow] text-[15px]/[25px] text-center md:text-start">
          {p}
        </p>

        {showButton && (
          <div className="mt-9.75 md:mt-10 lg:mt-14">
            <Button text="Create your plan" />
          </div>
        )}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
