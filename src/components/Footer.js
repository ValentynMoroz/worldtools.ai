import { Link } from 'react-router-dom';

const Footer = () => {
  //
  //
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="py-16">
      <div className="container md:flex justify-between">
        <div className="flex flex-col justify-center md:justify-start  items-center  md:items-start gap-4">
          <div className="flex items-center gap-1">
            <svg
              width={24}
              height={24}
              className="flex justify-center items-center w-6 h-6 bg-input rounded-[6px]"
            >
              <use
                width={24}
                height={24}
                href="./image/icons.svg#icon-logo"
              ></use>
            </svg>
            <Link
              // onClick={() => setIsOpen(false)}
              to="/"
              className="text-[17px] font-bold"
            >
              worldtools.ai
            </Link>
          </div>
          <div>
            <p className="w-[300px] text-center text-cardsText md:text-left xl:w-auto">
              <span data-nosnippet>
                {' '}
                Ineffaceable Enterprises, Las Vegas Nevada, 89169
              </span>
            </p>
            <p className="w-[300px] text-center text-cardsText md:text-left xl:w-auto">
              All rights reserved. © 2024 worldtools.ai
            </p>
          </div>
        </div>
        <div className="flex justify-around max-md:justify-between gap-[16px] lg:gap-[64px] mt-8 md:m-0">
          <div>
            <h5 className="font-bold text-[17px]">Explore</h5>
            <ul className="flex flex-col mt-2 text-[17px] text-cardsText gap-2 ">
              <li className="cursor-pointer hover:text-border transition-all duration-500">
                <Link onClick={handleClick} to="/">
                  Home
                </Link>
              </li>
              <li className="cursor-pointer hover:text-border transition-all duration-500">
                <Link to="pricing">Pricing</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-[17px]">Categories</h5>
            <ul className="flex flex-col mt-2 text-[17px] text-cardsText gap-2">
              <li className="cursor-pointer hover:text-border transition-all duration-500">
                {' '}
                <Link to="/#productivity">Productivity AI</Link>
              </li>
              <li className="cursor-pointer hover:text-border transition-all duration-500">
                {' '}
                <Link to="/#tech">Tech AI</Link>
              </li>
              <li className="cursor-pointer hover:text-border transition-all duration-500">
                {' '}
                <Link to="/#finance">Finance AI</Link>
              </li>
              <li className="cursor-pointer hover:text-border transition-all duration-500">
                {' '}
                <Link
                  to="/#education"
                  className=" hover:text-border transition-all duration-500"
                >
                  Education AI
                </Link>
              </li>
              <li className="cursor-pointer hover:text-border transition-all duration-500">
                {' '}
                <Link to="/#analytics">Analytics AI</Link>
              </li>
              <li className="cursor-pointer hover:text-border transition-all duration-500">
                <Link to="/#marketing">Marketing AI</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-[17px]">Legal</h5>
            <ul className="flex flex-col mt-2  text-[17px] text-cardsText gap-2 ">
              <li className="cursor-pointer hover:text-border transition-all duration-500">
                <Link to={'terms'}>Terms</Link>{' '}
              </li>
              <li className="cursor-pointer hover:text-border transition-all duration-500">
                <Link to={'cookies'}>Cookies</Link>
              </li>
              <li className="cursor-pointer hover:text-border transition-all duration-500">
                <Link to={'policy'}>Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
