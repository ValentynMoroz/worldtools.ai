import { auth } from 'api/auth';
import InputModal from './InputModal';
import { login } from 'api/login';
import { useState } from 'react';
import { validationAuthSchema } from 'shemas/shemas';
import { setBearerToken } from 'components/Header';
import toast from 'react-hot-toast';

const AuthModal = ({ openModal, setToken, closeModal, setUserData }) => {
  const [errors, setErrors] = useState({});

  const onAuthSubmit = async evt => {
    evt.preventDefault();

    const data = {
      firstName: evt.target.firstName.value.trim(),
      lastName: evt.target.lastName.value.trim(),
      email: evt.target.email.value.trim(),
      password: evt.target.password.value.trim(),
    };

    if (!data.email || !data.password || !data.firstName || !data.lastName) {
      toast.error('Please fill in both fields.');
    }

    try {
      await validationAuthSchema.validate(data, {
        abortEarly: false,
      });
      setErrors({});
      const userData = await auth(data);

      if (userData?.user?.email) {
        const userDataLogin = await login({
          email: userData.user.email,
          password: data.password,
        });
        setUserData({
          firstName: userDataLogin.user.firstName,
          lastName: userDataLogin.user.lastName,
          email: userDataLogin.user.email,
        });

        setToken(userDataLogin.token);
        localStorage.setItem('token', userDataLogin.token);

        setBearerToken(userDataLogin.token);
        evt.target.reset();
        closeModal();
        toast.success('Successful login!');
      }
    } catch (err) {
      if (err.name === 'ValidationError') {
        const newErrors = {};
        err.inner.forEach(validationError => {
          newErrors[validationError.path] = validationError.message;
        });
        setErrors(newErrors);
      } else {
        toast.error(
          err.response?.data?.message ||
            'Something went wrong. Please try again.'
        );
      }
    } finally {
    }
  };

  return (
    <div className="w-[100%] pb-20 h-[90vh] fixed bg-black bg-opacity-60 backdrop-blur-md overflow-y-auto scrollbar-none">
      <div className="absolute w-[358px] md:w-[600px] border border-modalBorder bg-cardsTransparent p-6 rounded-xl top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] max-h-[80vh] scrollbar-none overflow-y-auto">
        <button
          onClick={() => {
            console.log('object');
            closeModal();
          }}
          className=" cursor-pointer absolute right-[12px] top-3 bg-transparent group "
        >
          <svg
            width={24}
            height={24}
            className="flex transition-all duration-300 fill-white p-2 justify-center items-center w-8 h-8  rounded-[6px] pointer-events-none group-hover:scale-[1.15]"
          >
            <use
              width={14}
              height={14}
              href="./image/icons.svg#icon-close"
            ></use>
          </svg>
        </button>{' '}
        <h3 className="font-semibold text-[24px] text-center">
          Sign Up Account
        </h3>
        <p className="text-[16px] text-pricingText text-center mt-2">
          Enter your personal data to create your account.
        </p>
        <button className="cursor-pointer w-full py-3 border  bg-input rounded-xl border-cardsTransparent mt-4 flex items-center gap-2 justify-center hover:bg-modalBorder transition-all duration-300 ease-linear">
          <svg
            width={20}
            height={20}
            className="flex justify-center items-center w-5 h-5  rounded-[6px]"
          >
            <use
              width={20}
              height={20}
              href="./image/icons.svg#icon-google"
            ></use>
          </svg>
          Continue with Google
        </button>
        <p className="mt-4 text-center flex items-center  justify-between before:block before:content-['']  before:w-[250px] before:h-[1px] before:bg-whiteAfter after:block after:content-['']  after:w-[250px] after:h-[1px] after:bg-whiteAfter ">
          or
        </p>
        <form onSubmit={onAuthSubmit} className=" mt-4  ">
          <div className="flex gap-4 flex-col md:flex-row ">
            <InputModal
              type={'text'}
              name={'firstName'}
              styles={'w-full md:w-[268px]'}
              value={'Michael'}
              labelText={'First name'}
              err={errors.firstName}
            />
            <InputModal
              type={'text'}
              name={'lastName'}
              styles={'w-full md:w-[268px]'}
              value={'Smith'}
              labelText={'Last name'}
              err={errors.lastName}
            />
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <InputModal
              type={'email'}
              name={'email'}
              value={'example@getmyhelp.com'}
              labelText={'Email'}
              styles={'w-full'}
              err={errors.email}
            />
            <InputModal
              type={'password'}
              name={'password'}
              styles={'w-full'}
              value={'mg20uzowo6c7cexh3qsd'}
              labelText={'Password'}
              err={errors.password}
            />
          </div>
          <button className="cursor-pointer mt-10 bg-white rounded-xl text-black text-[14px] w-full py-3 hover:bg-[#CECECE]">
            Get Started
          </button>
          <div className="flex justify-center mt-4">
            <p className="text-[14px] text-cardsText">
              Already have an account?
            </p>
            <p
              onClick={() => {
                openModal('loginModal');
                // setIsOpen(false);
              }}
              className="text-[#008CFF] relative text-[14px] ml-1 cursor-pointer transition-all duration-300 ease-linear hover:text-[#0044ff] after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-[#008CFF] after:bottom-[4px] after:left-0"
            >
              {' '}
              Sign in
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;
