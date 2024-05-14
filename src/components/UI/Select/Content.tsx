import { InputHTMLAttributes } from "react";

interface InputContentProps extends InputHTMLAttributes<HTMLInputElement> {
}

const Content = ({ ...props }: InputContentProps) => {
    return (

        <select
            id={props.id}
            name={props.name}
            className={`rounded p-2 pr-4 border dark:border-zinc-800 dark:bg-zinc-900 text-sm max-w-40 ${props.className}`}
        >
            {props.children}
        </select>
    );
}

export default Content