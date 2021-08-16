import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";
import Gallery from "./Gallery";

test("Test Gallery", () => {
  const { asFragment } = render(<Gallery />);
  expect(asFragment()).toMatchSnapshot();
});
