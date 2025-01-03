import { Link } from 'react-router-dom';

const CategoriesModal = ({ setOpenCategories }) => {
  return (
    <div
      onMouseEnter={() => setOpenCategories(true)}
      onMouseLeave={() => setOpenCategories(false)}
      onClick={() => setOpenCategories(false)}
      className="absolute left-1/2 translate-x-[-200px] w-[400px] bg-blackTransparent p-6"
    >
      <h4 className="font-semibold text-[24px] text-white">Categories</h4>
      <ul className="flex flex-wrap justify-between gap-y-4 mt-4 text-white ">
        <li className="flex gap-[6px] w-[168px] items-center cursor-pointer hover:text-[#CECECE] transition-all duration-300 ease-in-out">
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
          <Link to="/#productivity">Productivity</Link>
        </li>
        <li className="flex gap-[6px] w-[168px] items-center hover:text-[#CECECE] transition-all duration-300 ease-in-out">
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
          <Link to="/#tech">Tech</Link>
        </li>
        <li className="flex gap-[6px] w-[168px] items-center hover:text-[#CECECE] transition-all duration-300 ease-in-out">
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
          <Link to="/#finance">Finance</Link>
        </li>
        <li className="flex gap-[6px] w-[168px] items-center hover:text-[#CECECE] transition-all duration-300 ease-in-out">
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
          <Link to="/#education">Education</Link>
        </li>
        <li className="flex gap-[6px] w-[168px] items-center hover:text-[#CECECE] transition-all duration-300 ease-in-out">
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
          <Link to="/#analytics">Analytics</Link>
        </li>
        <li className="flex gap-[6px] w-[168px] items-center hover:text-[#CECECE] transition-all duration-300 ease-in-out">
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
          <Link to="/#marketing">Marketing</Link>
        </li>
      </ul>
    </div>
  );
};

export default CategoriesModal;
