export type StateType = {
  themeId: number
}

export type SetThemeActionType = {
  type: 'SET_THEME_ID'
  id: number
}

export type ActionsType =
  SetThemeActionType

const initState: StateType = {
  themeId: 1,
}

export const themeReducer = (state = initState, action: ActionsType): StateType => {
  switch (action.type) {
    case 'SET_THEME_ID':
      return {...state, themeId: action.id}
    default:
      return state
  }
}

export const changeThemeId = (id: number): SetThemeActionType => ({type: 'SET_THEME_ID', id})
