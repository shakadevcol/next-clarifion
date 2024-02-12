import "@/assets/css/components/product/product-button.css";

export default function ProductButton() {
    return (
        <button className="btn btn--primary product-button">
            Pay with credit card
            <img
                src="/img/common/button/right-arrow.svg"
                alt="icon"
                className="btn__icon"
            />
        </button>
    );
}
