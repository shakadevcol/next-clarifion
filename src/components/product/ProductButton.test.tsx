import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ProductButton from "./ProductButton";

describe("ProductButton", () => {
    it("renders", () => {
        const handleShowModal = jest.fn();

        render(<ProductButton handleShowModal={handleShowModal} />);

        const button = screen.getByText(/Pay with credit card/i);
        expect(button).toBeInTheDocument();
    });

    it("can trigger show modal action", async () => {
        const handleShowModal = jest.fn();

        render(<ProductButton handleShowModal={handleShowModal} />);

        const button = screen.getByText(/Pay with credit card/i);
        await waitFor(() => {
            fireEvent.click(button);
        });

        expect(handleShowModal).toHaveBeenCalled();
    });
});
