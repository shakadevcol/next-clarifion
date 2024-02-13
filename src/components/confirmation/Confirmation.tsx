import ProductComments from "@/components/product/ProductComments";

type Props = {
    transaction: Transaction;
    handleKeepBuying: () => void;
};

export default function Confirmation(props: Props) {
    return (
        <div className="summary">
            <div className="grid lg:grid-cols-2 gap-8">
                <div className="order-last lg:order-first">
                    <ProductComments />
                </div>
                <div className="summary-detail">
                    <div className="summary-detail__header">
                        <h2 className="summary-detail__header-title">
                            Confirmed Transaction
                        </h2>
                        <img
                            src="/img/common/stepper/check-mark.svg"
                            alt="checked"
                            className="stepper__icon"
                        />
                        <h3 className="summary-detail__header-price">
                            ${props.transaction.total}
                        </h3>
                    </div>
                    <h3 className="summary-detail__subtitle">
                        Transaction Summary
                    </h3>
                    <div className="summary-detail__card">
                        <div className="summary-detail__row-item">
                            <span>Payment method</span>
                            <span>
                                {props.transaction.paymentMethod} -{" "}
                                {props.transaction.hiddenCardNumber}
                            </span>
                        </div>
                    </div>
                    <div className="summary-detail__card">
                        <div className="summary-detail__row-item">
                            <span>Transaction ID</span>
                            <span>{props.transaction.transactionId}</span>
                        </div>
                    </div>
                    <div className="summary-detail__card">
                        <div className="summary-detail__row-item">
                            <span>Total</span>
                            <span>${props.transaction.total}</span>
                        </div>
                    </div>
                    <button
                        className="btn btn--secondary product-button"
                        onClick={() => window.print()}
                    >
                        Print this page
                        <img
                            src="/img/common/button/right-arrow.svg"
                            alt="icon"
                            className="btn__icon"
                        />
                    </button>
                    <button
                        className="btn btn--dark product-button"
                        onClick={props.handleKeepBuying}
                    >
                        Keep buying
                    </button>
                </div>
            </div>
        </div>
    );
}
