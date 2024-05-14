import React from 'react'
import { useState } from 'react'


import AllTables from './GradesTable'
import Navbar from './Navbar'


interface CardProps {
   curso: Course
}
const CardsSection = ({curso}: CardProps) => {
   const firstYear = Object.keys(curso.notas)[0];
   const [selectedYear, setSelectedYear] = useState<string>(firstYear)


   function changeYear(year:string){
       setSelectedYear(year)
   }


   return (
       <div className='flex flex-col bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50  rounded-xl shadow gap-2 p-6 w-fit hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer'>
           <Navbar curso={curso}/>
           <AllTables curso={curso}/>
       </div>
   )
}


export default CardsSection