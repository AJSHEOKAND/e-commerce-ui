import React, { useState, useEffect } from "react";
import Voctor from "../Media/Vector.svg";
import Img from "../Media/Icon.png.svg";
import Img1 from "../Media/Icon1.png.svg";
import Img2 from "../Media/Icon2.png.svg";
import Img3 from "../Media/Icon3.png.svg";
import Menu from "../Media/menu.svg";
import Close from "../Media/close.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleCloseMenu = () => {
    setToggleMenu(false);
  };

  const handleMenuClick = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="xl:p-8 p-2 xl:px-24 px-10 flex justify-between ">
      <div>
        <h1 className="text-slate-800 xl:text-2xl font-bold">Bandage</h1>
      </div>
      <div className="lg:hidden  right-0 absolute">
        {!toggleMenu ? (
          <img
            className="h-7 "
            onClick={handleMenuClick}
            src={Menu}
            alt="Menu"
          />
        ) : (
          <img
            onClick={handleCloseMenu}
            className="h-7 "
            src={Close}
            alt="Close"
          />
        )}
      </div>
      <div>
        {isMobile ? (
          <div
            className={` flex flex-col ${
              toggleMenu ? "flex" : "hidden"
            } lg:hidden text-neutral-500  bg-slate-200   pl-6 absolute right-14  top-14  shadow-2xl `}
          >
            <ul>
              <li className="my-2">Home</li>
              <li className="my-2 flex flex-row gap-1">
                Shop <img src={Voctor} alt="Vector" />
              </li>
              <li className="my-2">About </li>
              <li className="my-2">Blog</li>
              <li className="my-2">Contact</li>
              <li className="my-2">Pages</li>
            </ul>
            <div className=" flex flex-col gap-1  text-sky-500 align items-center">
              <div className=" items-center  pr-6 gap-1">
                <div className="font-bold">
                  <Link to="/login">Login</Link>
                  <Link to="/register"> / Register</Link>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <img src={Img1} alt="Icon1" />
                </div>
                <div className="flex gap-1">
                  <img src={Img2} alt="Icon2" />
                  <div>1</div>
                </div>
                <div className="flex gap-1">
                  <img src={Img3} alt="Icon3" />
                  <div>1</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            className={`flex justify-between gap-12 md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500`}
          >
            <div>
              <ul className="text-neutral-500 flex xl:px-24 px-6">
                <li className="mx-4 my-6 md:my-0">Home</li>
                <li className="mx-4 my-6 md:my-0">Shop</li>
                <div className="mx-4 my-6 md:my-0 pt-2">
                  <img src={Voctor} alt="Vector" />
                </div>
                <li className="mx-4 my-6 md:my-0">About </li>
                <li className="mx-4 my-6 md:my-0">Blog</li>
                <li className="mx-4 my-6 md:my-0">Contact</li>
                <li className="mx-4 my-6 md:my-0">Pages</li>
              </ul>
            </div>
            <div className="flex justify-between gap-4 text-sky-500 align items-center">
              <div className="flex items-center gap-1">
                <div>
                  <img src={Img} alt="Icon" />
                </div>
                <div className="font-bold">
                  <Link to="/login">Login</Link>
                  <Link to="/register"> / Register</Link>
                </div>
              </div>
              <div className="flex justify-between items-center gap-4">
                <div>
                  <img src={Img1} alt="Icon1" />
                </div>
                <div className="flex gap-1">
                  <img src={Img2} alt="Icon2" />
                  <div>1</div>
                </div>
                <div className="flex gap-1">
                  <img src={Img3} alt="Icon3" />
                  <div>1</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
