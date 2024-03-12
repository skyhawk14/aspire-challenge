import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders subheading inside side menu react link", () => {
  render(<App />);
  const subHeading = screen.getByText(/Trusted way of banking for 3,000/i);
  expect(subHeading).toBeInTheDocument();
});

test("renders side menu and cards page", () => {
  render(<App />);
  expect(screen.getByTestId("side-bar")).toBeInTheDocument();
  expect(screen.getByTestId("cards-page")).toBeInTheDocument();
});
