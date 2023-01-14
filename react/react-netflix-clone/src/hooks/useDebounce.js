import { useState,useEffect } from "react";

export default useDebounce = (value,delay) =>{
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
      const handler=  setTimeout(()=>{
        setDebounceValue(value)
      },delay);
    
      return () => {
        clearTimeout(handler);
      };
      
    }, [value,delay]);

    return debounceValue;
}

//custom hooks