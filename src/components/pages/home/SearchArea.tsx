import React from 'react'
import { Search, ListFilter } from 'lucide-react'

const FilterDrop = () => {
    return (
        <div>

        </div>
    )
}

const Filter = () => {
    return (
        <div className='flex gap-2 justify-center items-center rounded-lg bg-emerald-500 w-2/12 h-10'>
            <ListFilter color='white' />
            <p className='text-white'>Filter</p>
        </div>
    )
}

const SearchBar = () => {
    return (
        <div className='flex gap-2 pl-4 items-center shadow rounded-lg w-9/12 h-10'>
            <Search />
            <input
                className='outline-none w-full'
                type='text'
                placeholder='Busque por cursos, áreas de conhecimento....'
            />
        </div>
    );
};


const SearchArea = () => {
    return (
        <div className='flex gap-4'>
            <Filter />
            <SearchBar />
        </div>
    )
}

export default SearchArea