import "./Spinner.css";
interface SpinnerProps {
  /**
   * Variant of David's mood
   */
  variant?: "serious" | "amused";
}

/**
 * David Ochando spinning
 */
const Spinner = ({ variant = "serious", ...props }: SpinnerProps) => {
  return (
    <div className="spinner-container" {...props}>
      <img src={`/assets/ochando_${variant}.png`} alt="ochando" />
    </div>
  );
};

export default Spinner;
