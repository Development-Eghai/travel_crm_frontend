import React, { Suspense } from "react";
import AppRoutes from "./AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <>
      <Suspense fallback={
        <div className="suspense-loader">
          Loadingsss...
        </div>}>
        <AppRoutes />
        <ToastContainer />
      </Suspense>

    </>
  )
}

export default App
