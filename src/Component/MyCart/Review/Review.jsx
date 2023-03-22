import React from "react";

function Review({ formData }) {
  return (
    <div className="px-7 w-96 flex-wrap">
      {formData.name && (
        <div className="text-base font-semibold pb-2">
          <span className="text-sm font-thin mt-1 min-width-max mr-6">
            Name:{" "}
          </span>
          <span>{formData.name}</span>
        </div>
      )}
      {formData.address && <div className="text-sm font-semibold flex pb-2">
        <span className="text-sm font-thin mt-1 min-width-max mr-4">
          Address:{" "}
        </span>

        <span>{formData.address}</span>
      </div>}
      {formData.city && <div className="text-sm font-semibold pb-2">
        <span className="text-sm font-thin mt-1 mr-8">City: </span>
        <span className="mx-1">{formData.city}</span>
      </div>}
      {formData.phone && <div className="text-sm font-semibold	pb-2 mt-1">
        <span className="text-sm font-thin mt-1 mr-2 ">Mobile No:</span>
        <span>{formData.phone}</span>
      </div>}
    </div>
  );
}

export default Review;
