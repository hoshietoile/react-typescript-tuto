import React from 'react'
import './GoalCard.css'
import Card from './Card'
import Alignment from './Alignment'
import BaseBtn from './BaseBtn'
import { Goal } from './reducers/goalReducer'

type Props = {
  goal: Goal
  onShow: (goal: Goal) => void
  onToggle: (goal: Goal) => void
  onDelete: (goal: Goal) => void
}

const GoalCard: React.FC<Props> = ({
  goal,
  onShow,
  onToggle,
  onDelete
}) => {
  const goalCardClass = `goal-card goal-card--${goal.status === 1 ? 'complete' : 'progress'}`
  const goalCardTogglerClass = `goal-card__toggler ${goal.status === 1 ? 'default' : 'active'}`

  return <Card key={goal.id} className={goalCardClass} align='inline'>
    <Alignment>
      <div
        className='goal-card__label'
        onClick={() => onShow(goal)}
      >{goal.label}</div>
      <div>
        <label className={goalCardTogglerClass}>
          <input type="checkbox" onChange={() => onToggle(goal)} />
        </label>
        <BaseBtn
          label='Delete'
          type='secondary'
          handleClick={() => onDelete(goal)}
        />
      </div>
    </Alignment>
  </Card>
}
export default React.memo(GoalCard)