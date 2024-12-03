import React from "react";
//libraries
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => {
  return (
    <SkeletonTheme highlightColor="rgb(17, 17, 103, .25)">
      <div className="flex min-h-screen  w-full justify-center bg-customWhite px-4">
        <div className="w-full h-full flex my-[180px] items-start justify-center">
          <div className="flex items-center justify-center w-1/3">
            <Skeleton width={400} height={400} />
          </div>

          <div className="flex flex-col justify-center gap-10 w-1/2">
            <h2>
              <Skeleton count={1} height={180} />
            </h2>

            <p>
              <Skeleton count={5} height={100} className="my-2" />
            </p>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default Loading;
