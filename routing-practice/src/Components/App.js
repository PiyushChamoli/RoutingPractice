import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Main from "./Main";

function App() {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <Main />
      </div>
    </>
  );
}

export default App;
