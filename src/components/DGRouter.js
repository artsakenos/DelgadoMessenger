import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { MyTestComponent } from "./TestComponent";
import { DelgadoTable } from "./DelgadoTable";
import DGSimpleTable from "./DGSimpleTable";
import DGMain from "./DGMain";

export const DGRouter = () => {
  return (
    <Router>
      <Routes>
        <React.Fragment key="id00">
          <Route path="/" element={<DGMain />} />
        </React.Fragment>
        <React.Fragment key="id01">
          <Route path="/home" element={<DGMain />} />
        </React.Fragment>
        <React.Fragment key="id02">
          <Route path="/table" element={<DelgadoTable />} />
        </React.Fragment>
        <React.Fragment key="id02">
          <Route path="/simpletable" element={<DGSimpleTable />} />
        </React.Fragment>
      </Routes>
    </Router>
  );
};
