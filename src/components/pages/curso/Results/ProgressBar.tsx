import React from "react";
import { CircularProgress } from "@nextui-org/progress";

interface ProgressBarProps {
    nota: number
}

export const ProgressBar = ({ nota }: ProgressBarProps) => {
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
                value={nota / 10}
                strokeWidth={3}
                showValueLabel={false}
            />
        </div>
    )
}