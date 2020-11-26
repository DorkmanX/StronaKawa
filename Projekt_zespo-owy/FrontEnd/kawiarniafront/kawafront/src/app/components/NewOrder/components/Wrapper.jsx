import React, { useRef } from "react";


const Wrapper = ({ children }) => {
  const ref = useRef();
  
  return (
    <div ref={ref} className="newOrder">
      {children}
    </div>
  );
};
export default Wrapper;
