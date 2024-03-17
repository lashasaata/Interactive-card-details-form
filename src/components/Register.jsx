import { useState } from "react";
import ReactInputMask from "react-input-mask";

function Register(props) {
  const [useErrors, setUseErrors] = useState({
    userName: "",
    cardNumber: "",
    month: "",
    year: "",
    cvc: "",
  });
  const [usefocus, setUseFocus] = useState({
    userName: false,
    cardNumber: false,
    month: false,
    year: false,
    cvc: false,
  });

  const focusHandler = (e) => {
    const { name } = e.target;
    setUseFocus({
      ...usefocus,
      [name]: true,
    });
  };

  const blurHandle = (e) => {
    const { name } = e.target;
    setUseFocus({
      ...usefocus,
      [name]: false,
    });
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    props.setUseInputValue({
      ...props.useInputValue,
      [name]: value,
    });
  };

  const errorHandler = () => {
    const errors = {};
    if (props.useInputValue.userName.replaceAll(" ", "") == "") {
      errors.userName = "Can’t be blank";
    }
    if (props.useInputValue.cardNumber.replaceAll(" ", "").length < 16) {
      errors.cardNumber = "Can’t be less than 16";
    }
    if (props.useInputValue.cardNumber.replaceAll(" ", "").length == 0) {
      errors.cardNumber = "Can’t be blank";
    }
    if (props.useInputValue.month.replaceAll(" ", "").length < 2) {
      errors.month = "Can’t be less than 2";
    }
    if (props.useInputValue.year.replaceAll(" ", "").length < 2) {
      errors.year = "Can’t be less than 2";
    }
    if (!props.useInputValue.month.replaceAll(" ", "")) {
      errors.month = "Can’t be blank";
    }
    if (!props.useInputValue.year.replaceAll(" ", "")) {
      errors.year = "Can’t be blank";
    }
    if (props.useInputValue.cvc.replaceAll(" ", "").length < 3) {
      errors.cvc = "Can’t be less than 3";
    }
    if (!props.useInputValue.cvc.replaceAll(" ", "")) {
      errors.cvc = "Can’t be blank";
    }
    setUseErrors(errors);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    errorHandler();
  };

  const confirm = () => {
    errorHandler();
    if (!Object.keys(useErrors).length > 0) {
      props.setUseSubmit(true);
    }
  };

  return (
    <form
      onSubmit={submitHandler}
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
          onChange={inputHandler}
          onFocus={focusHandler}
          onBlur={blurHandle}
          type="text"
          name="userName"
          id="1"
          placeholder="e.g. Jane Appleseed"
          className={`${
            useErrors.userName
              ? "border-[#ff5050]"
              : usefocus.userName
              ? "border-[#6348fe]"
              : "border-[#dfdee0]"
          } w-[327px] lg:w-[386px] h-[45px] text-lg text-[#21092f] font-[500] rounded-[8px] py-[11px] pl-4 border border-solid focus:outline-none focus:caret-[#21092f] placeholder:text-lg placeholder:text-[#21092f] placeholder:font-[500] placeholder:opacity-25 hover:cursor-pointer`}
        />
        <span className="text-xs text-[#ff5050] font-[500]">
          {useErrors.userName}
        </span>
      </div>
      <div className="flex flex-col gap-[9px]">
        <label
          htmlFor="2"
          className="text-xs text-[#21092f] font-[500] tracking-[2px]"
        >
          Card Number
        </label>
        <ReactInputMask
          mask={"9999 9999 9999 9999"}
          maskChar={null}
          onChange={inputHandler}
          onFocus={focusHandler}
          onBlur={blurHandle}
          type="text"
          name="cardNumber"
          id="2"
          placeholder="e.g. 1234 5678 9123 0000"
          className={`${
            useErrors.cardNumber
              ? "border-[#ff5050]"
              : usefocus.cardNumber
              ? "border-[#6348fe]"
              : "border-[#dfdee0]"
          } w-[327px] lg:w-[386px] h-[45px] text-lg text-[#21092f] font-[500] rounded-[8px] py-[11px] pl-4 border border-solid focus:outline-none focus:caret-[#21092f] placeholder:text-lg placeholder:text-[#21092f] placeholder:font-[500] placeholder:opacity-25 hover:cursor-pointer`}
        />
        <span className="text-xs text-[#ff5050] font-[500]">
          {useErrors.cardNumber}
        </span>
      </div>
      <div className="flex items-start gap-[11px] lg:gap-[20px]">
        <div className="flex flex-col gap-[9px]">
          <label
            htmlFor="3"
            className="text-xs text-[#21092f] font-[500] tracking-[2px]"
          >
            Exp. Date (MM/YY)
          </label>
          <div className="flex items-center gap-[8px] lg:gap-[10px]">
            <ReactInputMask
              mask={"99"}
              maskChar={null}
              onChange={inputHandler}
              onFocus={focusHandler}
              onBlur={blurHandle}
              type="text"
              name="month"
              id="3"
              placeholder="MM"
              className={`${
                useErrors.month
                  ? "border-[#ff5050]"
                  : usefocus.month
                  ? "border-[#6348fe]"
                  : "border-[#dfdee0]"
              } w-[72px] lg:w-[80px] h-[45px] text-lg text-[#21092f] font-[500] rounded-[8px] py-[11px] pl-4 border border-solid focus:outline-none focus:caret-[#21092f] placeholder:text-lg placeholder:text-[#21092f] placeholder:font-[500] placeholder:opacity-25 hover:cursor-pointer`}
            />
            <ReactInputMask
              mask={"99"}
              maskChar={null}
              onChange={inputHandler}
              onFocus={focusHandler}
              onBlur={blurHandle}
              type="text"
              name="year"
              id="4"
              placeholder="YY"
              className={`${
                useErrors.year
                  ? "border-[#ff5050]"
                  : usefocus.year
                  ? "border-[#6348fe]"
                  : "border-[#dfdee0]"
              } w-[72px] lg:w-[80px] h-[45px] text-lg text-[#21092f] font-[500] rounded-[8px] py-[11px] pl-4 border border-solid focus:outline-none focus:caret-[#21092f] placeholder:text-lg placeholder:text-[#21092f] placeholder:font-[500] placeholder:opacity-25 hover:cursor-pointer`}
            />
          </div>
          <span className="text-xs text-[#ff5050] font-[500]">
            {`${
              useErrors.month
                ? useErrors.month
                : useErrors.year
                ? useErrors.year
                : ""
            }`}
          </span>
        </div>
        <div className="flex flex-col gap-[9px]">
          <label
            htmlFor="5"
            className="text-xs text-[#21092f] font-[500] tracking-[2px]"
          >
            CVC
          </label>
          <ReactInputMask
            mask={"999"}
            maskChar={null}
            onChange={inputHandler}
            onFocus={focusHandler}
            onBlur={blurHandle}
            type="text"
            name="cvc"
            id="5"
            placeholder="e.g. 123"
            className={`${
              useErrors.cvc
                ? "border-[#ff5050]"
                : usefocus.cvc
                ? "border-[#6348fe]"
                : "border-[#dfdee0]"
            } w-[164px] lg:w-[191px] h-[45px] text-lg text-[#21092f] font-[500] rounded-[8px] py-[11px] pl-4 border border-solid focus:outline-none focus:caret-[#21092f] placeholder:text-lg placeholder:text-[#21092f] placeholder:font-[500] placeholder:opacity-25 hover:cursor-pointer`}
          />
          <span className="text-xs text-[#ff5050] font-[500]">
            {useErrors.cvc}
          </span>
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
