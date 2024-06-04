import { useEffect , useRef } from "react";

export default function CleanUp() {
    const inputRef = useRef(null); // to reference the input in the DOM

  useEffect(() => {
    const handleSubmitCity = () => console.log(`City Entered`);

    const inputCity = inputRef.current;
    inputElement.addEventListener(`change`, handleSubmitCity); // attaching event lisenter

    // return cleanup func to remove the listener
    return () => {
      inputElement.removeEventListener(`change`, handleSubmitCity);
      console.log(`All tidy here. Clean-up complete!`);
    };
  }, []);

  return (
    <div>
        <input ref={inputRef} type="text" placeholder="Enter name of city"/>
    </div>
    );
}

console.log(`All tidy here. Clean-up complete!`);
