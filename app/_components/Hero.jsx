import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

function Hero() {
  return (
    <div className="flex items-center gap-3 flex-col justify-center pt-14 pb-7">
      <h2 className="font-bold text-[46px] text-center">
        Find Home <span className="text-blue-600">Service/Repair</span>
        <br></br> near you...
      </h2>
      <h2 className="text-xl text-gray-400">
        Explore best home services & Repair near you
      </h2>
      <div className="mt-4 flex gap-4 items-center">
        <Input placeholder="Search" className="rounded-full md:w-[350px]" />
        <Button className="bg-blue-600 rounded-full h-[40px] hover:bg-gray-200 hover:text-black">
          <Search className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

export default Hero;
