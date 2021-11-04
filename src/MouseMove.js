import React, {useState, useEffect} from 'react';

function MouseMove() {

   const [mouseX, setMouseX] = useState("0");
   const [mouseY, setMouseY] = useState("0");

   // useEffect is similar to componentDidMount
   useEffect(() => {
      document.addEventListener("mousemove", handleMouseMove);
      return () => {
         console.log("component did unmount");
         document.removeEventListener("mousemove", handleMouseMove);
      }
   }, []); //the array iis needed as the third argument

   function handleMouseMove(e){
      setMouseX(e.clientX);
      setMouseY(e.clientY);
   };
//===================
   return (
      <div>
         <h1>Use Effect Intro</h1>
         <p>Mouse X Position: {mouseX}</p>
         <p>Mouse Y Position: {mouseY}</p>
      </div>
   )
}

export default MouseMove;
