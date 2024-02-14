"use client";
import "@/assets/css/components/product/product-detail.css";
import ProductInfo from "@/components/product/ProductInfo";
import ProductFeatures from "@/components/product/ProductFeatures";
import ProductSavings from "./ProductSavings";
import ProductButton from "./ProductButton";
import ProductShipping from "./ProductShipping";
import { useAppSelector } from "@/hooks/reduxHooks";

type Props = {
    handleShowModal: () => void;
};

export default function ProductDetail(props: Props) {
    const productState = useAppSelector((state) => state.productState);

    return (
        <div className="product-detail">
            <h2 className="product-detail__title-mobile">
                {productState.product.title}
            </h2>

            <div className="product-detail__container">
                <div className="product-detail__image">
                    <img
                        src={`/img/product-detail/${productState.product.image}`}
                        alt={productState.product.title}
                    />
                </div>
                <div>
                    <ProductInfo product={productState.product} />

                    <ProductFeatures product={productState.product} />
                    {/* <ProductSavings /> */}
                    <ProductButton handleShowModal={props.handleShowModal} />
                    <ProductShipping />
                </div>
            </div>
        </div>
    );
}
