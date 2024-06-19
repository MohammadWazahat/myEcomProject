import React from "react";
import AllComponents from "./components/AllComponents";
import "./App.css";
import DataProvider from "./contexts/AllDataContext";

const App = () => {
  return (
    <div>
      <DataProvider>
        <AllComponents />
      </DataProvider>
    </div>
  );
};

export default App;
