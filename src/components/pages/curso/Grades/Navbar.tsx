"use client"
import { useState } from "react";


interface CardProps {
   curso: Course;
}


const Navbar = ({ curso }: CardProps, {changeYear}: {changeYear: (selectedYear:string) => void } ) => {


  
   return (
       <div className = "flex gap-4 ">
           {Object.entries(curso.notas).map(([year]) => (
               <div key={year}>
                   <div className={`rounded-xl px-2 cursor-pointer ${
                           selectedYear === year ? 'bg-emerald-500' : 'bg-emerald-100'
                       }`} onClick={() => changeYear(year)}>
                       <p className={`${selectedYear === year ? 'text-white' : 'text-emerald-500'}`}>{year}</p>
                   </div>
               </div>
           ))}
       </div>
   );
}


export default Navbar;