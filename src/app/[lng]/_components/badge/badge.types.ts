import { ComponentBase } from "../types/component-base.type";

export type BadgeProps = Omit<ComponentBase, 'isDisabled'> & {
    children: React.ReactNode
}