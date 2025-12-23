import React from "react";
import ErrorFrame from "./assets/img/ErrorFrame.png";

const Error = () => {
  return (
    <div className="mt-5 min-h-[70vh] bg-white flex flex-col items-center justify-start px-4 py-14">
      <div className="w-full max-w-6xl">
        <h1 className="text-[36px] font-semibold font-[Exo] mb-[60px]">
          Error
        </h1>

        <div className="flex flex-col items-center gap-6">
          <div className="w-full h-[400px]">
            <img
              src={ErrorFrame}
              alt="Error illustration"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
