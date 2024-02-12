import "@/assets/css/components/product/product-shipping.css";

export default function ProductShipping() {
    return (
        <div className="product-shipping">
            <div className="product-shipping__info">
                <span className="product-shipping__description">
                    Free shipping
                </span>
                {/* <span className="product-shipping__vline"></span> */}

                <span className="product-shipping__description">
                    <img src="/img/product-detail/lock.svg" alt="lock" />
                    Secure 256-bit SSL encryption
                </span>
            </div>
            <div className="product-shipping__line"></div>
            <div className="product-shipping__brands">
                <img
                    className="product-shipping__brand-img"
                    src="/img/product-detail/shipping/visa.png"
                    alt="visa"
                />
                <img
                    className="product-shipping__brand-img"
                    src="/img/product-detail/shipping/shop-pay.png"
                    alt="shop-pay"
                />
                <img
                    className="product-shipping__brand-img"
                    src="/img/product-detail/shipping/paypal.png"
                    alt="paypal"
                />
                <img
                    className="product-shipping__brand-img"
                    src="/img/product-detail/shipping/mastercard.png"
                    alt="mastercard"
                />
                <img src="/img/product-detail/shipping/gpay.png" alt="gpay" />
                <img
                    className="product-shipping__brand-img"
                    src="/img/product-detail/shipping/apple-pay.png"
                    alt="apple-pay"
                />
                <img
                    className="product-shipping__brand-img"
                    src="/img/product-detail/shipping/amex.png"
                    alt="amex"
                />
            </div>
        </div>
    );
}
