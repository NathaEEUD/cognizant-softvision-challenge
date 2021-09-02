import React from 'react'

import { ICandidate } from './types'

export enum CandidatesActionKind {
  MOVE = 'MOVE',
  ADD = 'ADD',
  FETCH_SUCCESS = 'FETCH_SUCCESS'
}
type Action = {
  type: CandidatesActionKind
  // payload: Partial<ICandidate> | ICandidate[]
  payload: any
}
type Dispatch = (action: Action) => void
type State = { candidates: ICandidate[] }
type CandidateProviderProps = { children: React.ReactNode }

const CandidatesContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined)

const INITIAL_STATE: State = {
  candidates: []
}

function candidatesReducer(state: State, action: Action) {
  switch (action.type) {
    case CandidatesActionKind.MOVE: {
      return {
        ...state,
        candidates: state.candidates.map(candidate => {
          if (candidate.id === action.payload.id) {
            return {
              ...candidate,
              step_id: action.payload.step_id
            }
          }

          return candidate
        })
      }
    }

    case CandidatesActionKind.FETCH_SUCCESS: {
      return {
        ...state,
        candidates: action.payload
      }
    }

    case CandidatesActionKind.ADD: {
      return {
        ...state,
        candidates: state.candidates.concat(action.payload)
      }
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function CandidatesProvider({ children }: CandidateProviderProps) {
  const [state, dispatch] = React.useReducer(
    candidatesReducer,
    INITIAL_STATE as never
  )

  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch }

  return (
    <CandidatesContext.Provider value={value}>
      {children}
    </CandidatesContext.Provider>
  )
}

function useCandidates() {
  const context = React.useContext(CandidatesContext)

  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider')
  }

  return context
}

export { CandidatesProvider, useCandidates }
