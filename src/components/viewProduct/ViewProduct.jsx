import React, { useContext } from "react";

import { AllDataContext } from "../../contexts/AllDataContext";

const ViewProduct = () => {

  const { viewData } = useContext(AllDataContext);
  console.log(viewData);

  return (<>
    <div>
<div>{viewData.id}</div>
<div>{viewData.title}</div> 
<div>{viewData.description}</div>
<div>{viewData.category}</div>     
    </div>
    </>
  );
};

export default ViewProduct;
