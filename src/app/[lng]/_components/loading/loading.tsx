import classNames from "classnames";
import { LoadingProps } from "./loading.types";
import { Size } from "../types/size.type";

const sizeClasses: Record<Size, string> = {
  tiny: "loading-xs",
  small: "loading-sm",
  normal: "loading-md",
  large: "loading-lg",
};

const Loading: React.FC<LoadingProps> = ({
  className,
  size = "normal",
  type = "spinner",
  variant,
}) => {
    const classes = classNames(
      "loading",
      className,
      { [`loading-${type}`]: type },
      { [`${sizeClasses[size]}`]: size },
      { [`loading-${variant}`]: variant }
    );
    return <span className={ classes}></span>;
};

export default Loading;
