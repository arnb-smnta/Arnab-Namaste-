import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Contact from "../Contact";

test("Should render header in contact component", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});

test("Should render two inputs ", () => {
  render(<Contact />);

  const inputBoxes = screen.getAllByRole("textbox");

  expect(inputBoxes.length).toBe(2);
});
