import React from 'react'
import './Alignment.css'

type Props = {
  children: React.ReactNode
}

const Alignment: React.FC<Props> = ({
  children
}) => {
  return <div className='alignment alignment-inline'>
    { children }
  </div>
}
export default Alignment