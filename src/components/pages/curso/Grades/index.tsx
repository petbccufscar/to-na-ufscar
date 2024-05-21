'use client'
import { useState } from 'react'
import CardWrapper from '@/components/layout/CardWrapper'


import AllTables from './GradesTable'
import Navbar from './Navbar'


interface CardProps {
   curso: Course
}
const Grades = ({curso}: CardProps) => {
   const [selectedYear, setSelectedYear] = useState<string>("2023")

   function changeYear(year:string){
       setSelectedYear(year)
   }

   return (
       <CardWrapper className='p-8'>
            <h2 className='text-3xl font-semibold'>Notas de corte e pesos - Grupo 1</h2>
            <div className='flex flex-col gap-4 w-full'>
                <Navbar curso={curso} changeYear={changeYear} selectedYear={selectedYear}/>
                <AllTables curso={curso} selectedYear={selectedYear}/>
            </div>

       </CardWrapper>
   )
}


export default Grades