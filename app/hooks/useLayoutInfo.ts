import { useEffect, useState } from "react";

function useLayoutInfo() {
  const [vw, setVw] = useState(0);
  const [vh, setVh] = useState(0);

  useEffect(() => {
    fresh();
    window.addEventListener("resize", fresh);

    return () => {
      window.removeEventListener("resize", fresh);
    };
  }, []);

  function fresh() {
    setVw(window.innerWidth);
    setVh(window.innerWidth);
  }

  return [vw, vh];
}

export default useLayoutInfo;
