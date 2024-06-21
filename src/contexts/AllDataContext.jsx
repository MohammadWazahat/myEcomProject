import { createContext, useReducer, useState } from "react";
import reducer from "../reducers/AllDataReducer";
import React from "react";
import Data from "../DummyProducts.json";

export const AllDataContext = createContext();

const DataProvider = ({ children }) => {
  
  const initialState = { Data: Data };
  const [state, dispatch] = useReducer(reducer, initialState);
  const myData = state.Data;

  // const [newDatas, setNewDatas] = useState([]);

  // const AddToMyCart = (x) => {
  //   // console.log(x);
  //   setNewDatas([...newDatas, x]);
  //   // console.log(newDatas)
  // };

  // const [addMore, setAddMore] = useState([]);

  // const AddMoreToMyCart = (x) => {
  //   // console.log(x);
  //   setAddMore([...addMore, x]);
  //   // console.log(newDatas)
  // };

  const [viewData, setViewData] = useState();
  const AddToPage = (x) => {
    // console.log(x);
    setViewData({ ...x });
    // console.log(viewData);
  };

  return (
    <AllDataContext.Provider
      value={{
        state: state,
        myData: myData,
            
        AddToPage: AddToPage,
        viewData: viewData,
        // newDatas: newDatas,
        // addMore: addMore,
        // AddToMyCart: AddToMyCart,  
        // AddMoreToMyCart: AddMoreToMyCart,
      }}
    >
      {children}
    </AllDataContext.Provider>
  );
};

export default DataProvider;
