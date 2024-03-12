import { render, fireEvent, screen } from "@testing-library/react";
import { DebitCardAction } from "../debit-card-action";
import { act } from "react-dom/test-utils";

describe("DebitCardAction", () => {
  it("should call freezeCardHandler when the freeze card button is clicked", () => {
    const freezeCardHandler = jest.fn();
    const { getByTestId } = render(
      <DebitCardAction freezeCardHandler={freezeCardHandler} />
    );

    act(() => {
      fireEvent.click(screen.getByText(/Freeze card/i));
    });

    expect(freezeCardHandler).toHaveBeenCalled();
  });
});
