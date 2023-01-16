import React ,{useEffect} from 'react'

export const useOnClickOutside = (ref,handler) => {
    useEffect(() => {
        const listener = (e) => {
            if(ref.current || ref.current.contains(Event.target)){
                return;
            }else{
                handler();
            }
        };

      document.addEventListener("mousedown",listener)
      document.addEventListener("touchstart",listener)
    
      return () => {
        document.removeEventListener("mousedown",listener)
        document.removeEventListener("touchstart",listener)
      
    }
    }, [third])
    
  
    return (
    <div>useOnClickOutside</div>
  )
}
