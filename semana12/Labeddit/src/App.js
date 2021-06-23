import React from "react";
import RouteManager from "./routes/Route";
import { GlobalStyle } from "./globalStyles/GlobalStyles";

function App() {
  return (
    <div>
      <GlobalStyle />
      <RouteManager />
    </div>
  );
}

export default App;
