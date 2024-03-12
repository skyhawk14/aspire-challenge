import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CardsPage from "../cards-page";
import { act } from "react-dom/test-utils";

describe("CardsPage", () => {
  test("renders the component properly", () => {
    render(<CardsPage />);
    expect(screen.getByTestId("card-page-container")).toBeInTheDocument();
  });

  test("displays the correct number of tabs", () => {
    render(<CardsPage />);
    const tabs = screen.getAllByRole("tab");
    expect(tabs).toHaveLength(2);
  });

  test("opens the modal when the plus icon is clicked", async () => {
    render(<CardsPage />);

    expect(screen.queryByTestId("add-new-card-modal")).not.toBeInTheDocument();

    const plusIcon = screen.getByAltText("Add new card");
    act(() => {
      userEvent.click(plusIcon);
    });
    expect(screen.getByTestId("add-new-card-modal")).toBeInTheDocument();
  });

  test("displays the correct tab panel when a tab is clicked", () => {
    render(<CardsPage />);

    const allCompanyCardsTab = screen.getByText("All company cards");
    act(() => {
      userEvent.click(allCompanyCardsTab);
    });

    expect(screen.getByText("All company cards")).toBeInTheDocument();
  });
});
