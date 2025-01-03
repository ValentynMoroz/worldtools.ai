import SupportForm from './SupportForm';

const Support = () => {
  return (
    <section className="py-[16px] md:py-16 xl:py-[212px] relative overflow-hidden">
      <div
        className="  absolute top-0 xl:top-[-85px] left-0 w-[270px] md:w-[400px] lg:w-[500px] xl:w-[750px]  2xl:w-[950px] h-[500px]   2xl:h-[650px] z-[-1]"
        style={{
          backgroundImage:
            'radial-gradient( ellipse at  top left, rgba(0, 37, 206, 0.7) 10%, transparent 70%  )',
        }}
      ></div>
      <div
        className=" absolute top-[0px] md:top-[0px] right-[-100px] w-[400px] md:w-[600px] lg:w-[800px] xl:w-[1100px] 2xl:w-[1500px] h-[600px]  z-[-1]"
        style={{
          backgroundImage:
            'radial-gradient( ellipse at  top right,#2CABEB 10%, rgba(0, 37, 206, 0.7) 35%, transparent 70%  )',
        }}
      ></div>
      <div className="container items-center md:flex  lg:justify-between flex-col xl:flex-row justify-center ">
        <div className="w-full xl:w-[456px] 2xl:w-[654px]">
          <h2 className="text-[32px] md:text-[48px] lg:text-[64px] font-semibold text-left">
            Get in Touch with Us
          </h2>
          <p className="font-[16px] text-cardsText text-center md:w-[70%] lg:w-full mx-auto xl:text-left">
            Have a question, need support, or interested in partnering? Fill out
            the form below, and our team will reach out promptly. We're here to
            make sure you have all the answers and support you need!
          </p>
        </div>
        <SupportForm />
      </div>
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
    </section>
  );
};

export default Support;
