import classNames from "classnames";
import { Size } from "../types/size.type";
import { ProgressProps } from "./progress.types"


const sizeClasses: Record<Size, string> = {
  tiny: "progress-xs",
  small: "progress-sm",
  normal: "progress-md",
  large: "progress-lg",
};

const Progress: React.FC<ProgressProps> = ({
  value,
  className,
  size = "small",
  variant = "neutral",
}) => {
  const classes = classNames("progress", className, {
    [`progress-${variant}`]: variant,
    [`${sizeClasses[size]}`]: size,
  });
  return <progress value={value} className={classes} max={100} />;
};

export default Progress;