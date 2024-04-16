import BaseIcon from "@/app/[lng]/_components/icons/base-icon";
import { SvgIconProps } from "@/app/[lng]/_components/icons/icon.types";


export default function SvgIcon(props:SvgIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M21 16.5L11.989 7.5L3 16.5"/>
    </BaseIcon>
  );
}