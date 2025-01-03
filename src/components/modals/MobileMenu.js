import { useState } from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = ({ isOpen, setIsOpen, isOpenProfile, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = e => {
    setIsVisible(!isVisible);
  };

  return (
    <div
      className={`z-50 fixed  bg-black overflow-y-auto pb-6 ${
        isVisible ? 'h-[556px]' : 'h-[200px]'
      } 
        ${
          isOpenProfile && isVisible
            ? 'h-[600px]'
            : isOpenProfile
            ? 'h-[270px]'
            : ''
        } 
      bg-opacity-50 backdrop-blur-2xl  w-full p-6 transition-all duration-500  ${
        !isOpen ? '-translate-x-full' : 'translate-x-0'
      }`}
    >
      <div className="absolute flex flex-col text-whiteTransparent text-[16px]  sm:max-w-[390px] ">
        <div className="flex gap-4 flex-col">
          <div className="flex  items-center gap-1 " onClick={handleClick}>
            <p>AI Categories</p>
            <svg
              width={16}
              height={12}
              className="flex justify-center items-center  rounded-[6px]"
            >
              <use
                width={12}
                height={12}
                href="./image/icons.svg#icon-Arrow"
              ></use>
            </svg>
          </div>{' '}
          <ul
            className={` overflow-hidden transition-all duration-500  flex  flex-col justify-between gap-y-4 ${
              isVisible ? 'max-h-[500px]' : 'max-h-0'
            } `}
          >
            <li className="flex gap-[6px] w-[168px] items-center">
              <svg
                width={40}
                height={40}
                className="flex p-2 justify-center items-center w-10 h-10 bg-input rounded-[6px]"
              >
                <use
                  width={24}
                  height={24}
                  href="./image/icons.svg#icon-Vector-1"
                ></use>
              </svg>
              <p className="text-[16px] cursor-pointer">Productivity</p>
            </li>
            <li className="flex gap-[6px] w-[168px] items-center">
              <svg
                width={40}
                height={40}
                className="flex p-2 justify-center items-center w-10 h-10 bg-input rounded-[6px]"
              >
                <use
                  width={24}
                  height={24}
                  href="./image/icons.svg#icon-Tech"
                ></use>
              </svg>
              <p className="text-[16px] cursor-pointer">Tech</p>
            </li>
            <li className="flex gap-[6px] w-[168px] items-center">
              <svg
                width={40}
                height={40}
                className="flex p-2 justify-center items-center w-10 h-10 bg-input rounded-[6px]"
              >
                <use
                  width={24}
                  height={24}
                  href="./image/icons.svg#icon-Finance"
                ></use>
              </svg>
              <p className="text-[16px] cursor-pointer">Finance</p>
            </li>
            <li className="flex gap-[6px] w-[168px] items-center">
              <svg
                width={40}
                height={40}
                className="flex p-2 justify-center items-center w-10 h-10 bg-input rounded-[6px]"
              >
                <use
                  width={24}
                  height={24}
                  href="./image/icons.svg#icon-Education"
                ></use>
              </svg>
              <p className="text-[16px] cursor-pointer">Education</p>
            </li>
            <li className="flex gap-[6px] w-[168px] items-center">
              <svg
                width={40}
                height={40}
                className="flex p-2 justify-center items-center w-10 h-10 bg-input rounded-[6px]"
              >
                <use
                  width={24}
                  height={24}
                  href="./image/icons.svg#icon-Analytics"
                ></use>
              </svg>
              <p className="text-[16px] cursor-pointer">Analytics</p>
            </li>
            <li className="flex gap-[6px] w-[168px] items-center mb-4">
              <svg
                width={40}
                height={40}
                className="flex p-2 justify-center items-center w-10 h-10 bg-input rounded-[6px]"
              >
                <use
                  width={24}
                  height={24}
                  href="./image/icons.svg#icon-Marketing"
                ></use>
              </svg>
              <p className="text-[16px] cursor-pointer">Marketing</p>
            </li>
          </ul>
        </div>
        <Link className="cursor-pointer" to="chat">
          Chat
        </Link>
        <Link
          onClick={() => {
            setIsOpen(false);
          }}
          className="mt-4 cursor-pointer "
          to="pricing"
        >
          Pricing
        </Link>
        {children}
      </div>
    </div>
  );
};

export default MobileMenu;
