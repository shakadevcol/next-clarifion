import "@/assets/css/components/product/product-features.css";

type Props = {
    product: Product;
};

export default function ProductFeatures(props: Props) {
    return (
        <div className="product-features">
            {props.product.features.map((feature, index) => {
                return (
                    <div key={index} className="product-features__feature">
                        <img
                            src="/img/product-detail/tick-circle.svg"
                            alt="tick"
                            className="product-features__icon"
                        />
                        <div
                            className="product-features__description"
                            dangerouslySetInnerHTML={{
                                __html: feature,
                            }}
                        ></div>
                    </div>
                );
            })}
        </div>
    );
}
