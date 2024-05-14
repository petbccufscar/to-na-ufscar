import React, { ReactNode } from 'react'

interface CardWrapperProps {
    children: ReactNode;
}

const CardWrapper = ({ children }: CardWrapperProps) => {
    return (
        <div className='flex flex-col bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 rounded-xl shadow gap-2 p-6 w-fit hover:bg-zinc-100 dark:hover:bg-zinc-800'>
            {children}
        </div>
    )
}

export default CardWrapper