import { useEffect, useRef, useState } from "react";
import "./Spinner.css";
interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Variant of David's mood
   */
  variant?: "serious" | "amused";
  /**
   * Speed (in rotations per second)
   */
  speed?: number;
}

/**
 * David Ochando spinning
 */
const Spinner = ({
  variant = "serious",
  speed = 1,
  ...props
}: SpinnerProps) => {
  const audio = useRef(new Audio("/assets/ayayay.mp3"));
  const [isClicked, setIsClicked] = useState(false);

  const handleSpinnerClick = () => {
    audio.current.pause();
    audio.current.currentTime = 0;
    audio.current.play();
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 2000);
  };

  useEffect(() => {
    audio.current.play();
  }, []);

  return (
    <div
      className={`spinner-container ${isClicked && "spinner-clicked"}`}
      {...props}
      style={{ ...(props.style || {}), animationDuration: `${1 / speed}s` }}
      onClick={handleSpinnerClick}
    >
      <img
        src={`/assets/ochando_${variant}.png`}
        alt="ochando"
        draggable="false"
      />
    </div>
  );
};

export default Spinner;
