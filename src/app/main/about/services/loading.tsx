import React from "react";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => {
  return (
    <>
      <div className="w-full h-full hidden lg:block">
        <SkeletonTheme highlightColor="rgb(17, 17, 103, .25)">
          <div className=" min-h-screen  w-full justify-center my-[180px] bg-customWhite px-4 hidden sm:flex ">
            <div className="w-full h-full flex flex-col items-center justify-center">
              <div className="md:w-4/5 mx-auto md:space-y-3 bg-customWhite bg-opacity-95 rounded-md p-2 z-10 ">
                <div className="col-start-1 col-end-3 row-start-1 row-end-3">
                  <Skeleton count={1} height={280} borderRadius={16} />
                </div>
                <div
                  className="grid gap-3"
                  style={{
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gridTemplateRows: "repeat(2, 200px)",
                  }}
                >
                  <div className="col-start-1 col-end-3 row-start-1 row-end-3">
                    <Skeleton height="100%" borderRadius={16} />
                  </div>

                  <div className="col-start-3 row-start-1 row-end-3">
                    <Skeleton height="100%" borderRadius={16} />
                  </div>

                  <div className="col-start-4 row-start-1">
                    <Skeleton height="100%" borderRadius={16} />
                  </div>

                  <div className="col-start-4 row-start-2">
                    <Skeleton height="100%" borderRadius={16} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SkeletonTheme>
      </div>
      <div className=" flex lg:hidden h-screen items-center justify-center bg-customWhite">
        <div className="flex gap-6">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="dot"
              style={{ animationDelay: `${index * 0.2}s` }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Loading;
