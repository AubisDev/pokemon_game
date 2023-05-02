import { PropsWithChildren } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";

function RoutesWithNoFound(props: PropsWithChildren) {
  return (
    <Routes>
      {props.children}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default RoutesWithNoFound;
