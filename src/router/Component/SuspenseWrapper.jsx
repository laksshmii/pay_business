import React from "react";
import Loader from "@/components/loader";

const SuspenseWrapper = ({ children }) => {
  return (
    <React.Suspense fallback={<Loader />}>
      {children}
    </React.Suspense>
  );
};

export default SuspenseWrapper;
