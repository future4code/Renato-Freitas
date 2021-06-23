import React from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";

export const PostPage = () => {
  useProtectedPage()
  return <h1>Hello world</h1>;
};
