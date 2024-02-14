import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Modal from "./Modal";

describe("Modal", () => {
    it("shows info", () => {
        const handleCloseModal = jest.fn();
        const handlePrepareTransaction = jest.fn();

        render(
            <Modal
                showModal={true}
                handleCloseModal={handleCloseModal}
                handlePrepareTransaction={handlePrepareTransaction}
            />
        );

        const title = screen.getByText("Credit card information");
        expect(title).toBeInTheDocument();
    });

    it("can trigger close modal", async () => {
        const handleCloseModal = jest.fn();
        const handlePrepareTransaction = jest.fn();

        render(
            <Modal
                showModal={true}
                handleCloseModal={handleCloseModal}
                handlePrepareTransaction={handlePrepareTransaction}
            />
        );

        const closeButton = screen.getByTestId("closeBtn");
        await waitFor(() => {
            fireEvent.click(closeButton);
        });

        expect(handleCloseModal).toHaveBeenCalled();
    });

    it("shows errors on submitted empty fields", async () => {
        const handleCloseModal = jest.fn();
        const handlePrepareTransaction = jest.fn();

        render(
            <Modal
                showModal={true}
                handleCloseModal={handleCloseModal}
                handlePrepareTransaction={handlePrepareTransaction}
            />
        );

        const validateBtn = screen.getByRole("button", {
            name: "Validate card",
        });
        await waitFor(() => {
            fireEvent.submit(validateBtn);
        });

        expect(await screen.findAllByRole("error-message")).toHaveLength(5);
        expect(handlePrepareTransaction).not.toHaveBeenCalled();
    });

    it("can submit form with valid input fields", async () => {
        const handleCloseModal = jest.fn();
        const handlePrepareTransaction = jest.fn();

        render(
            <Modal
                showModal={true}
                handleCloseModal={handleCloseModal}
                handlePrepareTransaction={handlePrepareTransaction}
            />
        );

        const cardNumber = screen.getByRole("textbox", { name: "Card number" });
        await waitFor(() => {
            fireEvent.change(cardNumber, {
                target: { value: "4111111111111111" },
            });
        });
        const owner = screen.getByRole("textbox", { name: "Name of owner" });
        await waitFor(() => {
            fireEvent.change(owner, {
                target: { value: "carl" },
            });
        });

        const month = screen.getByRole("spinbutton", { name: "Month" });
        await waitFor(() => {
            fireEvent.change(month, {
                target: { value: "12" },
            });
        });

        const year = screen.getByRole("spinbutton", { name: "Year" });
        await waitFor(() => {
            fireEvent.change(year, {
                target: { value: "2024" },
            });
        });

        const pass = screen.getByTestId("cvc");
        await waitFor(() => {
            fireEvent.change(pass, {
                target: { value: "123" },
            });
        });

        expect(cardNumber).toHaveValue("4111111111111111");
        expect(owner).toHaveValue("carl");
        expect(month).toHaveValue(parseInt("12"));
        expect(year).toHaveValue(parseInt("2024"));
        expect(pass).toHaveValue("123");

        const validateBtn = screen.getByRole("button", {
            name: "Validate card",
        });
        await waitFor(() => {
            fireEvent.click(validateBtn);
        });

        expect(handlePrepareTransaction).toHaveBeenCalled();
    });
});
