function Register(props) {
  const confirm = () => {
    props.setUseSubmit(true);
  };

  return (
    <form
      action=""
      name="cardRegistration"
      id="form"
      className="flex flex-col items-center gap-[20px] lg:gap-[26px]"
    >
      <div className="flex flex-col gap-[9px]">
        <label
          htmlFor="1"
          className="text-xs text-[#21092f] font-[500] tracking-[2px]"
        >
          CARDHOLDER NAME
        </label>
        <input
          type="text"
          name="userName"
          id="1"
          placeholder="e.g. Jane Appleseed"
          className="w-[327px] lg:w-[386px] h-[45px] text-lg text-[#21092f] font-[500] rounded-[8px] py-[11px] pl-4 border border-solid border-[#dfdee0] focus:outline-none focus:caret-[#21092f] placeholder:text-lg placeholder:text-[#21092f] placeholder:font-[500] placeholder:opacity-25"
        />
      </div>
      <div className="flex flex-col gap-[9px]">
        <label
          htmlFor="2"
          className="text-xs text-[#21092f] font-[500] tracking-[2px]"
        >
          Card Number
        </label>
        <input
          type="text"
          name="cardNumber"
          id="2"
          placeholder="e.g. 1234 5678 9123 0000"
          className="w-[327px] lg:w-[386px] h-[45px] text-lg text-[#21092f] font-[500] rounded-[8px] py-[11px] pl-4 border border-solid border-[#dfdee0] focus:outline-none focus:caret-[#21092f] placeholder:text-lg placeholder:text-[#21092f] placeholder:font-[500] placeholder:opacity-25"
        />
        <span className="text-xs text-[#ff5050] font-[500]">
          Wrong format, numbers only
        </span>
      </div>
      <div className="flex items-center gap-[11px] lg:gap-[20px]">
        <div className="flex flex-col gap-[9px]">
          <label
            htmlFor="3"
            className="text-xs text-[#21092f] font-[500] tracking-[2px]"
          >
            Exp. Date (MM/YY)
          </label>
          <div className="flex items-center gap-[8px] lg:gap-[10px]">
            <input
              type="text"
              name="month"
              id="3"
              placeholder="MM"
              className="w-[72px] lg:w-[80px] h-[45px] text-lg text-[#21092f] font-[500] rounded-[8px] py-[11px] pl-4 border border-solid border-[#dfdee0] focus:outline-none focus:caret-[#21092f] placeholder:text-lg placeholder:text-[#21092f] placeholder:font-[500] placeholder:opacity-25"
            />
            <input
              type="text"
              name="year"
              id="4"
              placeholder="YY"
              className="w-[72px] lg:w-[80px] h-[45px] text-lg text-[#21092f] font-[500] rounded-[8px] py-[11px] pl-4 border border-solid border-[#dfdee0] focus:outline-none focus:caret-[#21092f] placeholder:text-lg placeholder:text-[#21092f] placeholder:font-[500] placeholder:opacity-25"
            />
          </div>
          <span className="text-xs text-[#ff5050] font-[500]"></span>
        </div>
        <div className="flex flex-col gap-[9px]">
          <label
            htmlFor="5"
            className="text-xs text-[#21092f] font-[500] tracking-[2px]"
          >
            CVC
          </label>
          <input
            type="text"
            name="cvc"
            id="5"
            placeholder="e.g. 123"
            className="w-[164px] lg:w-[191px] h-[45px] text-lg text-[#21092f] font-[500] rounded-[8px] py-[11px] pl-4 border border-solid border-[#dfdee0] focus:outline-none focus:caret-[#21092f] placeholder:text-lg placeholder:text-[#21092f] placeholder:font-[500] placeholder:opacity-25"
          />
          <span className="text-xs text-[#ff5050] font-[500]"></span>
        </div>
      </div>
      <button
        onClick={confirm}
        type="submit"
        className="w-[327px] lg:w-[381px] h-[53px] rounded-[8px] bg-[#21092f] mt-[8px] lg:mt-[14px] text-lg text-white font-[500]"
      >
        Confirm
      </button>
    </form>
  );
}

export default Register;
