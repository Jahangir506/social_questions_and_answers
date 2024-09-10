"use client";

import { useState } from "react";
import PuffLoader from "react-spinners/ClipLoader";

const loading = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="sweet-loading">
          <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
          <input
            value={color}
            onChange={(input) => setColor(input.target.value)}
            placeholder="Color of the loader"
          />

          <PuffLoader
            color={color}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      </div>
    </>
  );
};
export default loading;
