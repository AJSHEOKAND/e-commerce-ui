import React from "react";

const Pagination = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex pb-12">
          <button className="p-6 border rounded-tl-lg rounded-bl-lg font-bold text-customColor2 bg-zinc-100">First</button>
          <button className="px-5 py-6 border text-blue-500 font-bold ">
            1
          </button>
          <button className="px-5 py-6 border text-white bg-sky-500 font-bold ">
            2
          </button>
          <button className="px-5 py-6 border text-blue-500 font-bold ">
            3
          </button>
          <button className="p-6 border text-blue-500 font-bold rounded-tr-lg rounded-br-lg ">Next</button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
