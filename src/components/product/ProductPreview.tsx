import "@/assets/css/components/product/product-preview.css";

export default function ProductPreview() {
    return (
        <>
            <div className="product-preview">
                <div className="product-preview__image">
                    <img src="/img/product-detail/preview.png" alt="preview" />
                </div>
                <div className="product-preview__info">
                    <div className="product-preview__heading">
                        <div className="product-preview__heading-title">
                            Clarifion Air Ionizer
                        </div>
                        <div className="product-preview__heading-prices">
                            <div className="product-preview__heading-price">
                                $180
                            </div>
                            <div className="product-preview__heading-discount">
                                $84
                            </div>
                        </div>
                    </div>
                    <div className="product-preview__stars">
                        <img
                            src="/img/product-detail/star.svg"
                            alt="star"
                            className="product-preview__star-img"
                        />
                        <img
                            src="/img/product-detail/star.svg"
                            alt="star"
                            className="product-preview__star-img"
                        />
                        <img
                            src="/img/product-detail/star.svg"
                            alt="star"
                            className="product-preview__star-img"
                        />
                        <img
                            src="/img/product-detail/star.svg"
                            alt="star"
                            className="product-preview__star-img"
                        />
                        <img
                            src="/img/product-detail/star.svg"
                            alt="star"
                            className="product-preview__star-img"
                        />
                    </div>

                    <div className="product-preview__stock">
                        <img src="/img/product-detail/radio.svg" alt="radio" />
                        <span className="product-preview__stock-label">
                            12 left in Stock
                        </span>
                    </div>

                    <div className="product-preview__excerpt">
                        Simply plug a Clarifion into any standard outlet and
                        replace bulky, expensive air purifiers with a simple.
                    </div>
                </div>
            </div>

            <div className="product-preview__excerpt-mobile">
                Simply plug a Clarifion into any standard outlet and replace
                bulky, expensive air purifiers with a simple.
            </div>
        </>
    );
}
