import {UserType} from '../HW8'

type ActionType =
  | { type: 'sort'; payload: 'up' | 'down' }
  | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
  switch (action.type) {
    case 'sort': {
      const sortUp = (a: UserType, b: UserType) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      }
      const sortDown = (a: UserType, b: UserType) => {
        if (a.name < b.name) {
          return 1;
        }
        if (a.name > b.name) {
          return -1;
        }
        return 0;
      }

      return action.payload === 'up' ? state.sort(sortUp) : state.sort(sortDown)
    }
    case 'check': {
      return state.filter(u => u.age >= 18)
    }
    default:
      return state
  }
}
