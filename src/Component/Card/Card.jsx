import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { mockProduct } from "../../Models/MockProduct";

export const Card = ({ name, data }) => {
  const [cardData, setCardData] = useState(mockProduct.data);

  console.log(cardData , "////")
  return (
    <>
      {data.length == 0 ? (
        <div className="flex flex-row flex-wrap">
          {cardData &&
            cardData.map((item) => {
              return (
                <div className="max-w-sm rounded mt-20 mx-1 py-3 container px-4 md:px-12">
                  <NavLink to={`product-details/${item.id}`}>
                    <img className="w-full h-56" src={item.image} alt={name} />
                  </NavLink>
                  <div className="px-6 py-4">
                    <h2 className="text-xl font-normal">{item.name}</h2>
                    <p className="text-gray-700 decoration-double text-sm">
                      {item.subtitle}
                    </p>
                    <NavLink to={`product-details/${item.id}`}>
                    <button className="bg-lime hover:bg-red-700 text-white py-1 px-3 rounded text-sm">
                      Buy Now
                    </button>
                    </NavLink>
                  </div>
                </div>
              );
            })}
        </div>
      ) : (
        <div>
          {data &&
            data.map((item) => {
              return (
                <>
                  <div className="max-w-sm rounded mt-20 mx-1 py-3 container px-4 md:px-12">
                    <img className="w-full h-56" src={item.image} alt={name} />
                    <div className="px-6 py-4">
                      <h2 className="text-xl font-normal">{item.name}</h2>
                      <p className="text-gray-700 decoration-double text-sm">
                        {item.subtitle}
                      </p>
                      
                      <button className="bg-blue-500 hover:bg-red-700 text-white py-1 px-3 rounded text-sm">
                        Buy Now
                      </button>
        
                     
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      )}
    </>
  );
};
