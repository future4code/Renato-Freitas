import React from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";

export const FeedPage = () => {
  useProtectedPage();
  useUnprotectedPage();
  return <h1>Hello world</h1>;
};
