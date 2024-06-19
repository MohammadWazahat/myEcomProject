import React from "react";
import AllComponents from "./components/AllComponents";
import "./App.css";
import DataProvider from "./contexts/AllDataContext";
import SortAndFilterProvider from "./contexts/SortAndFilterContext";

const App = () => {
  return (
    <div>
      <DataProvider>
        <SortAndFilterProvider>
        <AllComponents />
        </SortAndFilterProvider>
      </DataProvider>
    </div>
  );
};

export default App;
