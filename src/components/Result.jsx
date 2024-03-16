function Result(props) {
  const continues = () => {
    props.setUseSubmit(false);
  };
  return (
    <div className="flex flex-col items-center">
      <img src="./images/icon-complete.svg" alt="complited icon" />
      <span className="text-[28px] text-[#21092f] font-[500] tracking-[3.42px] mt-[35px]">
        THANK YOU!
      </span>
      <span className="text-lg text-[#8f8694] font-[500] mt-4">
        We’ve added your card details
      </span>
      <button
        onClick={continues}
        className="w-[327px] lg:w-[381px] h-[53px] rounded-[8px] bg-[#21092f] text-lg text-white font-[500] mt-[48px]"
      >
        Continue
      </button>
    </div>
  );
}

export default Result;
