const SupportInput = ({ value, labelText, name, style, err }) => {
  return (
    <label
      className={`flex flex-col text-cardsText text-[12px] ${
        err ? 'text-red-600' : ''
      }`}
    >
      {err ? (
        <div className="flex items-center gap-2">
          <svg
            width={18}
            height={18}
            className=" w-[18px] h-[18px] bg-input rounded-[6px]"
          >
            <use width={18} height={18} href="./image/icons.svg#icon-error" />
          </svg>
          <span>{err}</span>
        </div>
      ) : (
        labelText
      )}
      <input
        name={name}
        placeholder={value}
        className={`bg-input pl-2 rounded-xl w-[154px] md:w-[267px] lg:w-[415px] xl:w-[267px] h-[37px] border-[2px] border-transparent mt-[6px] focus:border-white focus:outline-none font-medium placeholder-inputText text-white ${style}`}
      />
    </label>
  );
};

export default SupportInput;
