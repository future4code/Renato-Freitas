import React from "react";
import { MdMusicNote } from "react-icons/md";
import { Logo } from "./styled";

export default function Header() {
  return (
    <div>
      <Logo>
        Labefy
        <MdMusicNote size={36} />
      </Logo>
    </div>
  );
}
