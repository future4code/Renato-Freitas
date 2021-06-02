import React, { useEffect, useState } from "react";
import axios from "axios";
import { RiHeartLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { Content, Button1, Button2 } from "./styled";

export default function Buttons(props) {
  return (
    <Content className="flex w-full justify-between">
      <Button1 onClick={props.getPerson}>
        <AiOutlineClose className="cursor-pointer shadow p-4 border h-16 w-16 rounded-full m-2 bg-red-300 text-white hover:bg-red-800" />
      </Button1>
      <Button2 onClick={() => props.match()}>
        <RiHeartLine className="cursor-pointer shadow p-4 border h-16 w-16 rounded-full m-2 bg-green-300 text-white hover:bg-green-700" />
      </Button2>
    </Content>
  );
}
