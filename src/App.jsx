import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppRoutes from "./routes";

const App = () => {
  return (
    <div className="flex-1 py-0">
      <AppRoutes />
    </div>
  );
};
export default App;
