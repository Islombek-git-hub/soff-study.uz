import React, { useEffect, useState } from "react";
import Clock1 from "react-clock";
import "react-clock/dist/Clock.css";
function Clock() {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <p>Current time:</p>
      <Clock1 value={value} />
    </div>
  );
}
export default Clock;
