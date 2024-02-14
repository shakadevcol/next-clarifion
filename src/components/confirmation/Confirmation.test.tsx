import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Confirmation from "./Confirmation";

describe("Confirmation", () => {
    it("renders transaction info", async () => {
        const transaction = {
            paymentMethod: "visa",
            hiddenCardNumber: "***111",
            transactionId: "abc123",
            total: 100,
        };
        const handleKeepBuying = jest.fn();

        render(
            <Confirmation
                transaction={transaction}
                handleKeepBuying={handleKeepBuying}
            />
        );

        const paymentMethod = screen.getByText(/visa/i);
        expect(paymentMethod).toBeInTheDocument();

        const hiddenCardNumber = screen.getByText(/111/i);
        expect(hiddenCardNumber).toBeInTheDocument();

        const transactionId = screen.getByText(/abc123/i);
        expect(transactionId).toBeInTheDocument();
    });

    it("can trigger click on keep buying button", async () => {
        const transaction = {
            paymentMethod: "visa",
            hiddenCardNumber: "***111",
            transactionId: "abc123",
            total: 100,
        };
        const handleKeepBuying = jest.fn();

        render(
            <Confirmation
                transaction={transaction}
                handleKeepBuying={handleKeepBuying}
            />
        );

        const buttonKeepBuying = screen.getByText(/Keep buying/i);

        await waitFor(() => {
            fireEvent.click(buttonKeepBuying);
        });

        expect(handleKeepBuying).toHaveBeenCalled();
    });
    it("can trigger click on print page button", async () => {
        const transaction = {
            paymentMethod: "visa",
            hiddenCardNumber: "***111",
            transactionId: "abc123",
            total: 100,
        };
        const handleKeepBuying = jest.fn();

        render(
            <Confirmation
                transaction={transaction}
                handleKeepBuying={handleKeepBuying}
            />
        );

        const buttonPrintPage = screen.getByText(/Print this page/i);

        const spyWindowPrint = jest.spyOn(window, "print");
        spyWindowPrint.mockImplementation(jest.fn());

        await waitFor(() => {
            fireEvent.click(buttonPrintPage);
        });

        expect(spyWindowPrint).toHaveBeenCalled();
    });
});
