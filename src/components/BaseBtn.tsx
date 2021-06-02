import React from 'react'
import './BaseBtn.css'

type Props = {
  label: string
  type?: 'primary' | 'secondary'
  className?: string
  handleClick: () => void
}

const BaseBtn: React.FC<Props> = ({
  label,
  type,
  className,
  handleClick
}) => {
  const btnClass = `btn btn-${type ? type : 'default'} ${className ? className : ''}`.trim()

  return <button
    className={btnClass}
    onClick={handleClick}
  >
    { label }
  </button>
}
export default BaseBtn