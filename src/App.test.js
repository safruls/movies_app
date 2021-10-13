import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import store from "./store/index";
import { Provider } from "react-redux";

describe("renders App correctly", () => {
  test("renders Main Page", () => {
    render(<App />);
    const linkElement = screen.getByText(/Search your favorite movies:/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("input search should display placeholder correctly", () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const inputSearch = getByPlaceholderText(/Search movies title.../i);
    expect(inputSearch).toBeInTheDocument();
  });

  test("renders menu sidebar correctly", () => {
    render(<App />);
    const linkElement = screen.getByText(/Search Movies/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("types into the input search", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const input = screen.getByPlaceholderText(/Search movies title.../i);
    fireEvent.change(input, { target: { value: "Home" } });
    expect(input.value).toBe("Home");
  });
});
