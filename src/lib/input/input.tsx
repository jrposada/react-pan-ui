import { HTMLProps } from 'react'

interface InputProps extends HTMLProps<HTMLInputElement> {}

function Input({ ...restProps }: InputProps) {
  return <input {...restProps} />
}

export default Input
