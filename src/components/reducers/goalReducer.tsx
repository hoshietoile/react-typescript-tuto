import React, { createContext, useReducer } from 'react'

export type Goal = {
  id?: number
  status: number // 0 | 1はダメなのか、、、
  label: string
  content: string
}

export type ActionType = {
  type: ActionTypes
  payload: Goal
}

type GoalState = {
  nextId: number
  focusGoal: Goal
  goals: Goal[]
}

type ContextType = {
  state: GoalState
  dispatch: React.Dispatch<ActionType>
}

export enum ActionTypes {
  ADD = 'add',
  DELETE = 'delete',
  SHOW = 'show',
  TOGGLE = 'toggle'
}

const defaultGoals: Goal[] = []

const defaultGoalState: GoalState = {
  nextId: 1,
  focusGoal: {
    id: -1,
    status: 0,
    label: '',
    content: ''
  },
  goals: defaultGoals
}

export const GoalContext = createContext({} as ContextType)

// https://qiita.com/_akira19/items/8911567227ce38a1bdf6
const goalReducer = (state: GoalState, action: ActionType): GoalState => {
  switch (action.type) {
    case ActionTypes.ADD: {
      state.nextId += 1
      const newGoal = { id: state.nextId, ...action.payload }
      const newGoals = [...state.goals]
      newGoals.unshift(newGoal)
      return { ...state, goals: newGoals }
    }
    case ActionTypes.DELETE: {
      if (action.payload.id) {
        const targetGoalIndex = state.goals.findIndex(g => g.id === action.payload.id)
        const newGoals = [...state.goals]
        newGoals.splice(targetGoalIndex, 1)
        return { ...state, goals: newGoals }
      }
      return { ...state }
    }
    case ActionTypes.TOGGLE: {
      const newGoals = state.goals.map((goal: Goal): Goal => {
        if (goal.id === action.payload.id) {
          return { ...goal, status: goal.status === 0 ? 1 : 0 }
        }
        return goal
      })
      return { ...state, goals: newGoals }
    }
    case ActionTypes.SHOW: {
      if (
        action.payload.id &&
        state.goals.findIndex(g => g.id === action.payload.id) !== -1
      ) {
        return { ...state, focusGoal: action.payload }
      }
      return { ...state }
    }
    default:
      return { ...state }
  }
}

const GoalProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(goalReducer, defaultGoalState)
  return (
    <GoalContext.Provider value={{ state, dispatch }}>
      { children }
    </GoalContext.Provider>
  )
}
export default GoalProvider