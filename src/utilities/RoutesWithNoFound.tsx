import { PropsWithChildren } from "react";
import { Routes, Route } from "react-router-dom";

function RoutesWithNoFound(props: PropsWithChildren) {
  return (
    <Routes>
      {props.children}
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
}

export default RoutesWithNoFound;
