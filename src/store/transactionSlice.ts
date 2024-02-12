import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PaymentState {
    transaction: Transaction;
}

const initialState: PaymentState = {
    transaction: {
        paymentMethod: null,
        hiddenCardNumber: null,
        transactionId: null,
        total: 0,
    },
};

export const transactionSlice = createSlice({
    name: "transaction",
    initialState,
    reducers: {
        setTransaction: (state, action: PayloadAction<Transaction>) => {
            state.transaction = action.payload;
            console.log("set transaction with ", action.payload);
        },
    },
});

// Action creators are generated for each case reducer function
export const { setTransaction } = transactionSlice.actions;

export default transactionSlice.reducer;
