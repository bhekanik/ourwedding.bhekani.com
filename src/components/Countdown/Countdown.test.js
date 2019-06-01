import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Countdown from "./Countdown";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <Countdown />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
