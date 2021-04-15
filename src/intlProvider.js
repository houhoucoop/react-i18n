import React, { useState, useMemo } from 'react'
import PropTypes from 'prop-types'

import { IntlContext } from './context'
import { formatLocale, getNestedObjValue } from './utils'

const IntlProvider = ({ locale, translations, children }) => {
  const initLocaleKey = formatLocale(locale)
  const [localeKey, setLocaleKey] = useState(initLocaleKey)

  const getTranslation = (key) => {
    const keys = key.split('.')
    const translation = getNestedObjValue(translations[localeKey], keys)

    return translation
  }

  const setLocale = (locale) => {
    const localeKey = formatLocale(locale)

    return setLocaleKey(localeKey)
  }

  const contextValue = useMemo(
    () => ({
      t: getTranslation,
      setLocale: setLocale
    }),
    [getTranslation, setLocale]
  )

  return (
    <IntlContext.Provider value={contextValue}>{children}</IntlContext.Provider>
  )
}

IntlProvider.propTypes = {
  locale: PropTypes.string.isRequired,
  translations: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
}

export default IntlProvider
