import { InputHTMLAttributes, ChangeEvent } from "react";

interface InputContentProps extends InputHTMLAttributes<HTMLInputElement> {
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    error?: boolean;
}

const Content = ({ onChange, error, ...props }: InputContentProps) => {
    return (
        <div className="relative">
            <input
                onChange={onChange}
                type={props.type}
                id={props.id}
                name={props.name}
                value={props.value}
                className={`rounded p-2 border dark:border-zinc-800 dark:bg-zinc-900 text-sm max-w-24 ${props.className}`}
                placeholder={props.placeholder}
            />
            {props.children}
        </div>
    );
}

export default Content