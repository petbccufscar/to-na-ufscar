'use client'

import { BookOpen, BookPlus } from "lucide-react"
import { useState } from "react"
import { Input } from "../UI/Input";
import { Select } from "../UI/Select";

const InsertSection = () => {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => setOpen(!open);

    return (
        <div className={`fixed flex flex-col-reverse lg:flex-row gap-4 items-center z-20 ${open ? 'bottom-10' : 'bottom-[64px]'}`}>
            <div className="relative bg-emerald-500 hover:bg-emerald-400 w-fit lg:h-fit p-3 rounded-full text-white cursor-pointer" onClick={toggleOpen}>
                <BookPlus className={`transition-transform transform ${open ? 'scale-0 rotate-90' : 'scale-100 rotate-0'}`} />
                <BookOpen className={`absolute inset-0 m-auto transition-transform transform ${open ? 'scale-100 rotate-0' : 'scale-0 rotate-90'}`} />
            </div>
            {open && (
                <form className="flex flex-col lg:flex-row items-end gap-6 bg-white dark:bg-zinc-900 shadow-xl rounded-lg p-4 border dark:border-zinc-800 overflow-auto max-h-[70vh]">
                    <Input.Root>
                        <Input.Label>Linguagens</Input.Label>
                        <Input.Content type="number" />
                    </Input.Root>
                    <Input.Root>
                        <Input.Label>Matemática</Input.Label>
                        <Input.Content type="number" />
                    </Input.Root>
                    <Input.Root>
                        <Input.Label>Natureza</Input.Label>
                        <Input.Content type="number" />
                    </Input.Root>
                    <Input.Root>
                        <Input.Label>Humanas</Input.Label>
                        <Input.Content type="number" />
                    </Input.Root>
                    <Input.Root>
                        <Input.Label>Redação</Input.Label>
                        <Input.Content type="number" />
                    </Input.Root>
                    <Select.Root>
                        <Select.Label>Modalidade</Select.Label>
                        <Select.Content>
                            <Select.Option text="Grupo 1" />
                            <Select.Option text="Grupo 2" />
                            <Select.Option text="Grupo 3" />
                            <Select.Option text="Grupo 4" />
                            <Select.Option text="Grupo 5" />
                        </Select.Content>
                    </Select.Root>
                    <button type="submit" className="bg-emerald-500 text-sm font-semibold text-white h-fit p-2 px-3 rounded-lg w-full">Salvar</button>
                </form>
            )}
        </div>
    );
}

export default InsertSection