import React, { SelectHTMLAttributes } from 'react'

interface OptionProps extends SelectHTMLAttributes<HTMLInputElement> {
    text: string;
}

const Option = ({ text, ...props }: OptionProps) => {
  return (
    <option value={props.value}>{text}</option>
  )
}

export default Option