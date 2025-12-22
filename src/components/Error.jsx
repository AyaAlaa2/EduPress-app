import React from "react";
import ErrorFrame from "./assets/img/ErrorFrame.png";

const Error = () => {
  return (
    <div className="min-h-[70vh] bg-white flex flex-col items-center justify-start px-4 py-14">
      <div className="w-full max-w-5xl">
        <h1 className="text-[36px] font-semibold font-[Exo] mb-[60px]">
          Error
        </h1>

        <div className="flex flex-col items-center gap-6">
          <div className="w-full h-[400px]">
            <img
              src={ErrorFrame}
              alt="Error illustration"
              className="w-full max-w-4xl h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
