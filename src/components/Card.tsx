import React from 'react'
import './Card.css'

type Props = {
  children: React.ReactNode
  className?: string
  align?: 'inline' | 'column'
  type?: 'default' | 'flat'
}

const Card: React.FC<Props> = ({
  children,
  className,
  align,
  type
}) => {
  const cardClass = `card ${className ? className : ''} ${align ? align : ''} ${type ? type : 'default'}`.trim()

  return <div className={cardClass}>
    { children }
  </div>
}
export default Card