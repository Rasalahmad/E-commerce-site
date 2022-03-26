import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import useApi from "../../../hooks/useApi";
import { add_to_cart } from "../../../redux/action/cartAction";
import ProductService from "../../../services/Product.service";

export const SingleProduct = () => {
  const { id = "" } = useParams();

  const dispatch = useDispatch();

  const { data: product } = useApi(() =>
    ProductService.getProductDetailsById(id)
  );

  return (
    <div>
      {product ? (
        <img
          src={process.env.REACT_APP_IMAGE_BASE_URL + product.image}
          alt=""
        />
      ) : null}
      <button
        className="p-2 border"
        onClick={() => dispatch(add_to_cart(product))}
      >
        Add To Card
      </button>
      <button className="p-2 border">Remove From Card</button>
    </div>
  );
};
