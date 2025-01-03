import AnnualPlan from 'components/Plans/AnnualPlan';
import MonthlyPlan from 'components/Plans/MonthlyPlan';
import QuarterlyPlan from 'components/Plans/QuarterlyPlan';
import { useEffect } from 'react';

const PricingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="pb-[60px] overflow-hidden">
      <div className="px-4 md:px-8 ">
        <div
          className="  absolute top-[-85px] left-0 w-[300px] md:w-[400px] lg:w-[500px] xl:w-[800px] 2xl:w-[1100px] h-[500px] 2xl:h-[700px] z-[-1]"
          style={{
            backgroundImage:
              'radial-gradient( ellipse at  top left, #003CFF 10%, transparent 70%  )',
          }}
        ></div>
        <div
          className=" absolute top-[-205px] right-0 w-[350px] md:w-[500px] lg:w-[800px] xl:w-[1100px] 2xl:w-[1500px] h-[800px] 2xl:h-[880px] z-[-1]"
          style={{
            backgroundImage:
              'radial-gradient( ellipse at  top right, #2CABEB 20%, #0025CE 35%, transparent 70%  )',
          }}
        ></div>
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="   block py-[6px] px-3 text-[15px] text-pricingText bg-input rounded-[100px] border border-pricingBorder">
            Bring your business to the best scale
          </p>
          <h2
            className=" text-[32px] text-center font-medium md:text-[64px]  bg-clip-text text-transparent "
            style={{
              backgroundImage:
                'linear-gradient(to bottom, #FFFFFF 35%, #AEBDFF)',
            }}
          >
            Discover Products <br /> With the Best Pricing
          </h2>
          <p className="text-center text-[16px]  text-pricingText lg:w-[821px]">
            Whether you need AI support for a month, a quarter, or a year, our
            plans offer full access to every AI model and feature, so you can
            work smarter and save time. Find the plan that’s right for you and
            start achieving more today!
          </p>
        </div>
        <div className=" overflow-hidden scrollbar-none mt-4 lg:mt-8 flex justify-center">
          <ul className="flex overflow-x-scroll overflow-auto scroll-smooth scroll-snap-x mandatory    gap-6 scrollbar-none">
            <MonthlyPlan />
            <QuarterlyPlan />
            <AnnualPlan />
          </ul>
        </div>{' '}
        <div className="relative w-[100vw]">
          <div
            className=" absolute bottom-[-60px] lg:bottom-[-223px] left-[-38px] w-[50px] 2xl:w-[550px] h-[50px] 2xl:h-[400px] z-[1]  "
            style={{
              backgroundImage:
                'radial-gradient( ellipse at  bottom left, #00eaffad 1%, transparent 70%  )',
            }}
          ></div>
          <div
            className=" absolute bottom-[-220px] lg:bottom-[-375px] left-[-220px] w-[350px] md:w-[600px]  2xl:w-[1250px] h-[300px]  lg:h-[550px] z-[-1]  "
            style={{
              backgroundImage:
                'radial-gradient( ellipse,  #0025CE 1%, transparent 70%  )',
            }}
          ></div>
          <div
            className=" absolute bottom-[-150px] lg:bottom-[-410px] right-[-226px] 2xl:right-[-210px] w-[600px] 2xl:w-[1500px] h-[200px] 2xl:h-[580px] z-[-1]"
            style={{
              backgroundImage:
                'radial-gradient( ellipse , #0025CE 1%, transparent 70%  )',
            }}
          ></div>
          <div
            className=" absolute bottom-[-63px] lg:bottom-[-548px] right-[-4px] lg:right-[-128px] w-[50px] 2xl:w-[550px] h-[50px] g:h-[400px] z-[-1]  "
            style={{
              backgroundImage:
                'radial-gradient( ellipse at  bottom right, #00EAFF 1%, transparent 70%  )',
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default PricingPage;
