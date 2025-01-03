const InputModal = ({ value, name, labelText, styles, type, err }) => {
  // console.log(err);
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
        type={type}
        name={name}
        placeholder={value}
        className={`bg-input pl-2 relative rounded-xl  h-[37px] border-[1px] border-cardsTransparent mt-[6px] font-medium focus:ring-2 focus:ring-white focus:border-transparent placeholder-inputText outline-none focus:outline-none text-white ${styles} ${
          err ? 'gradient-overlay' : ''
        }`}
      />
    </label>
  );
};

export default InputModal;
