import { currentUser } from 'api/currentUser';
import { eventEmitter2 } from 'helpers/eventEmitter';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ModalAI = ({ data, setVisible, setOpenBuyPremium }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const scrollPosition = parseInt(document.body.style.top || '0', 10) * -1;

    document.body.classList.remove('overflow-hidden-body');
    document.body.style.top = '';
    window.scrollTo(0, scrollPosition);

    setVisible(false);
  };

  const handleClickStartChat = async e => {
    try {
      const userData = await currentUser();
      if (!userData || !userData.subscription) {
        console.error("Invalid user data or missing 'subscription'");
        return;
      }

      if (userData.subscription !== 'none') {
        navigate('/chat');
      } else {
        setVisible(false);
        setOpenBuyPremium(true);
      }
    } catch (err) {
      setVisible(false);
      eventEmitter2.emit('start');
      const scrollPosition = parseInt(document.body.style.top || '0', 10) * -1;

      document.body.classList.remove('overflow-hidden-body');
      document.body.style.top = '';
      window.scrollTo(0, scrollPosition);
      toast('You need to log in!');
    }
  };

  return (
    <div className="z-[10]  w-[100%] h-[100vh]  fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex justify-center items-center overflow-auto scrollbar-none">
      <div className=" overflow-auto  z-10 relative sm:w-[358px] md:w-[600px] border border-modalBorder bg-cardsTransparent p-6 rounded-xl h-[70vh] scrollbar-none">
        <button
          onClick={handleClick}
          className="cursor-pointer absolute right-[16px] top-4 bg-transparent hover:scale-[1.15]  transition-all duration-300 ease-in-out"
        >
          <svg
            width={24}
            height={24}
            className="flex p-2 justify-center items-center w-8 h-8  rounded-[6px] pointer-events-none fill-white"
          >
            <use
              width={14}
              height={14}
              href="./image/icons.svg#icon-close"
            ></use>
          </svg>
        </button>
        <div className="flex flex-col justify-center items-center">
          <img src={data.photo} alt="AI" width={'48'} height={'48'} />
          <h4 className="font-semibold text-[18px] mt-2">{data.name}</h4>
          <p className="text-[14px] text-cardsText mt-2 text-center">
            {data.text}
          </p>
        </div>
        <ul className="flex  justify-around mt-4">
          <li className=" flex flex-col items-center">
            <div className="flex gap-1 items-center">
              <svg
                width={24}
                height={24}
                className="flex  justify-center items-center w-[24px] h-[24px]  rounded-[6px]"
              >
                <use
                  width={24}
                  height={24}
                  href="./image/icons.svg#icon-solar_star-shine"
                ></use>
              </svg>
              <p className="font-semibold text-[20px] ">4.4</p>
            </div>
            <p className="text-[14px] text-pricingText">Average Rating</p>
          </li>

          <li className=" flex flex-col items-center">
            <div className="flex gap-1 items-center">
              <svg
                width={18}
                height={18}
                className="flex  justify-center items-center w-[18px] h-[18px] rounded-[6px]"
              >
                <use
                  width={18}
                  height={18}
                  href="./image/icons.svg#icon-ph_eye-fill"
                ></use>
              </svg>
              <p className="font-semibold text-[20px] ">743</p>
            </div>
            <p className="text-[14px] text-pricingText">Views</p>
          </li>
          <li className=" flex flex-col items-center">
            <div className="flex gap-1 items-center">
              <svg
                width={20}
                height={20}
                className="flex  justify-center items-center w-[20px] h-[20px]  rounded-[6px]"
              >
                <use
                  width={20}
                  height={20}
                  href="./image/icons.svg#icon-mage_users"
                ></use>
              </svg>
              <p className="font-semibold text-[20px] ">371</p>
            </div>
            <p className="text-[14px] text-pricingText">Monthly Uses</p>
          </li>
        </ul>
        <div className="mt-4">
          <p className="font-semibold text-[18px]">Features</p>
          <ul className="mt-1">
            <li className="flex gap-2  items-start">
              <svg
                width={18}
                height={18}
                className="flex  justify-center items-center w-[18px] h-[18px]  rounded-[6px]"
              >
                <use
                  width={18}
                  height={18}
                  href="./image/icons.svg#icon-star"
                ></use>
              </svg>
              <div>
                <p className="text-[16px] text-pricingText">Instant help: </p>
                <p className="text-[14px] text-cardsText">
                  Automate processes and save time
                </p>
              </div>
            </li>
            <li className="mt-1 flex gap-2  items-start">
              <svg
                width={18}
                height={18}
                className="flex  justify-center items-center w-[18px] h-[18px]  rounded-[6px]"
              >
                <use
                  width={18}
                  height={18}
                  href="./image/icons.svg#icon-star"
                ></use>
              </svg>
              <div>
                <p className="text-[16px] text-pricingText">
                  Intelligent solutions:{' '}
                </p>
                <p className="text-[14px] text-cardsText">
                  Quickly adapts to your tasks
                </p>
              </div>
            </li>
            <li className="mt-1 flex gap-2  items-start">
              <svg
                width={18}
                height={18}
                className="flex  justify-center items-center w-[18px] h-[18px]  rounded-[6px]"
              >
                <use
                  width={18}
                  height={18}
                  href="./image/icons.svg#icon-star"
                ></use>
              </svg>
              <div>
                <p className="text-[16px] text-pricingText">High accuracy: </p>
                <p className="text-[14px] text-cardsText">
                  Reduces the likelihood of errors and improves the quality of
                  work
                </p>
              </div>
            </li>
          </ul>
        </div>
        <button
          onClick={handleClickStartChat}
          className="bg-white text-black rounded-xl w-[100%] py-3 text-center mt-4 hover:bg-[#CECECE] transition-all duration-300 ease-in-out"
        >
          Start Chat
        </button>
      </div>
    </div>
  );
};

export default ModalAI;
