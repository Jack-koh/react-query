import React, { Suspense } from "react";
import Comp from "./Comp";

function Pgination() {
  return (
    <Suspense fallback={<div>로딩중 입니다...</div>}>
      <Comp />
    </Suspense>
  );
}

export default Pgination;
