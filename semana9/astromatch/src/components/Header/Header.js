import React from "react";
import { Link } from "react-router-dom";
import { SiTinder } from "react-icons/si";
import { BsPersonCheckFill } from "react-icons/bs";
import { Container } from './styled'

export default function Header() {
  return (
    <Container className="flex flex-wrap justify-center items-center m-auto py-4 cursor-pointer w-full px-24">
      <Link to="/">
        <div className="flex items-center ">
          <p className="font-bold text-xl text-red-400">AstroMatch</p>
          <SiTinder className="text-red-400 w-12 h-12" />
        </div>
      </Link>
      <Link to="/matchs">
        <div className="">
          <BsPersonCheckFill className="text-red-400 w-8 h-8" />
        </div>
      </Link>
    </Container>
  );
}
