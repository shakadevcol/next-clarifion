import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PaymentState {
    paymentStep: number;
    steps: Steps[];
}

const initialState: PaymentState = {
    paymentStep: 1,
    steps: [
        {
            id: 1,
            title: "Product",
            state: "current",
        },
        {
            id: 2,
            title: "Credit card",
            state: "incompleted",
        },
        {
            id: 3,
            title: "Summary",
            state: "incompleted",
        },
        {
            id: 4,
            title: "Confirmation",
            state: "incompleted",
        },
    ],
};

export const paymentSlice = createSlice({
    name: "payment",
    initialState,
    reducers: {
        updateStep: (state, action: PayloadAction<number>) => {
            state.paymentStep = action.payload;
            state.steps.forEach((step) => {
                if (step.id < state.paymentStep) {
                    step.state = "checked";
                }

                if (step.id === state.paymentStep) {
                    step.state = "current";
                }
                if (step.id > state.paymentStep) {
                    step.state = "incompleted";
                }
            });
        },
    },
});

// Action creators are generated for each case reducer function
export const { updateStep } = paymentSlice.actions;

export default paymentSlice.reducer;
