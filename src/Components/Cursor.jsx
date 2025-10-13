import { useEffect, useState } from "react";
import { motion } from "framer-motion";



function Cursor({children}) {
  const [position, setPosition] = useState({ x: -15, y: -15 });

  useEffect(() => {
    const moveHandler = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    //bcz we are adding the eventlistener so this cursor will move on whole page we will do it later for each page
    window.addEventListener("mousemove", moveHandler);
    return () => {
      window.removeEventListener("mousemove", moveHandler);
    };
  }, []);

  return (
       <><div className="">
          {/* Cursor follower ball */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 h-0 w-0 rounded-full opacity-80 z-10"
        style={{
          background:'rgba(186, 166, 166, 1)%',
          boxShadow: "0 0 10px 5px rgba(194, 107, 47, 1) ", // optional glow
        }}
        animate={{ x: position.x ,y: position.y}}
        transition={{ type: "tween", duration: 0.07, ease: "easeOut" }}
      />
      {children}
       </div>
      
         </>
      );
}

export default Cursor;

