const Footer = () => {
    return (
        <footer className="flex justify-between text-sm mt-8">
            <p className="text-zinc-400">Tô na UFSCar? © 2024</p>
            <div className="flex gap-8">
                <a className="text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300" href="#">Contribua com o Projeto</a>
                <p className="text-zinc-400">Powered by <a className="hover:text-zinc-700 dark:hover:text-zinc-300" href="https://petbcc.ufscar.br">PET-BCC</a></p>
            </div>
        </footer>
    )
}

export default Footer