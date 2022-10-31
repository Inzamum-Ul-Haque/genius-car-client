import React from "react";

const BannerItem = ({ slide }) => {
  const { image, prev, next, id } = slide;

  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img">
        <img alt="" src={image} className="w-full" />
      </div>
      <div className="absolute flex flex-col justify-end transform -translate-y-1/2 left-24 top-1/2">
        <h1 className="text-5xl font-bold text-white">
          Affordable <br />
          Price for car <br />
          Servicing
        </h1>
        <p className="text-white w-2/5 text-xl mt-8">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
        <div className="mt-8">
          <button className="btn btn-outline btn-warning mr-5">
            Discover More
          </button>
          <button className="btn btn-outline btn-warning">
            Latest Project
          </button>
        </div>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-25 right-5 bottom-0">
        <a
          onClick={() => window.scrollTo({ top: 0 })}
          href={`#slide${prev}`}
          className="btn btn-circle mr-5"
        >
          ❮
        </a>
        <a
          onClick={() => window.scrollTo({ top: 0 })}
          href={`#slide${next}`}
          className="btn btn-circle"
        >
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
