import React from 'react'
import './TextForm.css'

type Props = {
  className?: string
  rows?: number
  placeholder?: string
  value: string
  handleInput: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const TextForm: React.FC<Props> = ({
  className,
  rows,
  placeholder,
  value,
  handleInput
}) => {
  const textFormClass = `text-form ${className ? className : ''}`.trim()

  return <textarea
    placeholder={placeholder ? placeholder : ''}
    className={textFormClass}
    rows={rows ? rows : 5}
    value={value}
    onInput={handleInput}
  />
}
export default TextForm