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

const audioUrl = new URL("../../assets/ayayay.mp3", import.meta.url).toString();

/**
 * David Ochando spinning
 */
const Spinner = ({
  variant = "serious",
  speed = 0.5,
  ...props
}: SpinnerProps) => {
  const audio = useRef(new Audio(audioUrl));
  const [isClicked, setIsClicked] = useState(false);

  const imageUrl = new URL(
    `../../assets/ochando_${variant}.png`,
    import.meta.url
  ).toString();

  const handleSpinnerClick = () => {
    audio.current.pause();
    audio.current.currentTime = 0;
    audio.current.play();
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 1500);
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
      <img src={imageUrl} alt="ochando" draggable="false" />
    </div>
  );
};

export default Spinner;
