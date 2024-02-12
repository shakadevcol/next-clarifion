"use client";

import StepperBar from "@/components/common/StepperBar";
import ProductDetail from "@/components/product/ProductDetail";
import Summary from "@/components/summary/Summary";
import Modal from "@/components/modal/Modal";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { updateStep } from "@/store/paymentSlice";

export default function Payment() {
    const paymentState = useAppSelector((state) => state.paymentState);
    const dispatch = useAppDispatch();
    console.log("paymentState ", paymentState.paymentStep);

    const handleUpdateStep = () => {
        dispatch(updateStep(2));
    };
    return (
        <div className="section container mx-auto">
            <button onClick={handleUpdateStep}>update step</button>
            <StepperBar steps={paymentState.steps} />
            {paymentState.paymentStep === 1 && <ProductDetail />}
            {paymentState.paymentStep === 2 && <Summary />}

            {/* <Modal /> */}
        </div>
    );
}
