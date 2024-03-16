function Cards() {
  return (
    <div className="w-[343px] flex justify-end mt-[32px] relative">
      <div className="bg-[url('././images/bg-card-back.png')] w-[286px] h-[157px] bg-cover flex items-center rounded-[6px]">
        <span className="text-white text-[9px] font-[500] tracking-[1.29px] ml-[229px]">
          000
        </span>
      </div>
      <div className="bg-[url('././images/bg-card-front.png')] w-[285px] bg-cover pt-[17.5px] pl-[19px] pb-[19px] rounded-[6px] absolute left-[0px] top-[89px]">
        <img className="h-[30px]" src="././images/card-logo.svg" alt="logo" />
        <div className="flex flex-col gap-[17px] mt-[37px]">
          <span className="text-lg text-white font-[500] tracking-[2.2px]">
            0000 0000 0000 0000
          </span>
          <div className="w-[245px] flex items-center justify-between">
            <span className="text-[9px] text-white font-[500] tracking-[1.29px]">
              00
            </span>
            <span className="text-[9px] text-white font-[500] tracking-[1.29px]">
              0000
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
