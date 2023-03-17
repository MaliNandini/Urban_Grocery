import React from "react"; 

function Review({ formData }) {

  return (
    <div className="px-7 w-screen">
      <div className="text-base font-semibold">
        <span>{formData.name}</span>
      </div>
      <div className="text-sm font-normal">
        <span>{formData.address}</span>
        <span className="mx-1">{formData.city}</span>
      </div>
      <div className="text-sm font-normal">
        <span>{formData.phone}</span>
      </div>
    </div>
  );
}

export default Review;
