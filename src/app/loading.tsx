import React from "react";

const Loading = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-customWhite">
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
  );
};

export default Loading;
