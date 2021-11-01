import React from "react";
import { Suspense, lazy } from "react";

import Preloader from "./../preloader/Preloader";

function PreloaderDisplay({ Component }) {
  return (
    <div>
      <Suspense fallback={<Preloader />}>
        <Component />
      </Suspense>
    </div>
  );
}

export default PreloaderDisplay;
