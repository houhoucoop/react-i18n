import React from 'react'
import { IntlProvider } from 'react-i18n'

import EN_US from './i18n/en-us.js'
import ZH_TW from './i18n/zh-tw.js'

import Foo from './Foo'
import 'react-i18n/dist/index.css'

const App = () => {
  return (
    <IntlProvider locale='zh-TW' translations={{ EN_US, ZH_TW }}>
      <Foo />
    </IntlProvider>
  )
}

export default App
