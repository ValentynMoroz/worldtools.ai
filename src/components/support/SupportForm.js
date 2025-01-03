import { validationSupportSchema } from 'shemas/shemas';
import SupportInput from './SupportInput';
import { useState } from 'react';
import toast from 'react-hot-toast';

const SupportForm = () => {
  const [errors, setErrors] = useState({});

  const handleSubmit = async evt => {
    evt.preventDefault();

    const data = {
      firstName: evt.target.firstName.value.trim(),
      lastName: evt.target.lastName.value.trim(),
      email: evt.target.email.value.trim(),
      company: evt.target.company.value.trim(),
      jobTitle: evt.target.jobTitle.value.trim(),
      country: evt.target.country.value.trim(),
      text: evt.target.text.value.trim(),
    };

    try {
      await validationSupportSchema.validate(data, { abortEarly: false });
      setErrors({});
      // const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      // const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      // const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

      // if (!serviceID || !templateID || !publicKey) {
      //   throw new Error('Налаштування EmailJS відсутні.');
      // }

      // await emailjs.send(
      //   serviceID,
      //   templateID,
      //   {
      //     from_name: `${data.firstName} ${data.lastName}`,
      //     from_email: data.email,
      //     reply_to: data.email,
      //     ...data,
      //   },
      //   publicKey
      // );

      toast.success('The message was sent successfully!');
      evt.target.reset();
    } catch (err) {
      if (err.name === 'ValidationError') {
        const newErrors = {};
        err.inner.forEach(validationError => {
          newErrors[validationError.path] = validationError.message;
        });
        setErrors(newErrors);
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 w-full md:p-6 bg-cardsTransparent border border-modalBorder rounded-2xl md:w-[600px] lg:w-[896px] xl:w-[600px] mt-4 lg:mt-16 xl:mt-0"
    >
      <h3 className="font-semibold text-[24px] mb-4 ">
        Talk to our sales team
      </h3>
      <div className="flex gap-4 flex-wrap">
        <SupportInput
          err={errors.firstName}
          name={'firstName'}
          value={'Michael'}
          labelText={'First name'}
        />
        <SupportInput
          err={errors.lastName}
          name={'lastName'}
          value={'Smith'}
          labelText={'Last name'}
        />
        <SupportInput
          err={errors.company}
          name={'company'}
          value={'GetMyHelp'}
          labelText={'Company'}
        />
        <SupportInput
          err={errors.jobTitle}
          name={'jobTitle'}
          value={'Head of Design'}
          labelText={'Job Title'}
        />
        <SupportInput
          err={errors.country}
          name={'country'}
          value={'United States'}
          labelText={'Country'}
        />
        <SupportInput
          err={errors.email}
          name={'email'}
          value={'example@getmyhelp.com'}
          labelText={'Email'}
        />
      </div>
      <label
        className={`flex flex-col text-cardsText text-[12px] mt-4 ${
          errors?.text ? 'text-red-600' : ''
        }`}
      >
        {errors?.text ? (
          <div className="flex items-center gap-2">
            <svg
              width={18}
              height={18}
              className=" w-[18px] h-[18px] bg-input rounded-[6px]"
            >
              <use width={18} height={18} href="./image/icons.svg#icon-error" />
            </svg>
            <span>{errors.text}</span>
          </div>
        ) : (
          'How can we help?'
        )}
        <textarea
          name="text"
          className="text-white h-[184px] mt-1 bg-input pl-3 pt-2 border-[2px] placeholder-inputText border-transparent focus:border-white focus:outline-none "
          placeholder="Tell us how we can help you..."
        />
      </label>
      <button className="bg-white text-black rounded-xl w-[100%] py-3 text-center mt-4">
        Send
      </button>
    </form>
  );
};

export default SupportForm;
