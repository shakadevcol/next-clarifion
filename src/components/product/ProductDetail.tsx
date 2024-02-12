"use client";
import "@/assets/css/components/product/product-detail.css";
import ProductInfo from "@/components/product/ProductInfo";
import ProductPreview from "@/components/product/ProductPreview";
import ProductFeatures from "@/components/product/ProductFeatures";
import ProductSavings from "./ProductSavings";
import ProductButton from "./ProductButton";
import ProductShipping from "./ProductShipping";
import ProductGuarantee from "./ProductGuarantee";
import ProductComments from "./ProductComments";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { useEffect, useState } from "react";

export default function ProductDetail() {
    const productState = useAppSelector((state) => state.productState);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        return () => {
            setMounted(false);
        };
    }, []);

    return (
        mounted && (
            <div className="product-detail">
                <h2 className="product-detail__title-mobile">
                    {productState.product.title}
                </h2>

                <div className="product-detail__container">
                    <div className="product-detail__image">
                        <img
                            src="/img/product-detail/product.png"
                            alt="product"
                        />
                        {/* <ProductComments /> */}
                    </div>
                    <div>
                        <ProductInfo product={productState.product} />
                        {/* <ProductPreview /> */}
                        <ProductFeatures product={productState.product} />
                        {/* <ProductSavings /> */}
                        <ProductButton />
                        <ProductShipping />
                        <ProductGuarantee />
                    </div>
                </div>
            </div>
        )
    );
}
