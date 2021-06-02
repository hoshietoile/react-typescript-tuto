import React, { useState, useContext, useCallback } from 'react'
import './App.css'
import Card from './components/Card'
import FactoryArea from './components/FactoryArea'
import TableArea from './components/TableArea'
import Modal from './components/Modal'
import { GoalContext, ActionTypes, Goal } from './components/reducers/goalReducer'

function App() {
  const [modalShow, setModalShow] = useState(false)
  const { dispatch } = useContext(GoalContext)

  const onApply = useCallback((newGoal: Goal) => {
    dispatch({ type: ActionTypes.ADD, payload: newGoal })
  }, [])

  const onDelete = useCallback((targetGoal: Goal) => {
    dispatch({ type: ActionTypes.DELETE, payload: targetGoal })
  }, [])

  const onToggle = useCallback((targetGoal: Goal) => {
    dispatch({ type: ActionTypes.TOGGLE, payload: targetGoal })
  }, [])

  const onShow = useCallback((targetGoal: Goal) => {
    dispatch({ type: ActionTypes.SHOW, payload: targetGoal })
    setModalShow(true)
  }, [])

  // const onApply = (newGoal: Goal) => {
  //   dispatch({ type: ActionTypes.ADD, payload: newGoal })
  // }

  // const onDelete = (targetGoal: Goal) => {
  //   dispatch({ type: ActionTypes.DELETE, payload: targetGoal })
  // }

  // const onToggle = (targetGoal: Goal) => {
  //   dispatch({ type: ActionTypes.TOGGLE, payload: targetGoal })
  // }

  // const onShow = (targetGoal: Goal) => {
  //   dispatch({ type: ActionTypes.SHOW, payload: targetGoal })
  //   setModalShow(true)
  // }

  const onModalClose = () => {
    setModalShow(false)
  }

  return (
    <div className='App'>
      <Card>
        <FactoryArea onApply={onApply} />
        <TableArea onDelete={onDelete} onToggle={onToggle} onShow={onShow} />
      </Card>
      { modalShow && <Modal onModalClose={onModalClose} /> }
    </div>
  )
}
export default App;
