import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="mt-7 flex items-center gap-5 bg-base-200 p-4">
      <p className="font-medium text-xl bg-secondary px-6 py-3 text-white">
        Latest
      </p>
      <Marquee className="flex gap-5" pauseOnHover={true} speed={60}>
        <p className="font-semibold text-lg">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </p>
        <p className="font-semibold text-lg">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
