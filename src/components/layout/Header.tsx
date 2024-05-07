import { ThemeToggle } from "@/providers/ThemeToggle"
import { GraduationCap } from "lucide-react"

const Header = () => {
    return (
        <header className="flex justify-between pb-4">
            <div className="flex gap-2 items-center">
                <GraduationCap color="#10b981"/>
                <div className="font-bold text-xl text-emerald-500">
                    Tô na UFSCar?
                </div>
            </div>
            <div className="flex items-center gap-4">
                <a className="hidden lg:flex text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300" href="#">Suporte</a>
                <a className="hidden lg:flex text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300" href="#">Sobre</a>    
                <ThemeToggle/>
            </div>
        </header>
    )
}

export default Header