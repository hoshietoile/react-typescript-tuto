import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import './InputForm.css'

import { InputFormHandler } from './FactoryArea'

type Props = React.ComponentPropsWithoutRef<'div'> & {
  value: string
  placeholder?: string
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputForm = forwardRef<InputFormHandler, Props>(({
  value,
  placeholder,
  handleInput
}, ref) => {
  const inputRef = useRef({} as HTMLInputElement)

  useImperativeHandle(ref, () => {
    return {
      setFocus() {
        inputRef.current.focus()
      }
    }
  })

  return (
    <input
      ref={inputRef}
      placeholder={placeholder ? placeholder : ''}
      className='input-form'
      value={value}
      onInput={handleInput}
    />
  )
})
export default InputForm