import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ProductInfo from "./ProductInfo";

describe("ProductInfo", () => {
    it("renders", () => {
        const product: Product = {
            id: 1,
            title: "clarifion slim",
            price: 84,
            description: `Lorem ipsum`,
            features: [``],
            image: "product.png",
        };
        render(<ProductInfo product={product} />);

        const title = screen.getByText(product.title);
        expect(title).toBeInTheDocument();

        const price = screen.getByText("Price: $" + product.price);
        expect(price).toBeInTheDocument();

        const description = screen.getByText(product.description);
        expect(description).toBeInTheDocument();
    });
});
