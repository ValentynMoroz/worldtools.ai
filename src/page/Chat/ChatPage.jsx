import { currentUser } from 'api/currentUser';
import ProfileModal from 'components/modals/ProfileModal';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ChatPage = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const token = localStorage.getItem('token');
  useEffect(() => {
    async function fetchData() {
      const userData = await currentUser();
      console.log(userData);
      setData({
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        subscription: userData.subscription,
      });
      console.log(userData);
    }

    if (!token) {
      navigate('/'); // Перенаправлення
    } else {
      fetchData();
    }
  }, [token, navigate]);

  const handleClick = () => {
    console.log('gg');
    setOpenMenu(false);
    setOpen(true);
  };

  const handleOpenMobileMenu = () => {
    setOpenMenu(!openMenu);
  };

  return token ? (
    <div className="w-full h-screen   relative overflow-hidden">
      <div
        className="  absolute top-0 xl:top-[-85px] left-0 w-[270px] md:w-[370px] lg:w-[500px] xl:w-[750px]  2xl:w-[950px] h-[500px]    xl:h-[650px] z-[-1]"
        style={{
          backgroundImage:
            'radial-gradient( ellipse at  top left, #003cff77 10%, transparent 70%  )',
        }}
      ></div>
      <div
        className=" absolute top-[0px] md:top-[0px] right-[0px] w-[300px] md:w-[550px] lg:w-[800px] xl:w-[1000px] 2xl:w-[1200px] h-[600px] md:h-[720px] z-[-1]"
        style={{
          backgroundImage:
            'radial-gradient( ellipse at  top right, #2cabeb75 15%, #0026ce85 35%, transparent 70%  )',
        }}
      ></div>
      <div
        onClick={handleOpenMobileMenu}
        className="md:hidden py-4  flex border-b-[2px] border-b-pricingBorder "
      >
        <svg
          width={24}
          height={24}
          className="flex p-2 justify-center items-center w-10 h-10 bg-input rounded-[6px]  pointer-events-none"
        >
          <use
            width={24}
            height={24}
            href="./image/icons.svg#icon-burger"
          ></use>
        </svg>
        <div className="flex w-full justify-center items-center">
          <svg
            width={24}
            height={24}
            className="flex p-2 justify-center items-center w-10 h-10 bg-input rounded-[6px]"
          >
            <use
              width={24}
              height={24}
              href="./image/icons.svg#icon-logo"
            ></use>
          </svg>
          <Link to="/" className="text-[17px] text-white  font-bold ">
            worldtools.ai{' '}
          </Link>
        </div>
      </div>
      <div className="flex w-full h-[calc(100% - 81px)] ">
        <div className="hidden md:block w-[25%] p-4 h-screen bg-blackChat border-r-[2px] border-r-pricingBorder">
          {' '}
          <div className="flex items-center flex-col justify-between h-[100%]  ">
            <div className="flex gap-2 items-center">
              <svg
                width={24}
                height={24}
                className="flex p-2 justify-center items-center bg-transparent w-10 h-10  rounded-[6px]"
              >
                <use
                  width={24}
                  height={24}
                  href="./image/icons.svg#icon-logo"
                ></use>
              </svg>
              <Link to="/" className="text-[17px] font-bold">
                worldtools.ai{' '}
              </Link>
            </div>
            <div className="hidden md:flex gap-1 items-center ">
              <img className="w-4" alt="avt" src="./image/icon-people.png" />
              <p
                className="overflow-hidden text-ellipsis whitespace-nowrap"
                onClick={handleClick}
              >{`${data.firstName} ${data.lastName}`}</p>{' '}
              <svg
                width={20}
                height={20}
                className="flex justify-center items-center rounded-[6px]"
              >
                <use
                  width={20}
                  height={20}
                  href="./image/icons.svg#icon-Vector-13"
                ></use>
              </svg>
            </div>
          </div>
        </div>
        <div className="h-[94vh] md:h-[100vh] w-full md:w-[85%] flex flex-col justify-between py-8 relative items-center">
          <div className="w-[90%] md:w-[80%] lg:w-[70%] xl:w-[55%] 2xl:w-[40%] flex flex-col gap-2">
            <p className="text-left">
              Hey, Excel Assistant! I need some help organizing my sales data.
              Can you help?
            </p>
            <p className="text-right">
              Of course! I'd be happy to assist. What specifically would you
              like to do with your sales data? We could sort it by date,
              calculate totals, create charts, or even analyze trends!
            </p>
          </div>
          <form className="relative align-bottom flex justify-center w-[90%] md:w-[70%] 2xl:w-[664px] ">
            <input
              placeholder="Message"
              className="  p-4 bg-input rounded-xl border-[2px] border-transparent focus:border-white focus:outline-none font-medium placeholder-inputText text-white h-[56px] w-full "
            />
            <button className="absolute top-5 right-4">
              {' '}
              <svg
                width={24}
                height={24}
                className="flex justify-center items-center w-6 h-6 bg-transparent rounded-[6px]"
              >
                <use
                  width={20}
                  height={20}
                  href="./image/icons.svg#icon-Vector-12"
                ></use>
              </svg>
            </button>
          </form>
        </div>
        <ProfileModal
          data={data}
          isOpen={open}
          setOpenProfile={setOpen}
          className={'z-[10] top-[0px]'}
        />
        <div
          className=" absolute bottom-0 xl:bottom-[-150px] 2xl:bottom-[-200px] left-0 -[40px] md:w-[80px] xl:w-[250px]  h-[60px] md:h-[100px] xl:h-[300px]  z-[-1]  "
          style={{
            backgroundImage:
              'radial-gradient( ellipse at  bottom left, #00EAFF 1%, transparent 70%  )',
          }}
        ></div>
        <div
          className=" absolute bottom-[-180px] md:bottom-[-170px] lg:bottom-[-200px] xl:bottom-[-230px] 2xl:bottom-[-270px]  left-[-20px] md:left-[-70px] 2xl:left-[-130px] w-[250px] md:w-[500px] xl:w-[700px] 2xl:w-[950px] h-[300px] lg:h-[400px] 2xl:h-[450px] z-[-1]  "
          style={{
            backgroundImage:
              'radial-gradient( ellipse,  rgba(0, 37, 206, 0.5) 1%, transparent 70%  )',
          }}
        ></div>
        <div
          className=" absolute bottom-[-170px] md:bottom-[-210px] lg:bottom-[-150px]  right-[-70px]  w-[350px] md:w-[600px] lg:w-[800px] 2xl:w-[1000px] h-[300px]  z-[-1]"
          style={{
            backgroundImage:
              'radial-gradient( ellipse ,rgba(0, 37, 206, 0.5) 1%, transparent 70%  )',
          }}
        ></div>
        <div
          className=" absolute bottom-[-75px]  right-0  w-[200px] 2xl:w-[250px] h-[150px]  2xl:h-[200px] z-[-1]  "
          style={{
            backgroundImage:
              'radial-gradient( ellipse at  bottom right, rgba(44, 171, 235, 0.7) 1%, transparent 70%  )',
          }}
        ></div>
      </div>
      <div
        className={`z-50 h-screen  fixed top-[74px] bg-black    bg-opacity-50 backdrop-blur-[6px]  w-full  transition-all duration-500  ${
          !openMenu ? '-translate-x-full' : 'translate-x-0'
        }`}
      >
        <div className="absolute w-[253px] flex flex-col text-whiteTransparent h-screen border-r-[2px] border-r-pricingBorder  pb-4 bg-blackChat">
          <div className="flex flex-col justify-between h-[calc(100vh-74px)]">
            <div className="flex gap-1 items-center">
              <svg
                width={24}
                height={24}
                className="flex p-2 justify-center items-center w-10 h-10 bg-input rounded-[6px]"
              >
                <use
                  width={24}
                  height={24}
                  href="./image/icons.svg#icon-logo"
                ></use>
              </svg>
              <Link to="/" className="text-[17px] font-bold text-white">
                worldtools.ai{' '}
              </Link>
            </div>
            <div className="flex gap-1 items-center border-y-[2px] border-y-pricingBorder p-4 justify-between">
              <div>
                <img className="w-4" alt="avt" src="./image/icon-people.png" />
                <p
                  className="overflow-hidden text-ellipsis whitespace-nowrap"
                  onClick={handleClick}
                >{`${data.firstName} ${data.lastName}`}</p>
              </div>
              <svg
                width={16}
                height={12}
                className="flex justify-center items-center rounded-[6px]"
              >
                <use
                  width={12}
                  height={12}
                  href="./image/icons.svg#icon-Vector-13"
                ></use>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <p className="text-red-600 text-center mt-5 ">Loading...</p>
  );
};

export default ChatPage;
