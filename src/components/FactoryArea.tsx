import React, { useRef, useEffect, useReducer } from 'react'
import './FactoryArea.css'
import Card from './Card'
import InputForm from './InputForm'
import TextForm from './TextForm'
import BaseBtn from './BaseBtn'
import { Goal } from './reducers/goalReducer'

enum FactoryActionTypes {
  LABEL = 'label',
  CONTENT = 'content',
  CLEAR = 'clear'
}

type FactoryState = {
  label: string
  content: string
}

type FactoryActionType = {
  type: FactoryActionTypes
  payload: string
}

const defaultState: FactoryState = {
  label: '',
  content: ''
}

const factoryInputReducer = (state: FactoryState, action: FactoryActionType) => {
  switch (action.type) {
    case FactoryActionTypes.LABEL:
      return { ...state, [FactoryActionTypes.LABEL]: action.payload }
    case FactoryActionTypes.CONTENT:
      return { ...state, [FactoryActionTypes.CONTENT]: action.payload }
    case FactoryActionTypes.CLEAR:
      return { ...defaultState }
    default:
      return { ...state }
  }
}

export type InputFormHandler = {
  setFocus: () => void
}

type Props = {
  onApply: (payload: Goal) => void
}

const FactoryArea: React.FC<Props> = ({
  onApply
}) => {
  const inputRef = useRef({} as InputFormHandler)
  const [state, dispatch] = useReducer(factoryInputReducer, defaultState)
  const { label, content } = state

  useEffect(() => {
    inputRef.current.setFocus()
    return clearInput()
  }, [])

  const handleLabelInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value
    dispatch({ type: FactoryActionTypes.LABEL, payload: val })
  }

  const handleContentInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = event.target.value
    dispatch({ type: FactoryActionTypes.CONTENT, payload: val })
  }

  const clearInput = () => {
    dispatch({ type: FactoryActionTypes.CLEAR, payload: '' })
  }

  const handleApplyClick = () => {
    const newGoal = { label: label, content: content, status: 0 }
    onApply(newGoal)
    clearInput()
  }

  const handleDiscardClick = () => {
    clearInput()
  }

  return (
    <Card type='flat' align='inline'>
      <div className='factory-area__content'>
        <div className='col-wrapper'>
          <InputForm
            ref={inputRef}
            value={label}
            placeholder='Label'
            handleInput={handleLabelInput}
          />
          <TextForm
            value={content}
            placeholder='Content'
            handleInput={handleContentInput}
          />
        </div>
        <div className='col-wrapper align-end'>
          <BaseBtn
            label='Apply'
            type='primary'
            handleClick={handleApplyClick}
          />
          <BaseBtn
            label='Discard'
            handleClick={handleDiscardClick}
          />
        </div>
      </div>
    </Card>
  )
}
export default React.memo(FactoryArea)