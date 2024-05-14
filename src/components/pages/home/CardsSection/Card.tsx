import CardWrapper from '@/components/layout/CardWrapper';
import { getIcon } from '@/utils/getIcon.utils'
import { CircleArrowUp, Clock, MapPin, Star } from 'lucide-react';
import React from 'react'

interface CardProps {
    curso: Course
}

const Card = ({ curso }: CardProps) => {
    const IconComponent = getIcon(curso.nome);

    return (
        <CardWrapper>
            <div className='flex justify-end'>
                <Star size={16} color='#10b981'/>
            </div>

            {IconComponent && <IconComponent className='text-7xl' />}
            <h2 className='font-bold text-3xl'>{curso.nome} <span className='text-xs font-normal'>({curso.modelo})</span> </h2>
            <div className='flex justify-between gap-8'>
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center gap-1'>
                        <MapPin size={16} color='#10b981'/>
                        <p className='font-semibold text-sm'>Campus {curso.campus}</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <Clock size={16} color='#10b981'/>
                        <p className='font-semibold text-sm'>{curso.periodo}</p>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <div>
                        <p className='text-sm font-semibold underline decoration-emerald-500 decoration-2 underline-offset-4'>Sua nota é: {814.20}</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <CircleArrowUp size={16} color='#10b981'/>
                        <p className='font-semibold text-sm'>Chances {"altas"}</p>
                    </div>
                </div>
            </div>
        </CardWrapper>
    )
}

export default Card