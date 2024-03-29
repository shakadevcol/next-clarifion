import "@/assets/css/components/product/product-comments.css";

export default function ProductComments() {
    return (
        <div className="product-comments">
            <div className="product-comments__heading">
                <img
                    src="/img/product-detail/comments/customer.png"
                    alt="customer"
                    className="product-comments__image"
                />
                <div className="product-comments__heading-info">
                    <div className="product-comments__stars">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="79"
                            height="13"
                            viewBox="0 0 79 13"
                            fill="none"
                        >
                            <path
                                d="M2.28466 12.2974L3.67338 7.75793L0 5.12982H4.53946L5.97297 0.35144L7.40649 5.12982H11.9459L8.27257 7.75793L9.66128 12.2974L5.97297 9.49009L2.28466 12.2974Z"
                                fill="#FBBC04"
                            />
                            <path
                                d="M18.8257 12.2975L20.2144 7.75805L16.5411 5.12994H21.0805L22.514 0.351562L23.9475 5.12994H28.487L24.8136 7.75805L26.2023 12.2975L22.514 9.49021L18.8257 12.2975Z"
                                fill="#FBBC04"
                            />
                            <path
                                d="M35.3669 12.2975L36.7556 7.75805L33.0823 5.12994H37.6217L39.0552 0.351562L40.4887 5.12994H45.0282L41.3548 7.75805L42.7435 12.2975L39.0552 9.49021L35.3669 12.2975Z"
                                fill="#FBBC04"
                            />
                            <path
                                d="M51.9061 12.2975L53.2948 7.75805L49.6214 5.12994H54.1609L55.5944 0.351562L57.0279 5.12994H61.5674L57.894 7.75805L59.2827 12.2975L55.5944 9.49021L51.9061 12.2975Z"
                                fill="#FBBC04"
                            />
                            <path
                                d="M68.4473 12.2975L69.836 7.75805L66.1626 5.12994H70.7021L72.1356 0.351562L73.5691 5.12994H78.1086L74.4352 7.75805L75.8239 12.2975L72.1356 9.49021L68.4473 12.2975Z"
                                fill="#FBBC04"
                            />
                        </svg>
                    </div>
                    <div className="product-comments__detail">
                        <span className="product-comments__name">Ken T.</span>
                        <img
                            src="/img/product-detail/comments/verify.svg"
                            alt="verified"
                            className=""
                        />
                        <span className="product-comments__verified">
                            Verified Customer
                        </span>
                    </div>
                </div>
            </div>
            <div className="product-comments__description">
                “As soon as the Clarifions arrived I put one in my bedroom. This
                was late in the afternoon. When I went to the bedroom in the
                evening it smelled clean. When I went to bed I felt I could
                breathe better. Wonderful.”
            </div>
        </div>
    );
}
