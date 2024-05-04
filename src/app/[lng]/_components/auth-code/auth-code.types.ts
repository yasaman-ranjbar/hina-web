import { ComponentBase } from "../types/component-base.type";

export type AuthCodeProps = Omit<ComponentBase, 'size'> & {
    length?: number;
    autoFocus?: boolean;
    onChange: (value: string) => void;
}

export type AuthInputProps = {
    min?: string;
    max?: string;
    pattern: string;
}

// for property that we wants to expose with forward ref
export type AuthCodeRef = {
    focus: () => void;
    clear: () => void;
}