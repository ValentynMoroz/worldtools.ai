import { Link } from 'react-router-dom';
import MobileMenu from './modals/MobileMenu';
import { useEffect, useState } from 'react';
import SignIn from './modals/SignIn';
import AuthModal from './modals/AuthModal';
import ProfileModal from './modals/ProfileModal';
import axios from 'axios';
import useModal from 'hooks/modalHook';
import { logout } from 'api/logout';
import { eventEmitter2 } from 'helpers/eventEmitter';
import toast from 'react-hot-toast';
import CategoriesModal from './modals/CategoriesModal';
import { currentUser } from 'api/currentUser';
export const setBearerToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  console.log('Bearer Token Set:', axios.defaults.headers.common.Authorization);
};

setBearerToken(localStorage.getItem('token'));
const Header = () => {
  const { openModal, closeModal, isModalOpen, isOpening } = useModal();

  const [userData, setUserData] = useState({});
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [isOpen, setIsOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [openCategories, setOpenCategories] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpenProfile, setIsOpenProfile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const clickProfile = async () => {
    if (userData?.firstName) {
      return;
    }
    try {
      const data = await currentUser();
      setUserData({ ...data });
      console.log(data);
    } catch (error) {
      console.log('Error fetching user data:', error);
    }
  };

  const handleClick = e => {
    setIsOpen(!isOpen);
  };

  const logoutUser = async () => {
    await logout();
    setToken('');
    localStorage.removeItem('token');
    setOpenProfile(false);
  };

  const handleOpenProfile = () => {
    if (!document.body.classList.contains('overflow-hidden-body')) {
      document.body.classList.add('overflow-hidden-body');
    }

    setOpenProfile(!openProfile);
  };

  useEffect(() => {
    const handleStart = () => {
      openModal('loginModal');
    };

    eventEmitter2.on('start', handleStart);

    return () => {
      eventEmitter2.off('start', handleStart);
    };
  }, [openModal]);

  return (
    <header
      className={` sticky-element sticky top-0     z-50 ${
        isOpening || isOpen ? 'bg-blackTransparent' : ''
      }  ${isScrolled ? 'bg-blackTransparent' : ''} `}
    >
      <div
        className={` pt-[16px] pb-[16px] flex justify-between items-center   pl-6 pr-6 bg-opacity-80 backdrop-blur-lg`}
      >
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
            onClick={() => setIsOpen(false)}
            to="/"
            className="text-[17px] font-bold"
          >
            worldtools.ai
          </Link>
        </div>
        <ul className="hidden md:flex text-whiteTransparent text-[14px] gap-4">
          <li>
            <div
              className="flex items-center gap-1"
              onMouseEnter={() => setOpenCategories(true)}
              onMouseLeave={() => setOpenCategories(false)}
            >
              <p className="hover:text-white cursor-pointer">AI Categories</p>
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
            </div>
            {openCategories && (
              <CategoriesModal setOpenCategories={setOpenCategories} />
            )}
            {/* <div></div> */}
          </li>
          <Link
            onClick={() => {
              if (!token) {
                toast('You need to log in!');
              }
            }}
            to={`${token ? '/chat' : ''}`}
            className="hover:text-white cursor-pointer"
          >
            Chat
          </Link>
          <Link to="pricing" className="hover:text-white cursor-pointer">
            Pricing
          </Link>
        </ul>
        {token ? (
          <div
            // onMouseEnter={() => setIsOpenProfile(true)}
            // onMouseLeave={() => setIsOpenProfile(false)}
            className="hidden md:flex gap-1 flex-col relative"
          >
            <div className="hidden md:flex gap-1 items-center">
              <div className="bg-input p-3 rounded-2xl">
                {' '}
                <img className="w-6" alt="avt" src="./image/icon-people.png" />
              </div>
              <div
                className="flex items-center gap-1"
                onClick={() => {
                  setIsOpenProfile(!isOpenProfile);
                  clickProfile();
                }}
              >
                <p
                  className=" cursor-pointer pointer-events-none "
                  // onClick={clickProfile}
                >
                  Profile
                </p>
                <svg
                  width={16}
                  height={12}
                  className="flex justify-center items-center  rounded-[6px] pointer-events-none"
                >
                  <use
                    width={12}
                    height={12}
                    href="./image/icons.svg#icon-Arrow"
                  ></use>
                </svg>
              </div>

              <div
                className={`absolute top-[130%] right-[-12px] z-[50] transform transition-all duration-300 ease-in-out w-[159px] rounded-2xl bg-profileWindow py-6 justify-center items-center flex flex-col gap-4 border border-modalBorder border-t-transparent  ${
                  isOpenProfile
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
              >
                <div className="flex gap-[6px]">
                  <svg
                    width={24}
                    height={24}
                    className="flex justify-center items-center w-6 h-6 bg-input rounded-[6px]"
                  >
                    <use
                      width={24}
                      height={24}
                      href="./image/icons.svg#icon-settings-bold"
                    ></use>
                  </svg>
                  <p
                    className=" cursor-pointer"
                    onClick={() => {
                      handleOpenProfile();
                      setIsOpenProfile(false);
                    }}
                  >
                    Settings
                  </p>
                </div>
                <div className="flex gap-[6px]">
                  <div>
                    {' '}
                    <svg
                      width={24}
                      height={24}
                      className="flex justify-center items-center w-6 h-6 bg-input rounded-[6px]"
                    >
                      <use
                        width={24}
                        height={24}
                        href="./image/icons.svg#icon-logout"
                      ></use>
                    </svg>
                  </div>
                  <p
                    className=" cursor-pointer text-[#FF3D00]"
                    onClick={logoutUser}
                  >
                    Log out
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <ul className="hidden md:flex gap-4 text-[16px] items-center">
            <li>
              <button
                onClick={() => {
                  openModal('loginModal');
                  document.body.classList.add('overflow-hidden-body');
                }}
                className="text-[16px] hover:text-[#CECECE] transition-all duration-300 ease-in-out"
              >
                Sign In
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  openModal('authModal');
                  document.body.classList.add('overflow-hidden-body');
                }}
                className="text-[16px] bg-white text-black rounded-xl py-3 px-4 font-medium hover:bg-[#CECECE] transition-all duration-300 ease-in-out"
              >
                Sign Up
              </button>
            </li>
          </ul>
        )}
        <button className="md:hidden" onClick={handleClick}>
          <svg
            width={24}
            height={24}
            className="flex  justify-center items-center   rounded-[6px]"
          >
            <use
              width={24}
              height={24}
              href="./image/icons.svg#icon-burger"
            ></use>
          </svg>
        </button>
      </div>
      <MobileMenu
        logout={logoutUser}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        setToken={setToken}
        isOpenProfile={isOpenProfile}
      >
        {token ? (
          <div className="mt-4 relative">
            <div
              className="flex items-center gap-1 "
              onClick={() => {
                setIsOpenProfile(!isOpenProfile);
                clickProfile();
              }}
            >
              <p
                className=" cursor-pointer pointer-events-none"
                // onClick={clickProfile}
              >
                Profile
              </p>
              <svg
                width={16}
                height={12}
                className="flex justify-center items-center  rounded-[6px] pointer-events-none"
              >
                <use
                  width={12}
                  height={12}
                  href="./image/icons.svg#icon-Arrow"
                ></use>
              </svg>
            </div>
            <div
              className={`absolute top-10 left-0 z-[50] transform transition-all duration-300 ease-in-out w-[159px] rounded-2xl  justify-center flex flex-col gap-4  ${
                isOpenProfile
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
            >
              <div className="flex gap-[6px]">
                <svg
                  width={24}
                  height={24}
                  className="flex justify-center items-center w-6 h-6 bg-input rounded-[6px]"
                >
                  <use
                    width={24}
                    height={24}
                    href="./image/icons.svg#icon-settings-bold"
                  ></use>
                </svg>
                <p
                  className=" cursor-pointer"
                  onClick={() => {
                    handleOpenProfile();
                    setIsOpen(false);
                  }}
                >
                  Settings
                </p>
              </div>
              <div className="flex gap-[6px] ">
                <div>
                  {' '}
                  <svg
                    width={24}
                    height={24}
                    className="flex justify-center items-center w-6 h-6 bg-input rounded-[6px]"
                  >
                    <use
                      width={24}
                      height={24}
                      href="./image/icons.svg#icon-logout"
                    ></use>
                  </svg>
                </div>
                <p
                  className="text-[16px] cursor-pointer text-[#FF3D00]"
                  onClick={logoutUser}
                >
                  Log out
                </p>
              </div>
            </div>
          </div>
        ) : (
          <ul className="mt-4 flex gap-4 text-[16px] items-center justify-between">
            <li>
              <button
                onClick={() => {
                  openModal('loginModal');
                  setIsOpen(false);
                  document.body.classList.add('overflow-hidden-body');
                }}
                className="text-[16px] w-[120px]  sm:w-[163px]"
              >
                Sing In
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  openModal('authModal');
                  setIsOpen(false);
                  document.body.classList.add('overflow-hidden-body');
                }}
                className="text-[16px] w-[120px]  sm:w-[163px] hover:bg-[#CECECE] transition-all duration-300 ease-in-out bg-white text-black rounded-xl py-3 font-medium"
              >
                Sing Up
              </button>
            </li>
          </ul>
        )}
      </MobileMenu>
      {isModalOpen('loginModal') && (
        <SignIn
          setToken={setToken}
          openModal={openModal}
          closeModal={closeModal}
          setUserData={setUserData}
        />
      )}
      {isModalOpen('authModal') && (
        <AuthModal
          setUserData={setUserData}
          closeModal={closeModal}
          openModal={openModal}
          setToken={setToken}
        />
      )}
      <ProfileModal
        setOpenProfile={setOpenProfile}
        isOpen={openProfile}
        data={userData}
      />
    </header>
  );
};

export default Header;
