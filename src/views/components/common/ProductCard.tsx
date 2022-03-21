import React from "react";

export default function ProductCard({
  product,
  onclick,
}: {
  product: IProduct;
  onclick: (id: string | undefined) => void;
}) {
  if (!product._id) return null;
  return (
    <div
      className="p-3 rounded-sm shadow hover:shadow-xl hover:cursor-pointer"
      onClick={() => onclick(product._id)}
    >
      <div className="relative pb-60">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8LmIcvm5vzZBd399v7zDlQYyBeP_CVDagfVQLiuRos_PbWkKJl0VVZIJcOeJHpkKBFGo&usqp=CAU"
          alt="img"
        />
      </div>
      <div className="pt-3">
        <h4>{product}</h4>
        <p className="text-lg font-semibold">{product.price}</p>
      </div>
    </div>
  );
}
