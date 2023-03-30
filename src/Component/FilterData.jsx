import React from 'react'
import { NavLink } from 'react-router-dom';

function FilterData({data,name}) {
  return (
    <div className='mt-20 mx-28'>
        <div className="flex flex-row flex-wrap lg:ml-24 ">
            {/* show singal product on filter  */}
            {data &&
              data.map((item) => {
                return (
                  <>
                    <div className="w-80 rounded-lg mx-5 container shadow-lg bg-lightblue">
                    <NavLink to={`/subcategory-details/${item.category_name}/product-details/${item.id}`}>
                      <img
                        className="w-full h-56"
                        src={item.image}
                        alt={name}
                      />
                      </NavLink>
                      <div className="py-4 text-center">
                        <h2 className="text-xl font-normal">{item.name}</h2>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
    </div>
  )
}

export default FilterData
