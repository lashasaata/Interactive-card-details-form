import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Register from "./components/Register";
import Result from "./components/Result";
function App() {
  const [useSubmit, setUseSubmit] = useState(false);
  return (
    <div className="min-h-screen flex flex-col items-center bg-[url('./images/bg-main-mobile.png')] bg-no-repeat bg-contain gap-[142px] bg-white">
      <Cards />
      {!useSubmit ? (
        <Register useSubmit={useSubmit} setUseSubmit={setUseSubmit} />
      ) : (
        <Result useSubmit={useSubmit} setUseSubmit={setUseSubmit} />
      )}
    </div>
  );
}

export default App;
