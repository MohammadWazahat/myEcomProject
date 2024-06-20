import React from "react";
import AllComponents from "./components/AllComponents";
import "./App.css";
import DataProvider from "./contexts/AllDataContext";
import SortAndFilterProvider from "./contexts/SortAndFilterContext";
import HomeProvider from "./contexts/HomeContext";

const App = () => {
  return (
    <div>
      <DataProvider>
        <SortAndFilterProvider>
          <HomeProvider>
            <AllComponents />
          </HomeProvider>
        </SortAndFilterProvider>
      </DataProvider>
    </div>
  );
};

export default App;
