import React from "react";
import { useState } from "react";
import "../assets/css/LeftNav.css";
function LeftNav() {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Dashboard" },
    // { title: "Inbox", src: "Chat" },
    { title: "Signatures", src: "signature" },
    // { title: "Schedule ", src: "Calendar" },
    // { title: "Search", src: "Search" },
    // { title: "Analytics", src: "Chart" },
    { title: "Documents ", src: "document" },
    { title: "Setting", src: "settings" },
  ];
  return (
    <div>
      <div
        className={` ${
          open ? "w-60" : "w-20 "
        } bg-white h-screen p-5  pt-5 relative duration-300 leftNavContainer z-10`}
      >
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-12  w-7 border-dark-purple
           rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center p-[5px]">
          <img
            src="./src/assets/logo1.png"
            className={`cursor-pointer w-[30px] duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-black origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Angootha
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-gray-100 text-black-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-3"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img
                src={`./src/assets/${Menu.src}.png`}
                className="w-[22px] opacity-60 "
              />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 text-[14px]`}
              >
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LeftNav;
