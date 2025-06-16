import React, { Suspense } from "react";
import AppRoutes from "./AppRoutes";

function App() {

  return (
    <>
      <Suspense fallback={
        <div className="suspense-loader">
          Loadingsss...
        </div>}>
        <AppRoutes />
      </Suspense>

    </>
  )
}

export default App
