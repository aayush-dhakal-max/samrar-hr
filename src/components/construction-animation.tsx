import { Hammer, Wrench } from "lucide-react";

export function ConstructionAnimation() {
  return (
    <div className="flex justify-center items-center space-x-4 sm:space-x-8 my-8">
      {/* <div className="animate-bounce">
        <HardHat className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-[#f15c26]" />
      </div> */}
      <div className="animate-bounce">
        <Hammer className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-[#26a9e0]" />
      </div>
      <div className="animate-spin">
        <Wrench className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-[#f15c26]" />
      </div>
    </div>
  );
}
