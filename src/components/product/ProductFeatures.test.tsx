import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ProductFeatures from "./ProductFeatures";

describe("ProductFeatures", () => {
    it("renders", () => {
        const product: Product = {
            id: 1,
            title: "clarifion slim",
            price: 84,
            description: `Lorem ipsum`,
            features: [
                `Negative Ion Technology may
                <span>
                    help with allergens
                </span>`,
                `Designed for
                <span>
                    air rejuvenation
                </span>`,
                `<span>
                    Perfect for every room
                </span>
                in all types of places`,
            ],
            image: "product.png",
        };
        render(<ProductFeatures product={product} />);

        const features = screen.getAllByRole("feature");
        expect(features).toHaveLength(3);
    });
});
