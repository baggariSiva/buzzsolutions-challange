import { render, fireEvent, screen } from "@testing-library/react";
import Header from "..";

describe("Header", () => {
  it("renders without crashing", () => {
    const setSearchQuery = jest.fn();
    render(<Header setSearchQuery={setSearchQuery} />);
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });

  it("updates input value when typing", () => {
    const setSearchQuery = jest.fn();
    render(<Header setSearchQuery={setSearchQuery} />);
    const input = screen.getByPlaceholderText("Search") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "test" } });
    expect(input.value).toBe("test");
  });

  it("calls setSearchQuery when search button is pressed", () => {
    const setSearchQuery = jest.fn();
    render(<Header setSearchQuery={setSearchQuery} />);
    const input = screen.getByPlaceholderText("Search");
    fireEvent.change(input, { target: { value: "test" } });
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(setSearchQuery).toHaveBeenCalledWith("test");
  });

  it("matches snapshot", () => {
    const setSearchQuery = jest.fn();
    const { asFragment } = render(<Header setSearchQuery={setSearchQuery} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
