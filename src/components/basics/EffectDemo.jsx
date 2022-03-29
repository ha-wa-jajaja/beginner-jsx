import React, { useEffect, useState } from "react";

const EffectDemo = () => {
  const [num, newNum] = useState(0);

  // when nothing passed into the second arg, works like mounted()
  useEffect(() => {
    alert("mounted");
  }, []);

  //   if some state is passed into, works like watch
  useEffect(() => {
    alert("num has changed");

    // below is the "cleanup function", executed when unmounted
    // also runs before the watcher triggers
    return () => {
      alert("before change");
    };
  }, [num]);

  const plus = () => {
    newNum((prev) => {
      return prev + 1;
    });
  };

  return (
    <div>
      <h2>Use Effect</h2>
      <p>{num}</p>
      <button onClick={plus}>plus</button>
    </div>
  );
};

export default EffectDemo;
