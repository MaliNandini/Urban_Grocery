import React from "react"; 

function Review({ formData }) {
  console.log(formData, "formData//");
  return (
    <div className="fixed bottom-14 px-36 shadow-2xl bg-white shadow-blue-500/40 hover:shadow-indigo-500/40 Consolas ">
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
