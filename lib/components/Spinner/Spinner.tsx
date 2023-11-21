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
  return (
    <div
      className="spinner-container"
      {...props}
      style={{ ...(props.style || {}), animationDuration: `${1 / speed}s` }}
    >
      <img src={`/assets/ochando_${variant}.png`} alt="ochando" />
    </div>
  );
};

export default Spinner;
