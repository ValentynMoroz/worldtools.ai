const BuyPremiumModal = ({ setOpenBuyPremium }) => {
  // const [prise, setPrise] = useState('$40');

  // const handleClick = e => {
  //   console.dir(e.target.dataset.prise);
  //   setPrise(e.target.dataset.prise);
  // };

  return (
    <div className="z-10 overflow-auto  w-[100%] h-screen fixed top-10 left-0  bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center ">
      <div className=" overflow-auto max-h-[calc(100vh-150px)] w-[358px]  md:w-[600px] border border-modalBorder bg-cardsTransparent p-6 rounded-xl relative scrollbar-none">
        <button
          onClick={() => {
            setOpenBuyPremium(false);
            const scrollPosition =
              parseInt(document.body.style.top || '0', 10) * -1;

            document.body.classList.remove('overflow-hidden-body');
            document.body.style.top = '';
            window.scrollTo(0, scrollPosition);
          }}
          className="cursor-pointer absolute right-0 top-0 w-6 h-6 md:right-3 md:top-3 bg-transparent hover:scale-[1.15]  transition-all duration-300 ease-in-out"
        >
          <svg
            width={24}
            height={24}
            className="flex p-2 fill-white  justify-center items-center w-8 h-8  rounded-[6px] pointer-events-none"
          >
            <use
              width={14}
              height={14}
              href="./image/icons.svg#icon-close"
            ></use>
          </svg>
        </button>
        <h4 className="text-center font-semibold text-[24px]">
          Unlock Premium to Chat
        </h4>
        <p className="text-center text-pricingText text-[14px] mt-2">
          Get full access to our powerful AI tools and enhance your
          productivity!
        </p>
        <div className="overflow-hidden">
          <ul
            // onClick={handleClick}
            className="flex gap-[14px] mt-4 overflow-x-auto scroll-smooth snap-x snap-mandatory whitespace-nowrap scrollbar-none"
          >
            <li
              id="1"
              data-prise="$15"
              className="cursor-pointer flex-none w-[173px] h-[212px] border border-modalBorder rounded-2xl p-4 hover:bg-cardsHover transition-all duration-500 hover:border-white"
            >
              <p className="font-semibold text-[24px]">1 month</p>
              <p className="font-semibold text-[16px]">
                0.67 USD
                <span className="text-[12px] font-medium"> / per day</span>
              </p>
            </li>
            <li
              id="2"
              data-prise="$40"
              className="cursor-pointer flex-none w-[173px] h-[212px] border border-modalBorder rounded-2xl p-4 hover:bg-cardsHover transition-all duration-500 hover:border-white"
            >
              <p className="font-semibold text-[24px]">3 months</p>
              <p className="font-semibold text-[16px]">
                0.49 USD
                <span className="text-[12px] font-medium"> / per day</span>
              </p>
            </li>
            <li
              data-prise="$140"
              id="3"
              className="cursor-pointer flex-none w-[173px] h-[212px] border border-modalBorder rounded-2xl p-4 hover:bg-cardsHover transition-all duration-500 hover:border-white"
            >
              <p className="font-semibold text-[24px]">12 months</p>
              <p className="font-semibold text-[16px]">
                0.33 USD{' '}
                <span className="text-[12px] font-medium"> / per day</span>
              </p>
            </li>
          </ul>
        </div>

        <div className="mt-4">
          <p className="font-semibold text-[18px]">Features</p>
          <ul className="mt-1">
            <li>
              <p className="text-[16px] text-pricingText">
                Unlimited Access to All AI Models{' '}
              </p>
              <p className="text-[14px] text-cardsText">
                Use any AI tool at any time to tackle your tasks effortlessly{' '}
              </p>
            </li>
            <li className="mt-1">
              <p className="text-[16px] text-pricingText">Priority Support </p>
              <p className="text-[14px] text-cardsText">
                Get assistance whenever you need it, with priority support{' '}
              </p>
            </li>
            <li className="mt-1">
              <p className="text-[16px] text-pricingText">
                Regular Updates & New Models{' '}
              </p>
              <p className="text-[14px] text-cardsText">
                Access the latest AI tools as soon as they’re released, at no
                extra cost
              </p>
            </li>
          </ul>
        </div>
        <p className="text-[16px] text-pricingText mt-6">
          By proceeding with this purchase, you agree to our Terms of Service
          and acknowledge that all sales are final. Subscription renewals will
          be billed automatically unless canceled before the next billing cycle.
        </p>
        <button className="cursor-pointer bg-gradient-to-b from-[#0099FF] to-[#0066FF]  transition-all duration-300 hover:from-[#4BB7FF] hover:to-[#287EFF] text-black rounded-xl w-[100%] py-3 text-center mt-4">
          {` Continue`}
        </button>
      </div>
    </div>
  );
};

export default BuyPremiumModal;
