import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Confirmation from "./Confirmation";

const handleKeepBuying = jest.fn();
const transaction: Transaction = {
    paymentMethod: "visa",
    hiddenCardNumber: "***111",
    transactionId: "abc123",
    total: 100,
};

describe("Confirmation", () => {
    beforeEach(() => {
        render(
            <Confirmation
                transaction={transaction}
                handleKeepBuying={handleKeepBuying}
            />
        );
    });
    it("renders transaction info", async () => {
        const paymentMethod = screen.getByText(/visa/i);
        expect(paymentMethod).toBeInTheDocument();

        const hiddenCardNumber = screen.getByText(/111/i);
        expect(hiddenCardNumber).toBeInTheDocument();

        const transactionId = screen.getByText(/abc123/i);
        expect(transactionId).toBeInTheDocument();
    });

    it("can trigger click on keep buying button", async () => {
        const buttonKeepBuying = screen.getByText(/Keep buying/i);

        await waitFor(() => {
            fireEvent.click(buttonKeepBuying);
        });

        expect(handleKeepBuying).toHaveBeenCalled();
    });

    it("can trigger click on print page button", async () => {
        const buttonPrintPage = screen.getByText(/Print this page/i);

        const spyWindowPrint = jest.spyOn(window, "print");
        spyWindowPrint.mockImplementation(jest.fn());

        await waitFor(() => {
            fireEvent.click(buttonPrintPage);
        });

        expect(spyWindowPrint).toHaveBeenCalled();
    });
});
