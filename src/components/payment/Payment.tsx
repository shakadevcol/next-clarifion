"use client";

import StepperBar from "@/components/common/StepperBar";
import ProductDetail from "@/components/product/ProductDetail";
import Summary from "@/components/summary/Summary";
import Confirmation from "@/components/confirmation/Confirmation";
import Modal from "@/components/modal/Modal";
import { Toaster, toast } from "sonner";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { updateStep } from "@/store/paymentSlice";
import { setTransaction } from "@/store/transactionSlice";
import { useEffect, useState } from "react";

export default function Payment() {
    const productState = useAppSelector((state) => state.productState);
    const paymentState = useAppSelector((state) => state.paymentState);
    const transactionState = useAppSelector((state) => state.transactionState);
    const dispatch = useAppDispatch();

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (paymentState.paymentStep === 2) {
            setShowModal(true);
        }
    }, [paymentState.paymentStep]);

    const handleShowModal = () => {
        dispatch(updateStep(2));
    };

    const handleCloseModal = () => {
        setShowModal(false);
        dispatch(updateStep(1));
    };

    const handlePrepareTransaction = (cardInfo: {
        cardType: string;
        hiddenCardNumber: string;
    }) => {
        setShowModal(false);
        dispatch(
            setTransaction({
                paymentMethod: cardInfo.cardType,
                hiddenCardNumber: cardInfo.hiddenCardNumber,
                transactionId: null,
                total: 0,
            })
        );
        dispatch(updateStep(3));
    };

    const handleShowPaymentError = (message: string) => {
        toast.error(message);
    };

    const handleResolveTransaction = (transaction: {
        transactionId: string;
        total: number;
    }) => {
        dispatch(
            setTransaction({
                ...transactionState.transaction,
                transactionId: transaction.transactionId,
                total: transaction.total,
            })
        );
        dispatch(updateStep(4));
    };

    return (
        <div className="section container mx-auto">
            <StepperBar steps={paymentState.steps} />
            {(paymentState.paymentStep === 1 ||
                paymentState.paymentStep === 2) && (
                <ProductDetail handleShowModal={handleShowModal} />
            )}
            {paymentState.paymentStep === 3 && (
                <Summary
                    product={productState.product}
                    handleShowPaymentError={handleShowPaymentError}
                    handleResolveTransaction={handleResolveTransaction}
                />
            )}

            {paymentState.paymentStep === 4 && (
                <Confirmation transaction={transactionState.transaction} />
            )}

            <Modal
                showModal={showModal}
                handleCloseModal={handleCloseModal}
                handlePrepareTransaction={handlePrepareTransaction}
            />
            <Toaster richColors />
        </div>
    );
}
