interface NavbarProps {
   curso: Course,
   changeYear: (year: string) => void,
   selectedYear: string;
}

const Navbar = ({ curso, changeYear, selectedYear }: NavbarProps) => {
   return (
       <div className = "flex gap-4 ">
           {Object.entries(curso.notas).reverse().map(([year]) => (
               <div key={year}>
                   <div className={`rounded-md px-2 cursor-pointer ${
                           selectedYear == year ? 'bg-emerald-500' : 'bg-emerald-100'
                       }`} onClick={() => changeYear(year)}>
                       <p className={`${selectedYear === year ? 'text-white' : 'text-emerald-500'}`}>{year}</p>
                   </div>
               </div>
           ))}
       </div>
   );
}


export default Navbar;