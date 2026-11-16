const BlockWrapperr = ({ title, style, text, children }) => {
  // console.log(title, children);
  return (
    <div className={`py-6 ${style}`}>
      <h2 className="text-[32px] font-semibold">{title}</h2>
      <p className="text-[17px]  text-cardsText mt-1">{text} </p>
      {children}{' '}
    </div>
  );
};

export default BlockWrapperr;
