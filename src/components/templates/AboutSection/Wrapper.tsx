import { ReactNode } from "react"

interface WrapperProps{
    children: ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
    return (
        <div className="flex flex-col gap-2">
            {children}
        </div>
    )
}

export default Wrapper