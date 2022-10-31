import React from "react";
import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";

const Banner = () => {
  //   const sliderImages = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img alt="" src={img1} className="w-full" />
        <div className="absolute flex flex-col justify-end transform -translate-y-1/2 left-24 top-1/4">
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
            href="#slide4"
            className="btn btn-circle mr-5"
          >
            ❮
          </a>
          <a
            onClick={() => window.scrollTo({ top: 0 })}
            href="#slide2"
            className="btn btn-circle"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img alt="" src={img2} className="w-full" />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            onClick={() => window.scrollTo({ top: 0 })}
            href="#slide1"
            className="btn btn-circle mr-5"
          >
            ❮
          </a>
          <a
            onClick={() => window.scrollTo({ top: 0 })}
            href="#slide3"
            className="btn btn-circle"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img alt="" src={img3} className="w-full" />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            onClick={() => window.scrollTo({ top: 0 })}
            href="#slide2"
            className="btn btn-circle mr-5"
          >
            ❮
          </a>
          <a
            onClick={() => window.scrollTo({ top: 0 })}
            href="#slide4"
            className="btn btn-circle"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img alt="" src={img4} className="w-full" />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            onClick={() => window.scrollTo({ top: 0 })}
            href="#slide3"
            className="btn btn-circle mr-5"
          >
            ❮
          </a>
          <a
            onClick={() => window.scrollTo({ top: 0 })}
            href="#slide5"
            className="btn btn-circle"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img alt="" src={img5} className="w-full" />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            onClick={() => window.scrollTo({ top: 0 })}
            href="#slide4"
            className="btn btn-circle mr-5"
          >
            ❮
          </a>
          <a
            onClick={() => window.scrollTo({ top: 0 })}
            href="#slide6"
            className="btn btn-circle"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img alt="" src={img6} className="w-full" />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            onClick={() => window.scrollTo({ top: 0 })}
            href="#slide5"
            className="btn btn-circle mr-5"
          >
            ❮
          </a>
          <a
            onClick={() => window.scrollTo({ top: 0 })}
            href="#slide1"
            className="btn btn-circle"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
