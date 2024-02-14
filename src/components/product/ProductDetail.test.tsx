import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ProductDetail from "./ProductDetail";
import ReduxProvider from "@/providers/redux/ReduxProvider";

import { store } from "@/store/store";

jest.mock("./ProductInfo", () => () => {
    return null;
});
jest.mock("./ProductFeatures", () => () => {
    return null;
});

jest.mock("./ProductButton", () => () => {
    return null;
});

jest.mock("./ProductShipping", () => () => {
    return null;
});

describe("ProductDetail", () => {
    it("renders", () => {
        const productState = store.getState().productState;

        const handleShowModal = jest.fn();

        render(
            <ReduxProvider>
                <ProductDetail handleShowModal={handleShowModal} />
            </ReduxProvider>
        );

        const title = screen.getByText(productState.product.title);
        expect(title).toBeInTheDocument();

        const image = screen.getByAltText(productState.product.title);
        expect(image).toBeInTheDocument();
    });
});
