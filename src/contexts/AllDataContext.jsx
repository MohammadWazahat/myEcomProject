import { createContext, useReducer, useState } from "react";
import reducer from "../reducers/AllDataReducer";
export const AllDataContext = createContext();
import React from "react";
import Data from "../DummyProducts.json";

const DataProvider = ({ children }) => {
  const d = 10;
  const initialState = { Data: Data, x: d };
  const [state, dispatch] = useReducer(reducer, initialState);
  const myData = state.Data;

  const [newDatas, setNewDatas] = useState([]);

  const AddToMyCart = (x) => {
    // console.log(x);
    setNewDatas([...newDatas, x]);
    // console.log(newDatas)
  };

  return (
    <AllDataContext.Provider
      value={{
        state: state,
        myData: myData,
        AddToMyCart: AddToMyCart,
        newDatas: newDatas,
      }}
    >
      {children}
    </AllDataContext.Provider>
  );
};

export default DataProvider;
