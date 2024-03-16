import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Register from "./components/Register";
import Result from "./components/Result";
function App() {
  const [useSubmit, setUseSubmit] = useState(false);
  return (
    <div className="min-h-screen flex flex-col items-center bg-white relative">
      <div className="h-[240px] min-w-full bg-[url('./images/bg-main-mobile.png')] bg-no-repeat bg-cover"></div>
      <div className="flex flex-col items-center gap-[142px] absolute">
        <Cards />
        {!useSubmit ? (
          <Register useSubmit={useSubmit} setUseSubmit={setUseSubmit} />
        ) : (
          <Result useSubmit={useSubmit} setUseSubmit={setUseSubmit} />
        )}
      </div>
    </div>
  );
}

export default App;
