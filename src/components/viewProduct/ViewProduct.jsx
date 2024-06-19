import React, { useContext } from "react";
import { AllDataContext } from "../../contexts/AllDataContext";
import StarRating from "./StarRating";
import QuantityAdder from "./QuantityAdder";

const ViewProduct = () => {
  const { viewData } = useContext(AllDataContext);
  //   console.log(viewData);

  return (
    <>
      <div>
        <div>{viewData.id}</div>
        <div>
          <img src={viewData.images[0]} alt="" className="h-64 w-64 m-4" />
          <img src={viewData.images[1]} alt="" className="h-64 w-64 m-4" />
          <img src={viewData.images[2]} alt="" className="h-64 w-64 m-4" />
          <img src={viewData.images[3]} alt="" className="h-64 w-64 m-4" />
        </div>
        <div>{viewData.product_name}</div>
        <div>{viewData.rating}</div>
        <div>
          <StarRating {...viewData} />
        </div>
        <div>customer reviews : {viewData.reviews}</div>
        <div>{viewData.description}</div>
        <div>{viewData.category}</div>
        <div>{viewData.quantity}</div>
        <div>
          <QuantityAdder {...viewData} />
        </div>
        <div>Add to cart</div>
      </div>
    </>
  );
};

export default ViewProduct;
