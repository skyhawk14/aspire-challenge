import { render, screen } from "@testing-library/react";
import { DebitCard } from "../debit-card";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

describe("DebitCardDetails", () => {
  it("renders the card details correctly", () => {
    render(
      <DebitCard
        card={{
          id: "1",
          cardNumber: "1234 5678 9012 3456",
          validThru: "12/24",
          cvvCode: "123",
          name: "John Doe",
          freeze: false,
        }}
      />
    );
    act(() => {
      userEvent.click(screen.getByTestId("show-card-number"));
    });

    const expiryDateElement = screen.getByText(/12\/24/i);
    expect(expiryDateElement).toBeInTheDocument();

    const cvvElement = screen.getByText(/\*\*\*/);
    expect(cvvElement).toBeInTheDocument();
  });
});
