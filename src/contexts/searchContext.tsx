import { createContext, ReactNode, useContext, useReducer } from 'react';


type State = {
  name: string
  capital: string
  region: string
  subregion: string
  languages: string
  flag: string
}

type Action = {
  type: SearchActions
  payload: any
}
type ContextType = {
  state: State
  dispatch: (action: Action) => void
}
type SearchProviderProps = {
  children: ReactNode
}

const initialData: State = {
  name: '',
  capital: '',
  region: '',
  subregion: '',
  languages: '',
  flag: '',
}
//Context
export const SearchContext = createContext<ContextType | undefined>(undefined)

//Reducer
export enum SearchActions {
  setName,
  setCapital,
  setRegion,
  setSubregion,
  setLanguages,
  setFlag
}
const searchReducer = (state: State, action: Action) => {
  switch(action.type) {
    case SearchActions.setName:
      return {...state, name: action.payload}
    case SearchActions.setCapital:
      return {...state, capital: action.payload}
    case SearchActions.setRegion:
      return {...state, region: action.payload}
    case SearchActions.setSubregion:
      return {...state, subregion: action.payload}
    case SearchActions.setLanguages:
      return {...state, languages: action.payload}
    case SearchActions.setFlag:
      return {...state, flag: action.payload}
    default:
      return state
  }
} 
//Provider
export const SearchProvider = ({ children }: SearchProviderProps) => {
  const [state, dispatch] = useReducer(searchReducer, initialData)
  const value = { state, dispatch }
  return (
  <SearchContext.Provider value={value}>
    {children}
  </SearchContext.Provider> )
}


//Context Hook
export const useSearch = () => {
  const context = useContext(SearchContext)
  if(context === undefined) {
    throw new Error('useSearch needs to be used inside of SearchProvider')
  }
  return context
}
