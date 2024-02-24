import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import Pagination from "../Pagination";

describe("Pagination", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(
      <Pagination
        totalRecordCount={100}
        page={1}
        pageSize={10}
        setPage={(page: number) => {
          console.log(page);
        }}
        setPageSize={(pageSize: number) => {
          console.log(pageSize);
        }}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("changes page when next button is clicked", () => {
    render(
      <Pagination
        totalRecordCount={100}
        page={1}
        pageSize={10}
        setPage={(page: number) => {
          console.log(page);
        }}
        setPageSize={(pageSize: number) => {
          console.log(pageSize);
        }}
      />
    );
    userEvent.click(screen.getByLabelText(/next page/i));
    expect(screen.getByText("11–20 of 100")).toBeInTheDocument();
  });
});
