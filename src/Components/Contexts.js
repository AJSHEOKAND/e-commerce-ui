// MyContext.js
import React, { createContext, useState } from "react";

const MyContext = createContext();

function StateProvider({ children }) {
  const [renderer, setRenderer] = useState(0);
  const [maxProducts, setMaxProducts] = useState(2);
  let [pageNo, setpageNo] = useState(1);

  // const [tableRender, setTableRender] = useState(0);
  // const [select, setSelect] = useState("");
  // const [testName, setTestName] = useState("");
  // const [price, setPrice] = useState(0);
  // const [unit, setUnit] = useState("");
  // const [refValue, setRefValue] = useState("");

  return (
    <MyContext.Provider
      value={{
        renderer,
        maxProducts,
        pageNo,
        // tableRender,
        // select,
        // testName,
        // price,
        // unit,
        // refValue,

        setRenderer,
        setMaxProducts,
        setpageNo,
        // setTableRender,
        // setSelect,
        // setTestName,
        // setPrice,
        // setUnit,
        // setRefValue,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export { MyContext, StateProvider };
