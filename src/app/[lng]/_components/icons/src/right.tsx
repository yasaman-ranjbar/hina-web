import BaseIcon from "@/app/[lng]/_components/icons/base-icon";
import { SvgIconProps } from "@/app/[lng]/_components/icons/icon.types";


export default function SvgIcon(props:SvgIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M7.505 3L16.5 12.027L7.5 21"/>
    </BaseIcon>
  );
}