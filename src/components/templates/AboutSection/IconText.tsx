import React, { ElementType } from 'react'

interface IconTextProps{
    icon: ElementType
    text: string;
}

const IconText = ({ icon: Icon, text }: IconTextProps) => {
    return (
        <div className="flex items-center gap-3">
            <Icon size={16} color="#10b981" />
            <p className="text-zinc-400 dark:text-zinc-300">{text}</p>
        </div>

    )
}

export default IconText