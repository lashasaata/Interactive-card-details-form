import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Register from "./components/Register";
import Result from "./components/Result";
function App() {
  const [useSubmit, setUseSubmit] = useState(false);
  const [useInputValue, setUseInputValue] = useState({
    userName: "",
    cardNumber: "",
    month: "",
    year: "",
    cvc: "",
  });

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center lg:justify-center bg-white relative">
      <div className="min-h-[240px] lg:min-h-screen min-w-full lg:min-w-0 lg:w-2/6 lg:mr-auto bg-[url('/images/bg-main-mobile.png')] lg:bg-[url('/images/bg-main-desktop.png')] bg-no-repeat bg-cover"></div>
      <div className="flex flex-col lg:flex-row items-center gap-[142px] lg:gap-[127px] absolute">
        <Cards useInputValue={useInputValue} />
        {!useSubmit ? (
          <Register
            setUseSubmit={setUseSubmit}
            useInputValue={useInputValue}
            setUseInputValue={setUseInputValue}
          />
        ) : (
          <Result setUseSubmit={setUseSubmit} />
        )}
      </div>
    </div>
  );
}

export default App;
