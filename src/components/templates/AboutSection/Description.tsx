import React from 'react'

interface DescriptionProps {
    text: string
}

const Description = ({ text }: DescriptionProps) => {
    return (
        <p className='text-zinc-500 dark:text-zinc-300 max-w-[700px]'>
            {text}
        </p>
    )
}

export default Description