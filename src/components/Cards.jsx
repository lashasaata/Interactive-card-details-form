function Cards() {
  return (
    <div className="w-[343px] lg:w-[541px] lg:h-[527px] flex justify-end lg:items-end mt-[32px] lg:mt-[0px] relative">
      <div className="bg-[url('././images/bg-card-back.png')] w-[286px] lg:w-[447px] h-[157px] lg:h-[245px] bg-cover flex items-center rounded-[6px]">
        <span className="text-white text-[9px] lg:text-sm font-[500] tracking-[1.29px] lg:tracking-[2px] ml-[229px] lg:ml-[358px]">
          000
        </span>
      </div>
      <div className="bg-[url('././images/bg-card-front.png')] w-[285px] lg:w-[447px] bg-cover pt-[17.5px] lg:pt-[28px] pl-[19px] lg:pl-[32px] pb-[19px] lg:pb-[26px ] rounded-[6px] lg:rounded-[10px] absolute left-[0px] top-[89px] lg:top-[0px]">
        <img
          className="h-[30px] lg:h-[47px]"
          src="././images/card-logo.svg"
          alt="logo"
        />
        <div className="flex flex-col gap-[17px] lg:gap-[25.5px] mt-[37px] lg:mt-[64px]">
          <span className="text-lg lg:text-[28px] text-white font-[500] tracking-[2.2px] lg:tracking-[3.42px]">
            0000 0000 0000 0000
          </span>
          <div className="w-[245px] lg:w-[382px] flex items-center justify-between">
            <span className="text-[9px] lg:text-sm text-white font-[500] tracking-[1.29px] lg:tracking-[2px]">
              00
            </span>
            <span className="text-[9px] lg:text-sm text-white font-[500] tracking-[1.29px] lg:tracking-[2px]">
              0000
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
