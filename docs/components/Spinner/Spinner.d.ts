/// <reference types="react" />
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
declare const Spinner: ({ variant, speed, ...props }: SpinnerProps) => import("react/jsx-runtime").JSX.Element;
export default Spinner;
