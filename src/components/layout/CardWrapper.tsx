import React, { ReactNode } from 'react'

interface CardWrapperProps {
    children: ReactNode;
    className?: string;
}

const CardWrapper = ({ children, className }: CardWrapperProps) => {
    return (
        <div className={`flex flex-col bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 rounded-xl shadow gap-2 p-6 ${className}`}>
            {children}
        </div>
    )
}

export default CardWrapper