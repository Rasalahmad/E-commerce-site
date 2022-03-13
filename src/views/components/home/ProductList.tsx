import React from "react";
import ProductCard from "../common/ProductCard";

export default function ProductList({ products }: { products: any[] }) {
  return (
    <div className="grid-cols-4">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}
