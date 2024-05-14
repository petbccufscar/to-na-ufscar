import CardWrapper from '@/components/layout/CardWrapper';
import React from 'react';
import { ProgressBar } from './ProgressBar';


const Results = () => {
    return (
        <CardWrapper className='w-full h-full'>
            <div className='flex flex-col gap-4 justify-center items-center text-center'>
                <h2 className='font-bold text-4xl'> Uhul!</h2>
                <p className='text-sm w-4/5 text-zinc-600 dark:text-zinc-400'>
                    Parabéns! Sua nota é maior que a nota de corte do SISUS dos últimos anos! Suas chances de passar são altas!
                </p>
                <ProgressBar nota={500}/>
            </div>
        </CardWrapper>
    );
};

export default Results;
