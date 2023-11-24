import React from "react";
import brand1 from "../Media/fa-brands-1.png";
import brand2 from "../Media/fa-brands-2.png";
import brand3 from "../Media/fa-brands-3.png";
import brand4 from "../Media/fa-brands-4.png";
import brand5 from "../Media/fa-brands-5.png";
import brand6 from "../Media/fa-brands-6.svg";
const DesktopClients = () => {
  return (
    <>
      <div className="flex bg-zinc-50 justify-center py-28 px-0 xl:py-0 xl:px-48">
        <div className=" py-12 gap-14 flex flex-col md:flex-row lg:flex-row xl:flex-row items-center xl:py-12 xl:gap-9">
          <div>
            <img src={brand1} alt="" />
          </div>
          <div>
            <img src={brand2} alt="" />
          </div>
          <div>
            <img src={brand3} alt="" />
          </div>
          <div>
            <img src={brand4} alt="" />
          </div>
          <div>
            <img src={brand5} alt="" />
          </div>
          <div>
            <img src={brand6} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopClients;
