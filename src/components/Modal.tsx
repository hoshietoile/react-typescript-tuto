import React, { useContext } from 'react'
import './Modal.css'
import { GoalContext } from './reducers/goalReducer'
import Card from './Card'
import BaseBtn from './BaseBtn'

type Props = {
  onModalClose: () => void 
}

const Modal: React.FC<Props> = ({
  onModalClose
}) => {
  const { state } = useContext(GoalContext)
  
  return (
    <>
      <div className='modal__overlay' onClick={onModalClose} />
      <Card className='modal'>
        <BaseBtn
          label='✖'
          className='modal__close'
          type='primary'
          handleClick={onModalClose}
        />
        <p className='modal__label'>{state.focusGoal.label}</p>
        <hr />
        <p className='modal__content'>{state.focusGoal.content}</p>
      </Card>
    </>
  )
}
export default Modal