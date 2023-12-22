"use client";
import Link from "next/link";
import { getProducts } from "@/services/api/product.api.js";
import Alert from "@/components/UI/Alert";
import ProductsGrid from "@/components/products/ProductsGrid";
import TitlePage from "@/components/UI/TitlePage";
import ProductsCounter from "@/components/products/ProductsCounter";
import MultiRangeSlider from "@/components/UI/MultiRangeSlider";
import { useEffect, useState } from "react";

export default function Page({
    searchParams,
}) {
    
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(1000);
    const [products, setProducts] = useState({});
    
    const { take = 8 } = searchParams || {};

    useEffect(() => {
        console.log('fetch 2')
        fetchItem();
    }, [min, max])

    useEffect(()=>{
        console.log('fetch 1')
        fetchItem();
    }, [])

    const fetchItem=() => {
        getProducts(take)
        .then((res) => {
            setProducts(res);
        });
    }

    if (!products.data || products.success === false) return <Alert message={products.message} type="error" />;

    return (
        <div className="container mx-auto">

            <MultiRangeSlider min={min} setMin={setMin} max={max} setMax={setMax}/>

            <TitlePage title="Shop" />
            <ProductsCounter productsLength={products.data.length} />
            <ProductsGrid products={products.data} />
            <div className="flex justify-center mb-24">
                {
                    Number(take) <= products.data.length && (
                        <Link
                            className="transition ease-in-out delay-150 mt-4 inline-flex items-center px-4 py-3 text-sm border border-slate-500 font-medium text-center text-slate-500 bg-white hover:bg-slate-500 hover:text-white"
                            href={`/shop?take=${(Number(take) + 8)}`}
                        >
                            See more
                        </Link>
                    )
                }
            </div>
        </div>
    )
}