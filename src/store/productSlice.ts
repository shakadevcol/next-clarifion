import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
    product: Product;
}

const initialState: CartState = {
    product: {
        id: 1,
        title: "clarifion slim",
        price: 84,
        description: `
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eum, dolor hic eaque dolore vel sed? Molestias exercitationem iure id tempore quas aliquid vitae ducimus deleniti quis, repudiandae eius maxime.</p>
            
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eum, dolor hic eaque dolore vel sed? Molestias exercitationem iure id tempore quas aliquid vitae ducimus deleniti quis, repudiandae eius maxime.</p>

            `,
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
    },
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = productSlice.actions;

export default productSlice.reducer;
