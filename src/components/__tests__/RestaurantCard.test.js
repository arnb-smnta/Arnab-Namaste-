import { render, screen } from "@testing-library/react";
import RestrauntCard from "../RestrauntCard";

import "@testing-library/jest-dom";
import Mock from "../Mocks/Mock_data";

it("should render the restaurant card component ", () => {
  console.log(Mock);
  render(<RestrauntCard restraunt={Mock.restraunt} />);

  const name = screen.getByText("Punjabi Angithi (Vegorama Group)");
  expect(name).toBeInTheDocument();
});
