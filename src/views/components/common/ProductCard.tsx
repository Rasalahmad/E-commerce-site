import React from "react";

export default function ProductCard({ product }: { product: any }) {
  return (
    <div>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8LmIcvm5vzZBd399v7zDlQYyBeP_CVDagfVQLiuRos_PbWkKJl0VVZIJcOeJHpkKBFGo&usqp=CAU"
          alt="img"
        />
      </div>
      <div>
        <h4>{product}</h4>
        <p>Product Price</p>
      </div>
    </div>
  );
}
