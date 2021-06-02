import React from "react";
import { SiTinder } from "react-icons/si";

export default function Header() {
  return (
    <div className="flex justify-center items-center p-8 cursor-pointer">
      <p className="font-bold text-xl text-red-400">AstroMatch</p>
      <SiTinder className="text-red-400 w-12 h-12" />
    </div>
  );
}
