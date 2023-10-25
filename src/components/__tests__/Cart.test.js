import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";

global.fetch = jest.fn(() => {
  Promise.resolve;
});

it("should load our  restaurant menu component", async () => {
  await act(async () => render(<RestaurantMenu />));
});
