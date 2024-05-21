'use client'
import React, { useState } from 'react';
import { Search, ListFilter } from 'lucide-react';
import { motion } from 'framer-motion';

interface FilterTextProps {
    text: string;
}


//Definindo o componente do toggle swithc para cada filtro possível
const FilterSelection = ({ text }: FilterTextProps) => {
    const [isSelected, setIsSelected] = useState(false);

    return (
        <div className='flex justify-between items-center gap-8'>
            <p className=' text-sm'>{text}</p>
            <div className='flex flex-col'>
                <div
                    onClick={() => setIsSelected(!isSelected)}
                    className={`flex hover:cursor-pointer rounded-full ${
                        isSelected ? 'justify-start bg-emerald-300' : 'justify-end bg-emerald-500'
                    } w-10`}
                >
                    <motion.div
                        className='h-5 w-5 rounded-full bg-white'
                        layout
                        transition={{ type: 'spring', stiffness: 700, damping: 30 }}
                    />
                </div>
            </div>
        </div>
    );
};

//Ícone para o filtro, onde ao se clicar ele abre o pop-up com os filtros
const FilterIcon = ({ handleFilterOnClick }: { handleFilterOnClick: () => void }) => {
  return (
    <div
      onClick={handleFilterOnClick}
      className='flex gap-2 justify-center items-center rounded-lg px-10 py-2 bg-emerald-500 hover:bg-emerald-400 hover:cursor-pointer'
    >
      <ListFilter color='white' />
      <p className='text-white hidden sm:flex'>Filter</p>
    </div>
  );
};

//Pop up com as opções de filtro
const FilterBox = () => {
    return (
        <div className='absolute top-12 flex flex-col bg-white dark:bg-zinc-900 rounded-2xl shadow-lg gap-2 p-4 w-56 border dark:border-zinc-800'>
            <FilterSelection text='São Carlos' />
            <FilterSelection text='Sorocaba' />
            <FilterSelection text='Lagoa do Sino' />
            <FilterSelection text='Araras' />
            <FilterSelection text='Favoritos' />
        </div>
    );
};

const SearchBar = () => {
    return (
        <div className='flex gap-2 pl-4 items-center rounded-lg w-full py-2 border bg-transparent shadow dark:border-zinc-800'>
            <Search size={16} color='#737373' />
            <input className='outline-none w-full bg-transparent placeholder:text-transparent sm:placeholder:text-zinc-400' type='text' placeholder='Busque por cursos, áreas de conhecimento....' />
        </div>
    );
};


const SearchArea = () => {
    const [isfilterSelected, setFilterSelected] = useState(false);
    
    //Usado para definir se o filtro aparece ou não
    function handleFilterOnClick() {
        setFilterSelected(!isfilterSelected);
    }

    return (
        <div className='relative flex flex-col gap-1'>
            <div className='flex gap-4'>
                <div className='flex flex-col gap-2'>
                    <FilterIcon handleFilterOnClick={handleFilterOnClick} />
                    {/*Renderização condicional do Filter Box*/}
                    
                </div>
                <SearchBar />
            </div>
              {isfilterSelected && <FilterBox />}          
        </div>
        
    );
};

export default SearchArea;
