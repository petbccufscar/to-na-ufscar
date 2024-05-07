interface TitleProps {
    text: string
}

const Title = ({ text }: TitleProps) => {
  return (
    <h2 className="font-bold text-4xl max-w-[600px]">{text}</h2>
  )
}

export default Title