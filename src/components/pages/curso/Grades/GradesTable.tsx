import { Weight } from 'lucide-react'
import React from 'react'




interface CardProps {
   curso: Course
}




const WeightTable = ({ curso }: CardProps) => {
   return(
       <div>
           {Object.entries(curso.notas).map(([year, details]) => (
           <table key={year} className='border-separate border-spacing-x-10'>
               <tr className=''>
                   <th className='font-bold text-xl text-left'>Pesos</th>
                   <th className='font-semibold text-base'>Peso</th>
                   <th className='font-semibold text-base'>Mínimo</th>
                   <th className='font-semibold text-base'>Suas Notas</th>
               </tr>
               <tr className='text-zinc-600'>
                   <td>Linguagens, Códigos e Suas Tecnologias</td>
                   <td className='font-semibold text-emerald-500'>{details.areas.linguagens}</td>
                   <td className='font-semibold text-emerald-500'>{details.minimos.linguagens}</td>
                   <td className='font-semibold text-emerald-500'>480.0</td>


               </tr>
               <tr className='text-zinc-600'>
                   <td>Ciências Humanas e Suas tecnologias</td>
                   <td className='font-semibold text-emerald-500'>{details.areas.humanas}</td>
                   <td className='font-semibold text-emerald-500'>{details.minimos.humanas}</td>
                   <td className='font-semibold text-emerald-500'>720.0</td>
               </tr>
               <tr className='text-zinc-600'>
                   <td>Ciências da Natureza e Suas Tecnologias</td>
                   <td className='font-semibold text-emerald-500'>{details.areas.naturezas}</td>
                   <td className='font-semibold text-emerald-500'>{details.minimos.naturezas}</td>
                   <td className='font-semibold text-emerald-500'>650.0</td>
               </tr>
               <tr className='text-zinc-600'>
                   <td>Matemática e Suas Tecnologias</td>
                   <td className='font-semibold text-emerald-500'>{details.areas.matematica}</td>
                   <td className='font-semibold text-emerald-500'>{details.minimos.matematica}</td>
                   <td className='font-semibold text-emerald-500'>700.0</td>
               </tr>
               <tr className='text-zinc-600'>
                   <td>Redação</td>
                   <td className='font-semibold text-emerald-500'>{details.areas.redacao}</td>
                   <td className='font-semibold text-emerald-500'>{details.minimos.redacao}</td>
                   <td className='font-semibold text-emerald-500'>940</td>
               </tr>
           </table>
       ))}
       </div>
      
   )
}


const GradeTable = ({ curso }: CardProps) =>{
   return(
       <div>
       {Object.entries(curso.notas).map(([year, details]) => (
       <table key={year}>
           <tr className=''>
               <th className='font-bold text-xl'>Notas</th>
           </tr>
           <tr className='text-zinc-600'>
               <td>Corte SISU:</td>
               <td className='font-semibold text-emerald-500'>{details.sisu}</td>
           </tr>
           <tr className='text-zinc-600'>
               <td>Nota máxima:</td>
               <td className='font-semibold text-emerald-500'>{details.maxima}</td>
           </tr>
           <tr className='text-zinc-600'>
               <td>Nota mínima:</td>
               <td className='font-semibold text-emerald-500'>{details.minima}</td>
           </tr>
       </table>
   ))}
   </div>
   )
}


const AllTables = ({ curso }: CardProps) => {
   return(
       <div className='flex'>
           <GradeTable curso={curso}/>
           <WeightTable curso={curso}/>
       </div>
   );
}


export default AllTables