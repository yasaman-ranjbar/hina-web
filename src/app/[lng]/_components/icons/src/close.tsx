import BaseIcon from "@/app/[lng]/_components/icons/base-icon";
import { SvgIconProps } from "@/app/[lng]/_components/icons/icon.types";


export default function SvgIcon(props:SvgIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
    </BaseIcon>
  );
}