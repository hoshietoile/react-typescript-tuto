import React, { useContext, useMemo } from 'react'
import './TableArea.css'

import Card from './Card'
import GoalCard from './GoalCard'
import { GoalContext, Goal } from './reducers/goalReducer'

type Props = {
  onDelete: (goal: Goal) => void
  onToggle: (goal: Goal) => void
  onShow: (goal: Goal) => void
}

const TableArea: React.FC<Props> = ({
  onDelete,
  onToggle,
  onShow
}) => {
  const { state } = useContext(GoalContext)

  const count = useMemo(() => {
    console.log('hello!')
    const completedCnt = state.goals.reduce((acc, cur) => {
      if (cur.status === 1) {
        acc += 1
      }
      return acc
    }, 0)
    return `${completedCnt} / ${state.goals.length}`
  }, [state.goals])

  // const count = () => {
  //   console.log('hello...')
  //   const completedCnt = state.goals.reduce((acc, cur) => {
  //     if (cur.status === 1) {
  //       acc += 1
  //     }
  //     return acc
  //   }, 0)
  //   return `${completedCnt} / ${state.goals.length}`
  // }

  return (
    <>
      <Card className='table-area' type='flat'>
        <p className='tagle-area__counter'>Completed: {count}</p>
        { state.goals.length > 0 &&
          state.goals.map((goal) => (
            <GoalCard
              key={goal.id}
              goal={goal}
              onShow={onShow}
              onToggle={onToggle}
              onDelete={onDelete}
            />
        )) }
        { state.goals.length === 0 &&
          <Card>
            <p>No Goal's Registered...</p>
          </Card>
        }
      </Card>
    </>
  )
}
export default TableArea