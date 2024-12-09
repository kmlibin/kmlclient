import React from "react";
//libraries
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => {
  return (
    <>
      <div className="w-full h-full hidden lg:block">
        <SkeletonTheme highlightColor="rgb(17, 17, 103, .25)">
          <div className=" min-h-screen  w-full justify-center bg-customWhite px-4 hidden sm:flex">
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
