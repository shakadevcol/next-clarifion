import "@/assets/css/components/product/product-info.css";

type Props = {
    product: Product;
};

export default function ProductInfo(props: Props) {
    return (
        <div className="product-info">
            <h2 className="product-info__title">
                {props.product.title}
                <br />
                <span className="product-info__title--accent">Price: $84</span>
                {/* <span className="product-info__title--accent">
                    ONE TIME ONLY
                </span>{" "}
                special price for 6 extra Clarifion for only
                <span className="product-info__title--accent">
                    $14 each
                </span>{" "}
                ($84.00 total!) */}
            </h2>
            <div
                className="product-info__description"
                dangerouslySetInnerHTML={{ __html: props.product.description }}
            ></div>
        </div>
    );
}
