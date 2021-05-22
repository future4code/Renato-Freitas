import React from "react";
import { MdMusicNote } from "react-icons/md";
import { Logo } from "./styled";
import { Link } from "react-router-dom";
import { GlobalStyle } from "../../styles/global";

export default function Header() {
  return (
    <div>
      <Link to="/">
        <Logo>
          Labefy
          <MdMusicNote size={36} />
        </Logo>
        <GlobalStyle />
      </Link>
    </div>
  );
}
