import React from "react";
import { Card } from "./Card/Card";
import CarouselComponent from "./Carousel/Carousel";

function Home({ data, addItem, setAddItem }) {
  return (
    <>
      <div className="container md:mt-24 xs:mt-20">
        <div className=" md:ml-20 xs:ml-2 ">
          <img
            src="https://dao54xqhg9jfa.cloudfront.net/oms/d35e223b-0fae-e484-bac5-5f9680387dc4/original/BANNERS-02_(4).jpeg"
            alt=""
            className="rounded-xl"
          />
          <div className="flex flex-row justify-between">
            <div className="w-96 m-5">
              <img
                src="https://i.pinimg.com/736x/65/7f/5b/657f5b5b1a8cf7c0db2f5d8c34243559.jpg"
                alt=""
                className="rounded-xl"
              />
            </div>
            <div className="w-96 m-2 border"><CarouselComponent/></div>
            <div className="w-96 m-5">
              <img
                src="https://m.media-amazon.com/images/S/aplus-media/sota/14f6ba65-28fe-4257-be60-e960c7f1346d.__CR0,0,970,600_PT0_SX970_V1___.png"
                alt=""
                className="rounded-xl"
              />
            </div>
          </div>
          {/* <div className="border">
            <CarouselComponent />
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Home;
