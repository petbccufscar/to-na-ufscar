'use client'

import React, { useEffect, useState } from "react";
import { CircularProgress } from "@nextui-org/progress";

interface ProgressBarProps {
    nota: number
}

export const ProgressBar = ({ nota }: ProgressBarProps) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setValue(v => Math.min(v + 1, nota / 10));
        }, 15);
      
        return () => clearInterval(interval);
      }, [nota]);

    return (
        <div className='relative w-36 h-36'>
            <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col text-center z-10 text-nowrap text-sm'>Sua nota é: <span className='text-2xl font-semibold'>{nota}</span></p>
            <CircularProgress
                classNames={{
                    svg: "w-36 h-36 drop-shadow-md",
                    indicator: "stroke-emerald-500",
                    track: "stroke-emerald-500/5",
                    value: "text-2xl font-semibold black",
                }}
                value={value}
                strokeWidth={3}
                showValueLabel={false}
                disableAnimation={false}
            />
        </div>
    )
}