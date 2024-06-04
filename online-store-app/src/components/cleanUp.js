import { useEffect } from "react";

export default function CleanUp() {
  useEffect(() => {
    const submitName = () => console.log(`Username entered`);
    window.addEventListener(`click`, clicked);

    // return cleanup func
    return () => {
      window.removeEventListener(`click`, clicked);
    };
  }, []);

  return console.log(`All tidy here. Clean-up complete!`);
}
