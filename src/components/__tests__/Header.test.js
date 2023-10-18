import { Provider } from "react-redux";
import Header from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { expect } from "@jest/globals";
import "@testing-library/jest-dom";
import appStore from "../../utils/appStore";
it("Should render my header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button");

  expect(loginButton).toBeInTheDocument();
});

it("Should render my header component with cart equals to 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const CartButton = screen.getByText("Cart (0items)");

  expect(CartButton).toBeInTheDocument();
});

it("Should render my header component when clicked it turns to log out button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const LoginButton = screen.getByText("login");

  fireEvent.click(LoginButton);
  const logoutbutton = screen.getByText("logout");
  expect(logoutbutton).toBeInTheDocument();
});
