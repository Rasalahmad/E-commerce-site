import React from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../common/ProductCard";

export default function ProductList({ products }: { products: IProduct[] }) {
  let navigate = useNavigate();

  const onClick = (id: string | undefined): void => {
    navigate("/product/" + id);
    console.log("Fire");
  };

  return (
    <div className="grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} onclick={onClick} />
      ))}
    </div>
  );
}
