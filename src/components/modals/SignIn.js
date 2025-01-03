import { useState } from 'react';
import InputModal from './InputModal';

import { login } from 'api/login';
import { setBearerToken } from 'components/Header';
import { validationLoginSchema } from 'shemas/shemas';
import toast from 'react-hot-toast';

const SignIn = ({ setToken, openModal, closeModal, setUserData }) => {
  const [errors, setErrors] = useState({});
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    console.log(formValues);
  };

  // const handleClick = () => {
  //   setIsOpenSignIn(false);
  // };

  const onSubmit = async evt => {
    evt.preventDefault();
    const email = evt.target.email.value.trim();
    const password = evt.target.password.value.trim();

    if (!email || !password) {
      toast.error('Please fill in both fields.');
    }

    const data = { email, password };

    try {
      await validationLoginSchema.validate(data, { abortEarly: false });
      setErrors({});
      // console.log('Form submitted:', data);
      const userData = await login(data);
      setUserData({
        firstName: userData.user.firstName,
        lastName: userData.user.lastName,
        email: userData.user.email,
      });

      localStorage.setItem('token', userData.token);

      setToken(userData.token);
      setBearerToken(userData.token);
      closeModal();
      evt.target.reset();
      toast.success('Account created successfully!');
    } catch (err) {
      if (err.name === 'ValidationError') {
        const newErrors = {};
        err.inner.forEach(validationError => {
          newErrors[validationError.path] = validationError.message;
        });
        setErrors(newErrors);
      } else {
        toast(
          err.response?.data?.message ||
            'Something went wrong. Please try again.'
        );
      }
    }
  };

  return (
    <div
      className={`w-[100%] pb-[50px]  h-[100vh] fixed bg-black bg-opacity-60 backdrop-blur-md flex justify-center items-center overflow-y-auto`}
    >
      <div className="relative w-[358px] md:w-[600px] border border-modalBorder bg-cardsTransparent p-6 rounded-xl max-h-[80vh] overflow-y-auto">
        {' '}
        <button
          onClick={closeModal}
          className="cursor-pointer absolute right-[12px] top-3 bg-transparent  group"
        >
          <svg
            width={24}
            height={24}
            className="flex p-2 fill-white justify-center items-center w-8 h-8  rounded-[6px] pointer-events-none transition-all duration-300 group-hover:scale-[1.15]"
          >
            <use
              width={14}
              height={14}
              href="./image/icons.svg#icon-close"
            ></use>
          </svg>
        </button>{' '}
        <h3 className="font-semibold text-[24px] text-center">
          Sign In Account
        </h3>
        <p className="text-[16px] text-pricingText text-center mt-2">
          Enter your personal data to login your account.
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
        <form onSubmit={onSubmit} className=" mt-4  ">
          <div className="flex flex-col gap-4 mt-4">
            <div>
              <InputModal
                type={'email'}
                name={'email'}
                value={'example@getmyhelp.com'}
                labelText={'Email'}
                styleList={'w-full'}
                handleChange={handleChange}
                err={errors.email}
              />
            </div>
            <div className="relative">
              <InputModal
                type={'password'}
                err={errors.password}
                handleChange={handleChange}
                name={'password'}
                styleList={'w-full'}
                value={'mg20uzowo6c7cexh3qsd'}
                labelText={'Password'}
              />
            </div>
          </div>
          <button className="mt-10 bg-white rounded-xl text-black text-[14px] w-full py-3 hover:bg-[#CECECE]">
            Get Started
          </button>
          <div className="flex justify-center mt-4">
            <p className="text-[14px] text-cardsText">Don’t have an account?</p>
            <p
              onClick={() => {
                console.log(openModal);
                openModal('authModal');
              }}
              className="cursor-pointer relative text-[#008CFF] text-[14px] ml-1 transition-all duration-300 ease-linear hover:text-[#0044ff] after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-[#008CFF] after:bottom-[4px] after:left-0"
            >
              Sign up
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
