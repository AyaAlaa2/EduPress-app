import React from "react";
import ErrorFrame from "./assets/img/ErrorFrame.png";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";

const Error = () => {
  const location = useLocation();

  return (
    <div className="mt-5 min-h-[70vh] bg-white flex flex-col items-center justify-start px-4 py-14">
      <div className="w-full max-w-6xl">
        <h1 className="text-[36px] font-semibold font-[Exo] mb-[60px]">
          Error
        </h1>

        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-6">
            <div className="w-full h-[300px]">
              <img
                src={ErrorFrame}
                alt="Error illustration"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="text-center space-y-2">
              <p className="text-lg font-semibold">Page Not Found</p>

              <p className="text-sm text-muted-foreground">
                No route matches
                <span className="font-medium text-gray-600">
                  {location.pathname}
                </span>
                .
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Button asChild className="rounded-full">
                <Link to="/">Back to Home</Link>
              </Button>

              <Button
                variant="outline"
                className="rounded-full"
                onClick={() => window.location.reload()}
              >
                Reload
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
