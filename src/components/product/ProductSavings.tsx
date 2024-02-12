import "@/assets/css/components/product/product-savings.css";

export default function ProductSavings() {
    return (
        <div className="product-savings">
            <img
                src="/img/product-detail/percentage.svg"
                alt="percentage"
                className="product-savings__icon"
            />
            <div className="product-savings__description">
                Save{" "}
                <span className="product-savings__description--accent">
                    53%
                </span>{" "}
                and get{" "}
                <span className="product-savings__description--accent">
                    6 extra Clarifision
                </span>{" "}
                for only{" "}
                <span className="product-savings__description--accent">
                    $14 Each
                </span>
                .
            </div>
        </div>
    );
}
