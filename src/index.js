import React from "react";
import ReactDom  from "react-dom/client";
import Puertas from "./components/puertas";

const root=ReactDom.createRoot(document.getElementById("root"));

root.render(
    <>
       <Puertas/>
    </>
)