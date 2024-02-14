import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Summary from "./Summary";
import api from "@/services/api";
import { AxiosError } from "axios";

const product: Product = {
    id: 1,
    title: "clarifion slim",
    price: 84,
    description: "lorem ipsum",
    features: [],
    image: "product.png",
};

const handleShowPaymentError = jest.fn();
const handleResolveTransaction = jest.fn();

describe("Summary", () => {
    beforeEach(() => {
        render(
            <Summary
                product={product}
                handleShowPaymentError={handleShowPaymentError}
                handleResolveTransaction={handleResolveTransaction}
            />
        );
    });

    it("renders summary info", async () => {
        const shippingPrice = 15;
        const totalPriceValue = shippingPrice + product.price;

        const shipping = screen.getByText("$15");
        expect(shipping).toBeInTheDocument();

        const totalPriceTitle = screen.getByTestId("totalPriceTitle");
        expect(totalPriceTitle.innerHTML).toBe("$" + totalPriceValue);

        const productPrice = screen.getByTestId("productPrice");
        expect(productPrice.innerHTML).toBe("$" + product.price);

        const subTotalPrice = screen.getByTestId("subTotalPrice");
        expect(subTotalPrice.innerHTML).toBe("$" + product.price);

        const totalPrice = screen.getByTestId("totalPrice");
        expect(totalPrice.innerHTML).toBe("$" + totalPriceValue);
    });

    it("can trigger make payment", async () => {
        const buttonMakePayment = screen.getByText(/Make payment/i);

        const spyApi = jest.spyOn(api, "post");

        spyApi.mockImplementation(() =>
            Promise.resolve({
                data: {
                    data: {
                        transactionId: "abc",
                    },
                },
            })
        );

        await waitFor(() => {
            fireEvent.click(buttonMakePayment);
        });

        expect(spyApi).toHaveBeenCalled();
        expect(handleResolveTransaction).toHaveBeenCalled();
    });

    it("can trigger handleShowPaymentError when request returns error", async () => {
        const buttonMakePayment = screen.getByText(/Make payment/i);

        const spyApi = jest.spyOn(api, "post");

        spyApi.mockImplementation(() => Promise.reject(new AxiosError()));

        await waitFor(() => {
            fireEvent.click(buttonMakePayment);
        });

        expect(spyApi).toHaveBeenCalled();
        expect(handleShowPaymentError).toHaveBeenCalled();
    });
});
