import "@/assets/css/components/product/product-guarantee.css";

export default function ProductGuarantee() {
    return (
        <div className="product-guarantee">
            <div className="product-guarantee__title">
                {/* No thanks, I don’t want this. */}
                Guarantee policy
            </div>
            <div className="product-guarantee__info">
                <img
                    src="/img/product-detail/guarantee/guarantee.png"
                    alt="guarantee"
                    className="product-guarantee__image"
                />
                <div className="product-guarantee__description">
                    If you are not completely thrilled with your Clarifion - We
                    have a{" "}
                    <span className="product-guarantee__description--accent">
                        30 day satisfaction guarantee
                    </span>
                    . Please refer to our return policy at the bottom of the
                    page for more details. Happy Shopping!
                </div>
            </div>
        </div>
    );
}
