import { LabelHTMLAttributes } from "react";

interface InputLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export const Label = ({ children, ...props }: InputLabelProps) => {
    return (
        <label htmlFor={props.htmlFor} className={`text-xs text-zinc-400 uppercase ${props.className}`}>
            {children}
        </label>
    );
}

export default Label