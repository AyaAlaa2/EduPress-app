import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import ErrorFrame from "./assets/img/ErrorFrame.png";

const Error = () => {
  const location = useLocation();

  return (
    <div className="min-h-[70vh] bg-white flex flex-col items-center justify-start px-4 py-14">
      <div className="w-full max-w-5xl">
        <h1 className="text-3xl font-bold text-center mb-10">Error</h1>

        <div className="flex flex-col items-center gap-6">
          {/* Image */}
          <img
            src={ErrorFrame}
            alt="Error illustration"
            className="w-full max-w-4xl h-auto"
          />

          {/* Text */}
          <div className="text-center space-y-2">
            <p className="text-lg font-semibold">Page Not Found</p>

            <p className="text-sm text-muted-foreground">
              No route matches{" "}
              <span className="font-medium text-gray-600">
                {location.pathname}
              </span>
              .
            </p>
          </div>

          {/* Actions */}
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
  );
};

export default Error;
