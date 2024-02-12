import "@/assets/css/components/summary/summary.css";
import ProductPreview from "@/components/product/ProductPreview";
import ProductGuarantee from "@/components/product/ProductGuarantee";

export default function Summary() {
    return (
        <div className="summary">
            <div className="grid grid-cols-2 gap-8">
                <div>
                    <ProductPreview />
                    <ProductGuarantee />
                </div>
                <div className="summary-detail">
                    <div className="summary-detail__header">
                        <h2 className="summary-detail__header-title">
                            Total Amount
                        </h2>
                        <h3 className="summary-detail__header-price">$160</h3>
                    </div>
                    <h3 className="summary-detail__subtitle">Order Summary</h3>
                    <div className="summary-detail__card">
                        <div className="summary-detail__row-item">
                            <span>Clarifion Slim</span>
                            <span>$89</span>
                        </div>
                    </div>
                    <div className="summary-detail__card">
                        <div className="summary-detail__row-item">
                            <span>Subtotal</span>
                            <span>$20</span>
                        </div>
                        <div className="summary-detail__row-item">
                            <span>Shipping</span>
                            <span>$15</span>
                        </div>
                    </div>
                    <div className="summary-detail__card">
                        <div className="summary-detail__row-item">
                            <span>Total</span>
                            <span>$20</span>
                        </div>
                    </div>
                    <button className="btn btn--primary product-button">
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
