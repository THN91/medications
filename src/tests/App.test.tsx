import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = document.querySelector("[data-component='App']");
  expect(linkElement).toBeInTheDocument();
});
