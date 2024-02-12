import "@/assets/css/components/summary/summary.css";
import ProductPreview from "@/components/product/ProductPreview";
import ProductGuarantee from "@/components/product/ProductGuarantee";
import axios, { AxiosError } from "axios";
import api from "@/services/api";

type Props = {
    product: Product;
    handleShowPaymentError: (message: string) => void;
    handleResolveTransaction: (transaction: {
        transactionId: string;
        total: number;
    }) => void;
};

export default function Summary(props: Props) {
    const total = props.product.price + 15;

    const handleMakePayment = async () => {
        try {
            const data = await api.post("payments", []);

            props.handleResolveTransaction({
                transactionId: data.data.transactionId,
                total: total,
            });
        } catch (error) {
            if (error instanceof AxiosError) {
                props.handleShowPaymentError(error.response?.data.message);
            } else {
                console.log("Unexpected error ", error);
            }
        }
    };

    return (
        <div className="summary">
            <div className="grid md:grid-cols-2 gap-8">
                <div className="order-last md:order-first">
                    <ProductPreview />
                    <ProductGuarantee />
                </div>
                <div className="summary-detail">
                    <div className="summary-detail__header">
                        <h2 className="summary-detail__header-title">
                            Total Amount
                        </h2>
                        <h3 className="summary-detail__header-price">
                            ${total}
                        </h3>
                    </div>
                    <h3 className="summary-detail__subtitle">Order Summary</h3>
                    <div className="summary-detail__card">
                        <div className="summary-detail__row-item">
                            <span>{props.product.title}</span>
                            <span>${props.product.price}</span>
                        </div>
                    </div>
                    <div className="summary-detail__card">
                        <div className="summary-detail__row-item">
                            <span>Subtotal</span>
                            <span>${props.product.price}</span>
                        </div>
                        <div className="summary-detail__row-item">
                            <span>Shipping</span>
                            <span>$15</span>
                        </div>
                    </div>
                    <div className="summary-detail__card">
                        <div className="summary-detail__row-item">
                            <span>Total</span>
                            <span>${total}</span>
                        </div>
                    </div>
                    <button
                        className="btn btn--primary product-button"
                        onClick={handleMakePayment}
                    >
                        Make payment
                        <img
                            src="/img/common/button/right-arrow.svg"
                            alt="icon"
                            className="btn__icon"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}
