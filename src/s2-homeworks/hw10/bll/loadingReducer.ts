export type StateType = {
  isLoading: boolean
}

export type LoadingActionType = {
  type: 'CHANGE_LOADING'
  isLoading: boolean
}

export type ActionType = LoadingActionType

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
  type: 'CHANGE_LOADING',
  isLoading,
})

const initState: StateType = {
  isLoading: false,
}

export const loadingReducer = (state = initState, action: ActionType): StateType => { // fix any
  switch (action.type) {
    case 'CHANGE_LOADING':
      return {...state, isLoading: action.isLoading}
    default:
      return state
  }
}
