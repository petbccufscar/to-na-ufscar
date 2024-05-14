import React, { ReactNode } from 'react'

interface RootProps {
    children: ReactNode
}

const Root = ({ children }: RootProps) => {
    return (
        <div className="flex flex-col gap-2">
            {children}
        </div>

    )
}

export default Root