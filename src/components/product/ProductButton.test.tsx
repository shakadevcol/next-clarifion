import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ProductButton from "./ProductButton";

const handleShowModal = jest.fn();

describe("ProductButton", () => {
    beforeEach(() => {
        render(<ProductButton handleShowModal={handleShowModal} />);
    });

    it("renders", () => {
        const button = screen.getByText(/Pay with credit card/i);
        expect(button).toBeInTheDocument();
    });

    it("can trigger show modal action", async () => {
        const button = screen.getByText(/Pay with credit card/i);
        await waitFor(() => {
            fireEvent.click(button);
        });

        expect(handleShowModal).toHaveBeenCalled();
    });
});
