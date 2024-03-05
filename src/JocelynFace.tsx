import { useState, useEffect, createRef } from "react";
import { useRect } from "./useRect";

function JocelynFace() {
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [lookAngle, setLookAngle] = useState(0);

  const contentRef = createRef<HTMLImageElement>();
  const rect = useRect(contentRef)

  useEffect(() => {
    const center = {
      x: rect.left + rect.width/2,
      y: rect.top + rect.height/2
    }
    function getAngle (evt) {
      const mouseX = evt.pageX;
      const mouseY = evt.pageY;
      setLookAngle(Math.atan2((mouseY - center.y), (mouseX - center.x)) * (180 / Math.PI) - 90);
    }

    window.addEventListener("mousemove", getAngle);

    return () => {
      window.removeEventListener("mousemove", getAngle)
    };
  }, [rect]);

  return (
    <img
      className="JocelynFace"
      ref={contentRef}
      src="jface.png"
      style={{
        transformOrigin: "center center",
        transform: `rotate(${lookAngle}deg) translateY(-25px)`,
      }}
      width="200px"
    />
  );
}

export default JocelynFace;
