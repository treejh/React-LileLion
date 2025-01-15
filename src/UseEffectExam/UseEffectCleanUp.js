import { useState } from "react";
import Timer from "./Timers";


const UseEffectCleanUp = () => {
  const [showTimer, setShowTimer] = useState(false);
  return (
    <div>
      {showTimer && <Timer />}
      <button onClick={() => setShowTimer(!showTimer)}>토글버튼</button>
    </div>
  );
};

export default UseEffectCleanUp;