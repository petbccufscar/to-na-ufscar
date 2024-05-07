import React, { ReactNode } from 'react'

interface IconAreaProps{
    children: ReactNode;
}

const IconArea = ({ children }: IconAreaProps) => {
    return (
        <div className="flex flex-col gap-4 mr-20 text-sm">
            {children}
        </div>

    )
}

export default IconArea