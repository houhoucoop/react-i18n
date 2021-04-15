import { createContext, useContext } from 'react'

export const IntlContext = createContext()

// Get context data in hooks way
export const useIntl = () => useContext(IntlContext)

// Get context data in render props way
export const Intl = ({ children }) => {
  const intlContextValue = useContext(IntlContext)

  return children(intlContextValue)
}
