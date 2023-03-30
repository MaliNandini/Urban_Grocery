import React from "react";
import { Category } from "./Category/Category";
import { SubCategory } from "./Sub-Category/SubCategory";
import CarouselComponent from "./Carousel/Carousel";
import Search from "./Header/Search/Search";
import { NavLink } from "react-router-dom";

function Home({
  data,
  name,
  SubCategory,
  productDetails,
  setData,

}) {
  console.log(data, "data ");
  return (
    <div>
      <>
        <div className="md:invisible xs:visible">
          <Search setData={setData} data={data} />
        </div>
      
          <div className="container md:mt-10 w-full items-center">
            <div className=" md:ml-20 xs:px-3 sm:px-5 ">
              <img
                src="https://dao54xqhg9jfa.cloudfront.net/oms/d35e223b-0fae-e484-bac5-5f9680387dc4/original/BANNERS-02_(4).jpeg"
                alt=""
                className="rounded-xl xs:h-[145px] md:w-full md:h-[270px] xs:w-full sm:h-[232px]"
              />

              <div className="flex md:flex-row justify-between xs:flex-col xs:mt-3">
                <div className="md:w-[453px] md:p-2 md:mt-4 xs:py-2">
                  <img
                    src="https://www.whatech.com/images/featured/31344/grocery-ct-25.png"
                    alt=""
                    className="rounded-xl md:h-[260px]  "
                  />
                </div>
                <div className="md:w-[453px] md:p-2 md:mt-4 xs:pt-3 sm:h-[400px]">
                  <CarouselComponent />
                </div>
                <div className="md:w-[453px] md:p-2 xs:-mt-20 md:mt-4 xs:py-2">
                  <img
                    src="https://m.media-amazon.com/images/S/aplus-media/sota/14f6ba65-28fe-4257-be60-e960c7f1346d.__CR0,0,970,600_PT0_SX970_V1___.png"
                    alt=""
                    className="rounded-xl"
                  />
                </div>
              </div>
              <Category
                SubCategory={SubCategory}
                productDetails={productDetails}
              />
            </div>
          </div>
       
      </>
      
    </div>

    
  );
}

export default Home;
